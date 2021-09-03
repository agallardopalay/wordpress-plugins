// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;


import Inspector from "../components/inspector";
import Container from "../../../lib/deprecated/1.0.0/container";
import classnames from "classnames";

// Register editor components
const {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
} = wp.blockEditor;



class VTContainerBlock_1_0_0 extends Component {

	render() {

		// Setup the attributes
		const {
			attributes: {
				containerWidth,
				containerMaxWidth,
				containerImgURL,
				containerImgAlt,
				containerDimRatio,
			},
			setAttributes
		} = this.props;

		const TEMPLATE = [
			['vt/cta', { text: 'Make this Recipe' }],
			['core/paragraph', {text: 'Paragraph Sample'}]
		];

		let columnStyles = {};

		if (containerMaxWidth) {
			_.extend(columnStyles, {maxWidth: `${containerMaxWidth}px`,});
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
			</Container>
		];
	}
}

class SaveContainer_1_0_0 extends Component {
	render() {
		// Setup the attributes
		const {
			containerMaxWidth,
			containerImgURL,
			containerImgAlt,
			containerDimRatio,
		} = this.props.attributes;

		let columnStyles = {};

		if (containerMaxWidth) {
			_.extend(columnStyles, {maxWidth: `${containerMaxWidth}px`,});
		}

		// Save the block markup for the front end
		return (
			<Container { ...this.props }>
				<div
					className={ classnames(
						'ab-container-inside',
						this.props.attributes.containerWrapperClass
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
							this.props.attributes.containerInnerClass
						)}
						style={ columnStyles }
					>
						<InnerBlocks.Content className={this.props.attributes.containerInnerClass} />
					</div>
				</div>
			</Container>
		);
	}
}

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
	}
};


const deprecated = [
	// Version 1.0.0
	{
		attributes: blockAttributes,
		edit: VTContainerBlock_1_0_0,
		save: SaveContainer_1_0_0,
	},
];

export default deprecated;

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}
