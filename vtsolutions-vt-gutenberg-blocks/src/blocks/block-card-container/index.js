/**
 * BLOCK: vt Container
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import Container from './components/container';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText,
	InnerBlocks,
} = wp.editor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	withState,
	Toolbar,
	SelectControl,
	Placeholder,
} = wp.components;

const blockAttributes = {
	containerPaddingTop: {
		type: 'number',
	},
	containerPaddingRight: {
		type: 'number',
	},
	containerPaddingBottom: {
		type: 'number',
	},
	containerPaddingLeft: {
		type: 'number',
	},
	containerMarginTop: {
		type: 'number',
	},
	containerMarginBottom: {
		type: 'number',
	},
	containerWidth: {
		type: 'string',
	},
	containerMaxWidth: {
		type: 'number',
		default: 1600,
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
	containerInnerClass: {
		type: 'string',
	},
	cardType: {
		type: 'string'
	}
};

class vtContainerBlock extends Component {

	render() {

		// Setup the attributes
		const {
			attributes: {
				containerPaddingTop,
				containerPaddingRight,
				containerPaddingBottom,
				containerPaddingLeft,
				containerMarginTop,
				containerMarginBottom,
				containerWidth,
				containerMaxWidth,
				containerBackgroundColor,
				containerImgURL,
				containerImgID,
				containerImgAlt,
				containerDimRatio,
				cardType
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		const onSelectImage = img => {
			setAttributes( {
				containerImgID: img.id,
				containerImgURL: img.url,
				containerImgAlt: img.alt,
			} );
		};

		let TEMPLATE = [
			['vt/ab-columns', {"columns":2,"layout":"md_4_8"},[
				['vt/ab-column', {className:"col-md-4"}, [
					['core/image', {"className":"img-thumbnail"}]
				]],
				['vt/ab-column', {className:"col-md-8"},[
					['core/heading', {"level":3, text: 'Card Title'}],
					['core/paragraph', { text: 'Card Description' }],
					['vt/cta', { buttonAlignment:"cleft", text: 'Make this Recipe' }],
				]]
			]]
		];

		if (cardType === 'flash-card') {
			TEMPLATE = [
				['vt/container', {className: "front"},[
					['core/heading', {"level":4, text: 'Card Title'}],
					['core/list', { "ordered":true }],
					['vt/cta', {buttonAlignment:"center", text: 'Make this Recipe', 'href': "javascript:void(0);"}],
				]],
				['vt/container', {"containerPaddingTop":5, "className":"back"},[
					['core/paragraph', { text: '<strong>B)</strong> Answer' }],
					['vt/cta', {buttonAlignment:"center", text: 'Make this Recipe'}],
				]]
			];
		}

		const cardTypeOptions = [
			{ value: '', label: __( 'Select Card Type' ) },
			{ value: 'card', label: __( 'Card' ) },
			{ value: 'flash-card', label: __( 'Flash Card' ) }
		];

		if (!cardType) {
			return [<Placeholder
				key="placeholder"
				icon="editor-table"
				label={__('vt Card Container Placeholder', 'vt')}
				instructions={sprintf(__("Select a layout for this card. To switch from one type onother, reset cardType to null", 'vt'))}
				className={'ab-column-selector-placeholder'}
			>
				<SelectControl
					label={ __( 'Card Type', 'vt' ) }
					value={ cardType }
					options={ cardTypeOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( {cardType: value } ) } }
				/>
			</Placeholder>];
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
			<Container { ...this.props } className={cardType}>
				<div className="card-body">
					<div
						className={classnames(
							this.props.containerInnerClass,
						)}
						style={ {
							maxWidth: `${containerMaxWidth}px`,
						} }
					>
						<InnerBlocks
							template={TEMPLATE}
							templateLock={"all"}
						 />
					</div>
				</div>
			</Container>
		];
	}
}

// Register the block
registerBlockType( 'vt/card-container', {
	title: __( 'vt Card Container', 'vt' ),
	description: __( 'Add a container block to wrap several blocks in a parent container.', 'vt' ),
	icon: 'editor-table',
	category: 'v-tech',
	keywords: [
		__( 'container', 'vt' ),
		__( 'section', 'vt' )
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
			containerInnerClass,
			cardType
		} = props.attributes;

		// Save the block markup for the front end
		return (
			<Container { ...props } className={cardType}>
				<div className="card-body">
					<div
						className={ classnames(
							props.attributes.containerInnerClass
						)}
						style={ {
							maxWidth: `${containerMaxWidth}px`,
						} }
					>
						<InnerBlocks.Content className={containerInnerClass} />
					</div>
				</div>
			</Container>
		);
	}

} );
