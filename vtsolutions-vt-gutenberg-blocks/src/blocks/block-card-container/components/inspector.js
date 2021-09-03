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
} = wp.editor;

// Import Inspector components
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
	Placeholder,
	RangeControl,
	SelectControl,
	ToggleControl,
	IconButton,
	TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const {containerPaddingTop, containerPaddingRight, containerPaddingBottom, containerPaddingLeft, containerMarginTop, containerMarginBottom, containerMaxWidth, containerBackgroundColor, containerDimRatio, containerImgURL, containerImgID, containerImgAlt, containerInnerClass, cardType } = this.props.attributes;
		const { setAttributes, attributes } = this.props;

		const onSelectImage = img => {
			setAttributes( {
				containerImgID: img.id,
				containerImgURL: img.url,
				containerImgAlt: img.alt,
			} );
		};

		const onRemoveImage = () => {
			setAttributes({
				containerImgID: null,
				containerImgURL: null,
				containerImgAlt: null,
			});
		};

		const cardTypeOptions = [
			{ value: '', label: __( 'Select Card Type' ) },
			{ value: 'card', label: __( 'Card' ) },
			{ value: 'flash-card', label: __( 'Flash Card' ) }
		];

		// Update color values
		const onChangeBackgroundColor = value => setAttributes( { containerBackgroundColor: value } );

		return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Card Type' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Button Type', 'vt' ) }
					value={ cardType }
					options={ cardTypeOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( value ) => { this.props.setAttributes( {cardType: value } ) } }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Container Options' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Padding Top (%)' ) }
					value={ containerPaddingTop }
					onChange={ ( value ) => this.props.setAttributes( { containerPaddingTop: value } ) }
					min={ 0 }
					max={ 30 }
					step={ .5 }
				/>

				<RangeControl
					label={ __( 'Padding Bottom (%)' ) }
					value={ containerPaddingBottom }
					onChange={ ( value ) => this.props.setAttributes( { containerPaddingBottom: value } ) }
					min={ 0 }
					max={ 30 }
					step={ .5 }
				/>

				<RangeControl
					label={ __( 'Padding Left (%)' ) }
					value={ containerPaddingLeft }
					onChange={ ( value ) => this.props.setAttributes( { containerPaddingLeft: value } ) }
					min={ 0 }
					max={ 30 }
					step={ .5 }
				/>

				<RangeControl
					label={ __( 'Padding Right (%)' ) }
					value={ containerPaddingRight }
					onChange={ ( value ) => this.props.setAttributes( { containerPaddingRight: value } ) }
					min={ 0 }
					max={ 30 }
					step={ .5 }
				/>

				<RangeControl
					label={ __( 'Margin Top (%)' ) }
					value={ containerMarginTop }
					onChange={ ( value ) => this.props.setAttributes( { containerMarginTop: value } ) }
					min={ 0 }
					max={ 30 }
					step={ 1 }
				/>

				<RangeControl
					label={ __( 'Margin Bottom (%)' ) }
					value={ containerMarginBottom }
					onChange={ ( value ) => this.props.setAttributes( { containerMarginBottom: value } ) }
					min={ 0 }
					max={ 30 }
					step={ .5 }
				/>

				<RangeControl
					label={ __( 'Inside Container Max Width (px)' ) }
					value={ containerMaxWidth }
					onChange={ ( value ) => this.props.setAttributes( { containerMaxWidth: value } ) }
					min={ 500 }
					max={ 1600 }
					step={ 1 }
				/>
				<TextControl
					label={ __( 'Container Inner Class', 'vt' ) }
					type="url"
					value={ containerInnerClass }
					onChange={ ( value ) => this.props.setAttributes( { containerInnerClass: value } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( 'Background Options' ) } initialOpen={ false }>
				<p>{ __( 'Select a background image:' ) }</p>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ containerImgID }
					render={ ( { open } ) => (
						<div>
							<IconButton
								className="ab-container-inspector-media"
								label={ __( 'Edit image' ) }
								icon="format-image"
								onClick={ open }
							>
								{ __( 'Select Image' ) }
							</IconButton>

							{ containerImgURL && !! containerImgURL.length && (
								<IconButton
									className="ab-container-inspector-media"
									label={ __( 'Remove Image' ) }
									icon="dismiss"
									onClick={ onRemoveImage }
								>
									{ __( 'Remove' ) }
								</IconButton>
							) }
						</div>
					) }
				>
				</MediaUpload>

				{ containerImgURL && !! containerImgURL.length && (
					<RangeControl
						label={ __( 'Image Opacity' ) }
						value={ containerDimRatio }
						onChange={ ( value ) => this.props.setAttributes( { containerDimRatio: value } ) }
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
				) }



				<PanelColorSettings
					title={ __( 'Background Color' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: containerBackgroundColor,
						label: __( 'Background Color' ),
						onChange: onChangeBackgroundColor,
					} ] }
				>
				</PanelColorSettings>
			</PanelBody>
		</InspectorControls>
		);
	}
}
