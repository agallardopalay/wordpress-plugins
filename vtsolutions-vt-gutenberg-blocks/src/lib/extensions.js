
import styleToCss from '../lib/style-object-to-css-string/dist'
import BoxModelControl from "./box-model-control";
import {vtKitVariables} from "./responsive-tab-panel";
import _reverse from 'lodash/reverse';

import {Style} from "radium";

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/group',
	'core/image',
	'core/paragraph',
	'core/heading',
	'vt/cta',
	'vt/tabs'
];

window.metaQueries = {};
let savingMediaQueries = false;

wp.data.subscribe(function () {
	const isSavingPost = wp.data.select('core/editor').isSavingPost();
	const isAutoSavingPost = wp.data.select('core/editor').isAutosavingPost();

	if ((isSavingPost || isAutoSavingPost) && !savingMediaQueries) {
		// start saving data
		savingMediaQueries = true;

		let styles = '';
		let rules = {};
		_.each(window.metaQueries, (meta, clientId) => {

			const {name, styles: {responsive, ...metaStyles}} = meta;

			let scopeSelector = `[vt-id="${clientId}"]`;

			if (name === 'vt/cta') {
				scopeSelector = `${scopeSelector} > a`;
			}

			if (!_.isEmpty(metaStyles)) {
				styles += `${scopeSelector} {${styleToCss(metaStyles)}}`;

				rules[scopeSelector] = metaStyles;
			}

			if (!_.isEmpty(responsive)) {
				// css must be in order of big to small in order to have proper responsive settings
				const inverseKeys = _reverse(_.keys(vtKitVariables.media_sizes));

				_.each(inverseKeys, (size) => {
					const sizeStyles = responsive && responsive[size];
					if (size !== 'all' && !_.isEmpty(sizeStyles)) {
						styles += ` @media screen and (max-width: ${vtKitVariables.media_sizes[size]}px) {${scopeSelector} {${styleToCss(sizeStyles)}}}`;
					}
				});
			}
		});

		const post_id = wp.data.select('core/editor').getCurrentPostId();
		const post_type = wp.data.select('core/editor').getCurrentPostType();

		if (post_id) {
			wp.apiFetch( {
				path: `/wp/v2/${post_type}s/${post_id}`,
				method: 'POST',
				data: {  meta: { vt_media_queries: styles} },
			} )
			.then( res => {
				savingMediaQueries = false;
			} )
			.catch( error => {
				savingMediaQueries = false;
			})
		}
	}

});


/**
 * Add spacing control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addSpacingControlAttribute = ( settings, name ) => {
	// Do nothing if it's another block than our defined ones.
	if ( ! enableSpacingControlOnBlocks.includes( name ) ) {
		return settings;
	}

	// Use Lodash's assign to gracefully handle if attributes are undefined
	settings.attributes = _.assign( settings.attributes, {
		boxModel: {
			type: 'object',
			default: {}
		},
		responsive: {
			type: 'object',
			default: {}
		},
		vtID: {
			type: 'string',
			default: null
		}
	} );

	return settings;
};

addFilter( 'blocks.registerBlockType', 'extend-block-example/attribute/spacing', addSpacingControlAttribute );

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {clientId, name, attributes, attributes: {vtID, boxModel = {}}} = props;

		let blockId = vtID;

		if (!vtID) {
			props.setAttributes({vtID: clientId});
			blockId = clientId;
		}

		if (boxModel && !_.isEmpty(boxModel)) {
			window.metaQueries[blockId] = {
				name,
				styles: boxModel
			};
		}

		// Do nothing if it's another block than our defined ones.
		if ( ! enableSpacingControlOnBlocks.includes( props.name ) ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		let rules = {};
		if (!_.isEmpty(boxModel)) {
			const {responsive, ...metaStyles} = boxModel;

			let scopeSelector = `[vt-id="${blockId}"]`;

			if (name === 'vt/cta') {
				scopeSelector = `.editor-styles-wrapper ${scopeSelector} .ab-cta-button .btn`;
			}

			if (!_.isEmpty(metaStyles)) {
				rules[`${scopeSelector}`] = metaStyles;
			}

			// css must be in order of big to small in order to have proper responsive settings
			const inverseKeys = _reverse(_.keys(vtKitVariables.media_sizes));

			let mediaQueries = {};
			if (!_.isEmpty(responsive)) {
				_.each(inverseKeys, (size) => {

					const sizeStyles = responsive[size];

					if (size !== 'all' && !_.isEmpty(sizeStyles)) {
						mediaQueries[`screen and (max-width: ${vtKitVariables.media_sizes[size]}px)`] = {
							[`${scopeSelector}`]: sizeStyles
						}
					}

				});
			}

			rules['mediaQueries'] = mediaQueries;
		}

		return (
			<Fragment>
				<div className="core-block-editor-wrapper" vt-id={blockId}>
					<Style rules={rules} />
					<BlockEdit { ...props}  />
				</div>
				<InspectorControls>
					<PanelBody>
						<BoxModelControl
							{...props}
							label={__('Box Model Settings', 'vt')}
							value={ boxModel }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );

/**
 * Add margin style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addSpacingExtraProps = ( saveElementProps, blockType, attributes ) => {
	// Do nothing if it's another block than our defined ones.
	if ( ! enableSpacingControlOnBlocks.includes( blockType.name ) ) {
		return saveElementProps;
	}

	const { boxModel, vtID } = attributes;

	if ( !_.isEmpty(boxModel) && vtID ) {
		// Use Lodash's assign to gracefully handle if attributes are undefined
		_.assign( saveElementProps, { 'vt-id': vtID } );
	}

	return saveElementProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'extend-block-example/get-save-content/extra-props', addSpacingExtraProps );
