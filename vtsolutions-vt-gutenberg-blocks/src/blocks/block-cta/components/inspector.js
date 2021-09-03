/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const {
  InspectorControls,
  BlockDescription,
  ColorPalette,
  PanelColorSettings,
  MediaUpload,
} = wp.blockEditor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	TextControl,
	Slot,
	FontSizePicker,
} = wp.components;

import BoxModelControl from './../../../lib/box-model-control';
import ButtonAttributes from './../../../lib/button-attributes-control';

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	getPageModalBlockIDs() {

		const pageModalBlocks = window.wp_modals;

		let modalIDOptions = [
			{ value: '', label: __( 'None' ) },
		];

		_.each(pageModalBlocks, (blockID) => {

			const modalBlock = wp.data.select('core/block-editor').getBlock(blockID);

			const {attributes: {modalTitle, modalID}} = modalBlock;

			modalIDOptions.push({
				value: modalID,
				label: modalTitle ? modalTitle : modalID,
			})
		});

		return modalIDOptions.map( ({ value, label }) => ( {
			value: value,
			label: label,
		} ) );
	}

	render() {

		// Setup the attributes
		const {
			boxModel,
			buttonText,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			buttonTextColor,
			buttonType,
			buttonTarget,
			toggleModal,
			ctaTitle,
			ctaText,
			titleFontSize,
			ctaTextFontSize,
			ctaBackgroundColor,
			ctaTextColor,
			dimRatio,
			imgURL,
			imgID,
			imgAlt,
			btnIcon,
			customAttributes,
			noWrapper,
			modalID,
			linkClassNames
		} = this.props.attributes;
		const { setAttributes } = this.props;

		// Button size values
		const buttonTypeOptions = [
			{ value: '', label: __( 'None' ) },
			{ value: 'link', label: __( 'Link' ) },
			{ value: 'primary', label: __( 'Primary' ) },
			{ value: 'secondary', label: __( 'Secondary' ) },
			{ value: 'slider', label: __( 'Slider' ) },
			{ value: 'footer', label: __( 'Footer' ) },
		];

		const buttonIconsOptions = [
			{ value: '', label: __( 'None' ) },
			{ value: 'chevron-circle-left', label: __( 'chevron-circle-left' ) },
			{ value: 'chevron-circle-right', label: __( 'chevron-circle-right' ) },
			{ value: 'chevron-circle-up', label: __( 'chevron-circle-up' ) },
			{ value: 'chevron-circle-down', label: __( 'chevron-circle-down' ) },
			{ value: 'universal-access', label: __( 'universal-access' ) },
			{ value: 'angle-double-right', label: __( 'angle-double-right' ) },
		];


		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { ctaBackgroundColor: value } );
		const onChangeTextColor = value => setAttributes( { ctaTextColor: value } );
		const onChangeButtonColor = value => setAttributes( { buttonBackgroundColor: value } );
		const onChangeButtonTextColor = value => setAttributes( { buttonTextColor: value } );

		const ctaCustomClass = linkClassNames.join(' ');

		return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Text Options', 'vt' ) } initialOpen={ true }>

				<RangeControl
					label={ __( 'Title Font Size', 'vt' ) }
					value={ titleFontSize }
					onChange={ ( value ) => this.props.setAttributes( { titleFontSize: value } ) }
					min={ 24 }
					max={ 60 }
					step={ 2 }
				/>

				<RangeControl
					label={ __( 'Text Font Size', 'vt' ) }
					value={ ctaTextFontSize }
					onChange={ ( value ) => this.props.setAttributes( { ctaTextFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 2 }
				/>

				<TextControl
					label={ 'CTA Custom Classes' }
					type="text"
					value={ ctaCustomClass }
					onChange={ ( value ) => this.props.setAttributes( { linkClassNames: value.split(' ') } ) }
				/>
			</PanelBody>

			<PanelBody title={ 'Button Options' } initialOpen={ false }>
				<ToggleControl
					label={ 'Open link in new window' }
					checked={ buttonTarget }
					onChange={ () => this.props.setAttributes( { buttonTarget: ! buttonTarget } ) }
				/>

				<ToggleControl
					label={ 'No Wrapper' }
					checked={ noWrapper }
					onChange={ () => this.props.setAttributes( { noWrapper: ! noWrapper } ) }
				/>

				<ToggleControl
					label={ 'Open as Modal' }
					checked={ toggleModal }
					onChange={ () => this.props.setAttributes( { toggleModal: ! toggleModal } ) }
				/>

				{
					toggleModal && (
						<SelectControl
							label={ 'Select Modal' }
							value={ modalID }
							options={ this.getPageModalBlockIDs() }
							onChange={ ( value ) => { this.props.setAttributes( { modalID: value } ) } }
						/>
					)
				}

				<SelectControl
					label={ __( 'Button Type', 'vt' ) }
					value={ buttonType }
					options={ buttonTypeOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( { buttonType: value } ) } }
				/>

				<SelectControl
					label={ __( 'Button Icon', 'vt' ) }
					value={ btnIcon }
					options={ buttonIconsOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( { btnIcon: value } ) } }
				/>

				<PanelColorSettings
					title={ __( 'Button Color', 'vt' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: buttonBackgroundColor,
						onChange: onChangeButtonColor,
						label: __( 'Button Color', 'vt' ),
					} ] }
				>
				</PanelColorSettings>

				<PanelColorSettings
					title={ __( 'Button Text Color', 'vt' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: buttonTextColor,
						onChange: onChangeButtonTextColor,
						label: __( 'Button Text Color', 'vt' ),
					} ] }
				>
				</PanelColorSettings>
			</PanelBody>
		</InspectorControls>
		);
	}
}
