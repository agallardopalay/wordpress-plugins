

// Setup the block
const { __ } = wp.i18n;

// Import block components
const {
	InspectorControls,
	BlockDescription,
	ColorPalette,
	PanelColorSettings,
	MediaUpload,
} = wp.editor;

const {
	BaseControl,
	TextControl,
	SelectControl
} = wp.components;

/**
 * WordPress dependencies.
 */
const {
	Component,
	Fragment,
} = wp.element;

/**
 * WordPress dependencies
 */
const { withInstanceId } = wp.compose;

import _pickBy from 'lodash/pickBy';
import _cloneDeep from 'lodash/cloneDeep';


const unitOptions = [
	{
		value: 'px',
		label: __( 'px', 'vt' )
	},
	{
		value: '%',
		label: __( '%', 'vt' )
	},
	{
		value: 'em',
		label: __( 'em', 'vt' )
	},
	{
		value: 'vw',
		label: __( 'vw', 'vt' )
	},
	{
		value: 'vh',
		label: __( 'vh', 'vt' )
	},
	{
		value: 'auto',
		label: __( 'auto', 'vt' )
	},
];

class BoxDimension extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			minWidth: props.value.minWidth ? props.value.minWidth : null,
			minWidthUnit: props.value.minWidthUnit ? props.value.minWidthUnit : null,
			width: props.value.width ? props.value.width : null,
			widthUnit: props.value.widthUnit ? props.value.widthUnit`` : null,
			minHeight: props.value.minHeight ? props.value.minHeight : null,
			height: props.value.height ? props.value.height : null,
		};
	}

	onChangeTrigger(property, value) {
		const {attributes} = this.props;

		let boxDimensions = _cloneDeep(attributes.boxDimension);
		boxDimensions[property] = value;

		this.setState( {[property]: value});
		this.props.setAttributes( { boxDimensions} )
	}

	render() {

		return <Fragment>

			<div className="row dimension-control vt-control">
				<div className="col-xs-6">
					<label htmlFor="">Width</label>
					<div className="row">
						<div className="col-xs-6">
							<TextControl
								type="url"
								value={ this.state.width }
							/>
						</div>
						<div className="col-xs-6">
							<SelectControl
								options={ unitOptions }
								value={ this.state.widthUnit }
								onChange={ ( value ) => this.props.setAttributes( { template: value } ) }
							/>
						</div>
					</div>
				</div>
				<div className="col-xs-6">
					<label htmlFor="">Min Width</label>
					<div className="row">
						<div className="col-xs-6">
							<TextControl
								type="url"
								value={ this.state.minWidth }
							/>
						</div>
						<div className="col-xs-6">
							<SelectControl
								options={ unitOptions }
								value={ this.state.minWidthUnit }
								onChange={ ( value ) => this.props.setAttributes( { template: value } ) }
							/>
						</div>
					</div>
				</div>
				<div className="col-xs-6">
					<label htmlFor="">Height</label>
					<div className="row">
						<div className="col-xs-6">
							<TextControl
								type="url"
								value={ this.state.height }
							/>
						</div>
						<div className="col-xs-6">
							<SelectControl
								options={ unitOptions }
								value={ this.state.widthUnit }
								onChange={ ( value ) => this.props.setAttributes( { template: value } ) }
							/>
						</div>
					</div>
				</div>
				<div className="col-xs-6">
					<label htmlFor="">Min Height</label>
					<div className="row">
						<div className="col-xs-6">
							<TextControl
								type="url"
								value={ this.state.minHeight }
							/>
						</div>
						<div className="col-xs-6">
							<SelectControl
								options={ unitOptions }
								value={ this.state.minWidthUnit }
								onChange={ ( value ) => this.props.setAttributes( { template: value } ) }
							/>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	}
}

function BoxDimensionControl({label, hideLabelFromVision, value, help, className, instanceId, onChange, type = 'text', ...props}) {
	const id = `inspector-dimension-control-${instanceId}`;

	return (
		<BaseControl label={label} hideLabelFromVision={hideLabelFromVision} id={id} help={help}
					 className={className}>

			<BoxDimension {...props}
					  id={id}
					  value={value}
			/>
		</BaseControl>
	);


}

export default withInstanceId( BoxDimensionControl );
