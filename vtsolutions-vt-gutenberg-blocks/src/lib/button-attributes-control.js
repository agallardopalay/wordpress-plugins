import classnames from "classnames";

const { __ } = wp.i18n;
const {
	BaseControl,
	TextControl,
	SelectControl
} = wp.components;

const {
	RichText,
} = wp.blockEditor;

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
import _pullAt from 'lodash/pullAt';
import _times from 'lodash/times';

const buttonType = 'primary';
const fieldIDsOptions = [
	{ value: 'type', label: 'type' },
	{ value: 'data-dismiss', label: 'data-dismiss' },
	{ value: 'data-toggle', label: 'data-toggle' },
	{ value: 'data-target', label: 'data-target' },
	{ value: 'aria-label', label: 'aria-label'},
];

const fieldLabelsOptions = [
	{ value: '', label: __( 'None' ) },
	{ value: 'button', label: 'button' },
	{ value: 'modal', label: 'modal' },
	{ value: 'close', label: 'Close' }
];


class ButtonAttributes extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			customAttributes: []
		};
	}

	addNewAttribute() {
		const {customAttributes} = this.props.attributes;
		let attributes = _cloneDeep(customAttributes);

		attributes.push({
			field_id: '',
			field_label: ''
		});

		this.setState( {customAttributes: attributes});
		this.props.setAttributes( { customAttributes: attributes} )
	}

	toggleCustomAttributeValue(field, field_value, attributeIndex) {

		const {customAttributes} = this.props.attributes;
		let attributes = _cloneDeep(customAttributes);

		attributes[attributeIndex][field] = field_value;

		this.setState( {customAttributes: attributes});
		this.props.setAttributes( { customAttributes: attributes} )

	}

	removeAttribute(index) {
		const {customAttributes} = this.props.attributes;

		// Remove attribute item
		let attributes = _cloneDeep(customAttributes);
		_pullAt(attributes, index);

		this.setState( {customAttributes: attributes});
		this.props.setAttributes( { customAttributes: attributes} )
	}

	getTableAttributesList() {
		const {customAttributes} = this.props.attributes;

		return _times( customAttributes.length, (index) => {
			const attribute = customAttributes[index];
			return [
				<tr className="nav-item">
					<td className="acf-row-handle order">
						<span>{index+1}</span>
					</td>
					<td className="acf-field acf-field-select">
						<div className="acf-input">
							<SelectControl
								value={ attribute.field_id }
								options={ fieldIDsOptions.map( ({ value, label }) => ( {
									value: value,
									label: label,
								} ) ) }
								onChange={ ( value ) => {
									this.toggleCustomAttributeValue('field_id', value, index);
								} }
							/>
						</div>
					</td>
					<td className="acf-field acf-field-select">
						<div className="acf-input">
							<TextControl
								placeholder={'-'}
								type="text"
								value={ attribute.field_label }
								onChange={ ( value ) => {
									this.toggleCustomAttributeValue('field_label', value, index);
								} }
							/>
						</div>
					</td>
					<td className="acf-row-handle remove">
						<a className="acf-icon -minus small acf-js-tooltip"
							href="#"
						   onClick={() => {
							   this.removeAttribute(index);
						   }}
						   title="Remove row"/>
					</td>
				</tr>
			];
		} );
	}

	render() {

		const {
			dimensions,
			attributes: {
				customAttributes
			}
		} = this.props;

		return <Fragment>
			<table className="acf-table">
				<thead>
				<tr>
					<th className="acf-row-handle"/>
					<th className="acf-th" >Field_ID</th>
					<th className="acf-th">Label</th>
					<th className="acf-row-handle"/>
				</tr>
				</thead>
				<tbody>
				{ customAttributes &&
					<Fragment>
						{this.getTableAttributesList()}
					</Fragment>
				}
				</tbody>
			</table>
			<div className="acf-actions">
				<a className="acf-button button button-primary" href="#" onClick={() => { this.addNewAttribute();}}>Add Row</a>
			</div>
		</Fragment>
	}
}



function ButtonAttributesControl({label, hideLabelFromVision, value, help, className, instanceId, onChange, type = 'text', ...props}) {
	return (
		<BaseControl label={label} hideLabelFromVision={hideLabelFromVision} help={help}
					 className={`button-attributes ${className}`}>
			<ButtonAttributes {...props} value={value}/>
		</BaseControl>
	);
}

export default withInstanceId( ButtonAttributesControl );
