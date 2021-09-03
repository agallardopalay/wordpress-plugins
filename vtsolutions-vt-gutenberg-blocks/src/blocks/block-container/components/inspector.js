/**
 * Inspector Controls
 */

import BoxModelControl from './../../../lib/box-model-control';

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
} = wp.components;

const WPColorPicker = wp.components.ColorPicker;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const {
			containerID,
			containerMaxWidth,
			containerBackgroundColor,
			containerDimRatio,
			containerImgURL,
			containerImgID,
			containerImgAlt,
			containerInnerClass,
			containerWrapperClass,
			boxModel,
			boxDimensions
		} = this.props.attributes;
		const { setAttributes } = this.props;

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

		// Update color values

		return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Container Options' ) } initialOpen={ true }>

				<BoxModelControl
					{...this.props}
					className={''}
					label={__('Box Model Settings', 'vt')}
					value={ boxModel }
					onChange={ ( value ) => this.props.setAttributes( { boxModel: value } ) }
				/>

				<TextControl
					label={ __( 'Container ID', 'vt' ) }
					type="url"
					value={ containerID }
					onChange={ ( value ) => this.props.setAttributes( { containerID: value } ) }
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
					label={ __( 'Container Wrapper Class', 'vt' ) }
					type="url"
					value={ containerWrapperClass }
					onChange={ ( value ) => this.props.setAttributes( { containerWrapperClass: value } ) }
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

				<div>
					<p>{ __( 'Select Background Color' ) }</p>
					<WPColorPicker
						color={ containerBackgroundColor }
						onChangeComplete={ ( color ) => {
							let colorString;

							if ( typeof color.rgb === 'undefined' || color.rgb.a === 1 ) {
								colorString = color.hex;
							} else {
								const { r, g, b, a } = color.rgb;
								colorString = `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
							}

							this.props.setAttributes( { containerBackgroundColor: colorString } );
						} }
						disableAlpha={ false }
					/>
				</div>

			</PanelBody>
		</InspectorControls>
		);
	}
}
