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
	PanelBody,
	FormToggle,
	RangeControl,
	SelectControl,
	FontSizePicker,
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
			iconBackgroundColor,
			iconColor,

		} = this.props.attributes;
		const { setAttributes } = this.props;

		const onChangeIconBgColor = value => setAttributes( { iconBackgroundColor: value } );
		const onChangeIconColor = value => setAttributes( { iconColor: value } );

		const iconTypes = _.map(faClasses, (icon) => {
			return { value: icon, label: icon }
		});

		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Icon Settings', 'vt' ) } initialOpen={ true }>

					<BoxModelControl
						{...this.props}
						className={''}
						label={__('Box Model Settings', 'vt')}
						value={ boxModel }
						onChange={ ( value ) => this.props.setAttributes( { boxModel: value } ) }
					/>

					<RangeControl
						label={ __( 'Icon Size', 'vt' ) }
						value={ size }
						onChange={ ( value ) => this.props.setAttributes( { size: value } ) }
						min={ 24 }
						max={ 60 }
						step={ 2 }
					/>

					<SelectControl
						label={ __( 'Button Icon', 'vt' ) }
						value={ type }
						options={ iconTypes.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( value ) => { this.props.setAttributes( { type: value } ) } }
					/>
				</PanelBody>
				<PanelBody>
					<PanelColorSettings
						title={ __( 'Background Color', 'vt' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: iconBackgroundColor,
							onChange: onChangeIconBgColor,
							label: __( 'Background Color', 'vt' ),
						} ] }
					>
					</PanelColorSettings>

					<PanelColorSettings
						title={ __( 'Icon Color', 'vt' ) }
						initialOpen={ false }
						colorSettings={ [ {
							value: iconColor,
							onChange: onChangeIconColor,
							label: __( 'Icon Color', 'vt' ),
						} ] }
					>
					</PanelColorSettings>
				</PanelBody>
			</InspectorControls>
		);
	}
}
