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

import BoxModelControl from './../../../../lib/box-model-control';

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
			showModalHeader,
			showModalCloseButton,
			showModalFooter,
			showModalOnDesktop,
			showModalOnMobile,
			showMobileView,
			callTimeout,
			urlAttribute,
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

					<ToggleControl
						label={ 'Show Modal CloseButton' }
						checked={ showModalCloseButton  }
						onChange={ () => this.props.setAttributes( { showModalCloseButton : !showModalCloseButton  } ) }
					/>

					<ToggleControl
						label={ 'Show Modal on Desktop' }
						checked={ showModalOnDesktop  }
						onChange={ () => this.props.setAttributes( { showModalOnDesktop : !showModalOnDesktop  } ) }
					/>

					<ToggleControl
						label={ 'Show Modal on Mobile' }
						checked={ showModalOnMobile  }
						onChange={ () => this.props.setAttributes( { showModalOnMobile : !showModalOnMobile  } ) }
					/>

					<ToggleControl
						label={ showMobileView ? 'Toggle Desktop View' : 'Toggle Mobile View' }
						checked={ showMobileView }
						onChange={ () => this.props.setAttributes( { showMobileView  : !showMobileView   } ) }
					/>

					<TextControl
						label={ 'Call Timeout' }
						type="number"
						value={ callTimeout }
						onChange={ ( value ) => this.props.setAttributes( { callTimeout: value } ) }
					/>

					<TextControl
						label={ 'Call Trigger Url Attribute' }
						type="text"
						value={ urlAttribute }
						onChange={ ( value ) => this.props.setAttributes( { urlAttribute: value } ) }
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
