/**
 * BLOCK: Atomic Blocks Call-To-Action
 */

// Import block dependencies and components
import classnames from 'classnames';
import Inspector from './components/inspector';
import CallToAction from './components/cta';
import icons from './../../lib/icons';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText,
} = wp.blockEditor;

// Register components
const {
	Button,
	withFallbackStyles,
	IconButton,
	Dashicon,
	Toolbar,
} = wp.components;

const blockAttributes = {
	buttonText: {
		type: 'string',
		default: 'Button Text...'
	},
	buttonUrl: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	buttonAlignment: {
		type: 'string',
		default: 'center'
	},
	buttonBackgroundColor: {
		type: 'string',
		default: ''
	},
	buttonTextColor: {
		type: 'string',
		default: ''
	},
	buttonType: {
		type: 'string',
		default: 'primary'
	},
	buttonTarget: {
		type: 'boolean',
		default: false
	},
	ctaTitle: {
		type: 'array',
		selector: '.ab-cta-title',
		source: 'children',
	},
	titleFontSize: {
		type: 'number',
		default: '32',
	},
	ctaTextFontSize: {
		type: 'number',
	},
	ctaText: {
		type: 'array',
		selector: '.ab-cta-text',
		source: 'children',
	},
	ctaWidth: {
		type: 'string',
	},

	// Deprecated
	ctaTitleFontSize: {
		type: 'string',
		default: '32'
	},
	btnIcon: {
		type: 'string'
	},
	noWrapper: {
		type: 'boolean',
		default: false
	},
	toggleModal: {
		type: 'boolean',
		default: false
	},
	modalID: {
		type: 'string'
	},
	linkClassNames: {
		type: 'array',
		default: []
	}
};

class ABCTABlock extends Component {

	render() {

		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonType,
				ctaWidth,
				btnIcon,
				linkClassNames
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};

		let btnClass = '';
		if (buttonType === 'primary') {
			btnClass = 'btn-primary btn-green';
		}
		else if (buttonType === 'secondary') {
			btnClass = 'btn-orange';
		}
		else {
			btnClass = `btn-${buttonType}`;
		}

		let buttonStyles = {};
		if (buttonBackgroundColor) {
			buttonStyles.backgroundColor = buttonBackgroundColor;
		}
		if (buttonTextColor) {
			buttonStyles.color = buttonTextColor;
		}

		const buttonClasses = classnames(linkClassNames.join(' '), 'btn', btnClass);

		return [
			// Show the alignment toolbar on focus
			<BlockControls>
				<BlockAlignmentToolbar
					value={ ctaWidth }
					onChange={ ctaWidth => setAttributes( { ctaWidth } ) }
					controls={ ['left','center', 'right' ] }
				/>
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ ( value ) => {
						setAttributes( { buttonAlignment: value } );
					} }
				/>

			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			// Show the button markup in the editor
			<CallToAction { ...this.props }>
				<div className="ab-cta-button">
					<div className={ buttonClasses } style={ buttonStyles }>
						<RichText
							tagName="span"
							placeholder={ __( 'Button text...', 'vt' ) }
							value={ buttonText }
							onChange={ (value) => setAttributes( { buttonText: value } ) }
						/>
						{ btnIcon && (
							<i className={`fa fa-${btnIcon}`} aria-hidden="true"></i>
						) }
					</div>
					{ isSelected && (
						<form
							key="form-link"
							className={ `blocks-button__inline-link ab-button-${buttonAlignment}`}
							onSubmit={ event => event.preventDefault() }
							style={ {
								textAlign: buttonAlignment,
							} }
						>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								className="button-url"
								value={ buttonUrl }
								onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
							/>
							<IconButton
								icon="editor-break"
								label={ __( 'Apply', 'vt' ) }
								type="submit"
							/>
						</form>
					) }
				</div>
			</CallToAction>
		];
	}
}

// Register the block
registerBlockType( 'vt/cta', {
	title: __( 'vt Button', 'vt' ),
	description: __( 'Add a call to action section with a title, text, and a button.', 'vt' ),
	icon: icons.button,
	category: 'v-tech',
	keywords: [
		__( 'call to action', 'vt' ),
		__( 'cta', 'vt' ),
		__( 'atomic', 'vt' ),
	],

	attributes: blockAttributes,

	getEditWrapperProps( { ctaWidth } ) {
		if ( 'left' === ctaWidth || 'right' === ctaWidth || 'full' === ctaWidth ) {
			return { 'data-align': ctaWidth };
		}
	},

	// Render the block components
	edit: ABCTABlock,

	// Save the attributes and markup
	save: function( props ) {

		// Setup the attributes
		const {
			buttonText,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			buttonTextColor,
			buttonType,
			buttonTarget,
			ctaTitle,
			ctaText,
			ctaTitleFontSize,
			titleFontSize,
			ctaTextFontSize,
			ctaWidth,
			ctaBackgroundColor,
			ctaTextColor,
			imgURL,
			imgID,
			imgAlt,
			dimRatio,
			btnIcon,
			toggleModal,
			modalID,
			linkClassNames
		} = props.attributes;

		let btnClass = '';
		if (!_.isNull(buttonType) && !_.isEmpty(buttonType)) {
			btnClass = `btn-${buttonType}`;
		}

		let buttonStyles = {};
		if (buttonBackgroundColor) {
			buttonStyles.backgroundColor = buttonBackgroundColor;
		}
		if (buttonTextColor) {
			buttonStyles.color = buttonTextColor;
		}

		// Save the block markup for the front end
		return (
			<CallToAction { ...props }>
				<a
					href={buttonUrl}
					target={buttonTarget ? '_blank' : null}
					className={classnames(
						linkClassNames.join(' '),
						(buttonType !== 'link') ? 'btn' : '',
						btnClass,
					)}
					style={buttonStyles}
					data-toggle={toggleModal ? 'modal' : null}
					data-target={toggleModal && modalID ? `#${modalID}` : null}
					rel="noopener noreferrer"
				>
					<RichText.Content
						value={`${buttonText} `}
					/>
					{btnIcon && (
						<i className={`fa fa-${btnIcon}`} aria-hidden="true"></i>
					)}
				</a>
			</CallToAction>
		);
	},
} );

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}
