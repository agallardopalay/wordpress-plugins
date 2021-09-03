/**
 * BLOCK: vt Container
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import Container from './../../lib/container';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';
import _reverse from "lodash/reverse";
import {vtKitVariables} from "../../lib/responsive-tab-panel";
import {Style} from "radium";
import deprecated from "./deprecated/index";

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
} = wp.blockEditor;


const blockAttributes = {
	containerWidth: {
		type: 'string',
	},
	containerMaxWidth: {
		type: 'number'
	},
	containerBackgroundColor: {
		type: 'string',
	},
	containerImgURL: {
		type: 'string',
		source: 'attribute',
		attribute: 'src',
		selector: 'img',
	},
	containerImgID: {
		type: 'number',
	},
	containerImgAlt: {
		type: 'string',
		source: 'attribute',
		attribute: 'alt',
		selector: 'img',
	},
	containerDimRatio: {
		type: 'number',
		default: 50,
	},
	containerWrapperClass: {
		type: 'string',
	},
	containerInnerClass: {
		type: 'string',
	},
	containerID: {
		type: 'string',
	},
	boxModel: {
		type: 'object',
		default: {}
	},
	boxDimensions: {
		type: 'object',
		default: {}
	},
	vtID: {
		type: 'string',
		default: null
	}
};

class vtContainerBlock extends Component {

	render() {

		// Setup the attributes
		const {
			clientId,
			name,
			attributes: {
				boxModel,
				containerWidth,
				containerMaxWidth,
				containerImgURL,
				containerImgAlt,
				containerDimRatio,
				vtID
			},
			setAttributes,
		} = this.props;

		let blockId = vtID

		if (!blockId) {
			this.props.setAttributes({vtID: clientId});
			blockId = clientId;
		}

		const TEMPLATE = [
			['vt/cta', { text: 'Make this Recipe' }],
			['core/paragraph', {text: 'Paragraph Sample'}]
		];

		let columnStyles = {};

		if (containerMaxWidth) {
			_.extend(columnStyles, {maxWidth: `${containerMaxWidth}px`,});
		}


		let rules = {};
		if (boxModel && !_.isEmpty(boxModel)) {
			window.metaQueries[blockId] = {
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

		return [
			// Show the alignment toolbar on focus
			<BlockControls>
				<BlockAlignmentToolbar
					value={ containerWidth }
					onChange={ containerWidth => setAttributes( { containerWidth } ) }
					controls={ [ 'center', 'full' ] }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			// Show the container markup in the editor
			<Container { ...this.props }>
				<div className={ classnames(
					'ab-container-inside',
					this.props.attributes.containerWrapperClass
					)}>
					{ containerImgURL && !! containerImgURL.length && (
						<div className="ab-container-image-wrap">
							<img
								className={ classnames(
									'ab-container-image',
									dimRatioToClass( containerDimRatio ),
									{
										'has-background-dim': containerDimRatio !== 0,
									}
								) }
								src={ containerImgURL }
								alt={ containerImgAlt }
							/>
						</div>
					) }

					<div
						className={classnames(
							this.props.containerInnerClass,
							'ab-container-content'
						)}
						style={ columnStyles }
					>
						<InnerBlocks template={TEMPLATE} />
					</div>
				</div>
				<Style rules={rules} />
			</Container>
		];
	}
}

// Register the block
registerBlockType( 'vt/container', {
	title: 'VT Container',
	description: 'Add a container block to wrap several blocks in a parent container.',
	icon: 'editor-table',
	category: 'v-tech',
	keywords: [
		'container',
		'section'
	],

	attributes: blockAttributes,

	getEditWrapperProps( { containerWidth } ) {
		if ( 'left' === containerWidth || 'right' === containerWidth || 'full' === containerWidth ) {
			return { 'data-align': containerWidth };
		}
	},

	// Render the block components
	edit: vtContainerBlock,

	// Save the attributes and markup
	save: function( props ) {

		// Setup the attributes
		const {
			containerMaxWidth,
			containerImgURL,
			containerImgAlt,
			containerDimRatio,
		} = props.attributes;

		let columnStyles = {};

		if (containerMaxWidth) {
			_.extend(columnStyles, {maxWidth: `${containerMaxWidth}px`,});
		}

		// Save the block markup for the front end
		return (
			<Container { ...props }>
				<div
					className={ classnames(
						'ab-container-inside',
						props.attributes.containerWrapperClass
					)}
				>
					{ containerImgURL && !! containerImgURL.length && (
						<div className="ab-container-image-wrap">
							<img
								className={ classnames(
									'ab-container-image',
									dimRatioToClass( containerDimRatio ),
									{
										'has-background-dim': containerDimRatio !== 0,
									}
								) }
								src={ containerImgURL }
								alt={ containerImgAlt }
							/>
						</div>
					) }

					<div
						className={ classnames(
							'ab-container-content',
							props.attributes.containerInnerClass
						)}
						style={ columnStyles }
					>
						<InnerBlocks.Content className={props.attributes.containerInnerClass} />
					</div>
				</div>
			</Container>
		);
	},

	/* Maintain deprecated blocks */
	deprecated

} );

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}
