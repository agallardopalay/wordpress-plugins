/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const {
	InspectorControls,
	BlockDescription,
	BlockControls,
	ColorPalette,
	PanelColorSettings,
	MediaUpload,
} = wp.blockEditor;

// Import Inspector components
const {
	BaseControl,
	PanelBody,
	FormToggle,
	RangeControl,
	SelectControl,
	FontSizePicker,
	TextControl,
	ToggleControl,
	ColorPicker,
} = wp.components;

import BoxModelControl from './../../../lib/box-model-control';
import faClasses from './../../../lib/faClasses';

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
			boxModel,
			size,
			type,
			backgroundColor,
			textColor,
			columns,
			showFormHeader,
			showHeaderAsTooltip,
			tooltipBackgroundColor,
			tooltipTextColor,
			submitBtnBackgroundColor,
			submitBtnTextColor,
			showModalHeader,
			showModalFooter,
			modalID

		} = this.props.attributes;


		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Form Settings', 'vt' ) } initialOpen={ true }>

					<BoxModelControl
						{...this.props}
						className={''}
						dimensions={true}
						label={__('Box Model Settings', 'vt')}
						value={ boxModel }
						onChange={ ( value ) => this.props.setAttributes( { boxModel: value } ) }
					/>

					<ToggleControl
						label={ 'Show Modal Header' }
						checked={ showModalHeader  }
						onChange={ () => this.props.setAttributes( { showModalHeader : !showModalHeader  } ) }
					/>

					<ToggleControl
						label={ 'Show Modal Footer' }
						checked={ showModalFooter  }
						onChange={ () => this.props.setAttributes( { showModalFooter : !showModalFooter  } ) }
					/>

					<TextControl
						label={ 'Modal ID' }
						type="text"
						value={ modalID }
						onChange={ ( value ) => this.props.setAttributes( { modalID: value } ) }
					/>


				</PanelBody>

			</InspectorControls>
		);
	}
}
