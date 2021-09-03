/**
 * External dependencies.
 */
import classnames from 'classnames';
import Slider from './slider';
import Inspector from './inspector';
import memoize from 'memize';
import _times from 'lodash/times';
import _reverse from "lodash/reverse";
import {vtKitVariables} from "../../../lib/responsive-tab-panel";
import {Style} from "radium";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
	withColors,
} = wp.blockEditor;
const {
	Placeholder,
	ButtonGroup,
	Tooltip,
	Button,
	SelectControl
} = wp.components;
const {applyFilters} = wp.hooks;


/* Set allowed blocks and media. */
const ALLOWED_BLOCKS = [ 'vt/container' ];

/* Get the column template. */
const getLayoutTemplate = memoize( ( attributes ) => {
	return _times( attributes.columns, (time) => {
		let className = 'carousel-item';
		if (time === 0) {
			className += ' active';
		}
		return [ 'vt/container', {className} ];
	} );
} );

class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
		};
	}

	getTabTemplate(attributes) {
		return _times( attributes.columns, (tabIndex) => {
			const className = (tabIndex === attributes.activeTab) ? 'active' : '';
			return [<div
				className={classnames(
					className,
					'slider-tab'
				)}
				tabIndex={tabIndex}
				onClick={() => {
					this.props.setAttributes( { activeTab: tabIndex} );

					const select = wp.data.select('core/block-editor');
					const innerBlocks = select.getBlock(this.props.clientId).innerBlocks;

					// Update all the inner blocks className
					// _.each(inner, (containerBlock, blockIndex) => {
					// 	const {attributes} = containerBlock;
					//
					// 	let className = 'tab-pane fade';
					//
					// 	if (tabIndex === blockIndex) {
					// 		className += ' show active';
					// 	}
					// 	attributes.className = className;
					// });
				}}
			>{`slide${tabIndex+1}`}</div>
			];
		} );
	}

	render() {

		const {
			attributes,
			setAttributes,
			clientId,
			name,
			attributes: {
				vtID,
				showBottomBar,
				boxModel,
			}
		} = this.props;

		let blockId = vtID;


		if (!attributes.slideId) {
			this.props.setAttributes({ slideId: blockId });
		}

		let rules = {};
		if (!vtID) {
			this.props.setAttributes({vtID: clientId});
			blockId = clientId;
		}
		if (boxModel && !_.isEmpty(boxModel)) {
			window.metaQueries[clientId] = {
				name,
				styles: boxModel
			};

			const {responsive, ...metaStyles} = boxModel;

			let scopeSelector = `[vt-id="${blockId}"]`;

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

		let templateLock = attributes.allowEdit ? "all" : '';

		return [
			<BlockControls key="controls">
				<BlockAlignmentToolbar
					value={ attributes.align }
					onChange={ align => setAttributes( { align } ) }
					controls={ [ 'center', 'wide', 'full' ] }
				/>
			</BlockControls>,
			<Inspector { ...this.props } key="inspector"/>,
			<Fragment>
				{
					attributes.columns &&
					<div
						className="slider-editor nav nav-tabs" role="tablist"
					>
						{ this.getTabTemplate( attributes ) }
					</div>
				}
				<Slider
					{ ...this.props }
					/* Pass through the live color value to the Columns component */
					backgroundColorValue={ this.props.backgroundColor.color }
					textColorValue={ this.props.textColor.color }
					slideId={blockId}
					key="columns"
				>
					<div
						className={ classnames(
							'ab-layout-column-wrap-admin',
							'row',
							'slider-inner'
						) }
						data-tab={attributes.activeTab ? attributes.activeTab : 0}
						style={ { maxWidth: attributes.columnMaxWidth ? attributes.columnMaxWidth : null } }
					>
						<InnerBlocks
							template={ getLayoutTemplate( attributes ) }
							templateLock={templateLock}
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
					</div>
				</Slider>
				<Style rules={rules} />
			</Fragment>
		];
	}
}

export default compose( [
	withColors(
		'backgroundColor',
		{ textColor: 'color' },
	),
] )( Edit );
