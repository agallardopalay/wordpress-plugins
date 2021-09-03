const {
	BaseControl,
	TextControl
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

class BoxModel extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			marginTop: props.value.marginTop ? props.value.marginTop : null,
			marginRight: props.value.marginRight ? props.value.marginRight : null,
			marginBottom: props.value.marginBottom ? props.value.marginBottom : null,
			marginLeft: props.value.marginLeft ? props.value.marginLeft : null,

			paddingTop: props.value.paddingTop ? props.value.paddingTop : null,
			paddingRight: props.value.paddingRight ? props.value.paddingRight : null,
			paddingBottom: props.value.paddingBottom ? props.value.paddingBottom : null,
			paddingLeft: props.value.paddingLeft ? props.value.paddingLeft : null,

			borderTop: props.value.borderTop ? props.value.borderTop : null,
			borderRight: props.value.borderRight ? props.value.borderRight : null,
			borderBottom: props.value.borderBottom ? props.value.borderBottom : null,
			borderLeft: props.value.borderLeft ? props.value.borderLeft : null,
		};

		const showDimensions = !_.isNull(props.dimensions) ? props.dimensions : false;

		if (showDimensions ) {
			this.state.minHeight 	= props.value.minHeight ? props.value.minHeight : null;
			this.state.height 		= props.value.height ? props.value.height : null;
			this.state.maxHeight 	= props.value.maxHeight ? props.value.maxHeight : null;

			this.state.minWidth 	= props.value.minWidth ? props.value.minWidth : null;
			this.state.width 		= props.value.width ? props.value.width : null;
			this.state.maxWidth 	= props.value.maxWidth ? props.value.maxWidth : null;
		}
	}

	onChangeTrigger(property, value) {
		const {attributes} = this.props;

		let boxModel = _cloneDeep(attributes.boxModel);
		boxModel[property] = value;

		this.setState( {[property]: value});
		this.props.setAttributes( { boxModel} )
	}

	render() {

		const {
			dimensions,
			attributes
		} = this.props;

		const showDimensions = !_.isNull(dimensions) ? dimensions : false;

		return <Fragment>

			<div className="row google-customizer vt-control">
				{/*margin top*/}
				<div className="col-xs-12">
					<div className="prop-title">margin</div>
					<TextControl
						placeholder={'-'}
						type="text"
						value={this.state.marginTop}
						onChange={
							(value) => {
								this.onChangeTrigger('marginTop', value);
							}
						}
					/>
				</div>

				{/*margin-left*/}
				<div className="col-xs-2 vertical">
					<TextControl
						placeholder={'-'}
						type="text"
						value={this.state.marginLeft}
						onChange={
							(value) => {
								this.onChangeTrigger('marginLeft', value);
							}
						}
					/>
				</div>

				{/*INNER START BORDER & PADDING*/}
				{/*INNER START BORDER & PADDING*/}
				<div className="col-xs-8 row border-container">
					{/*Border-top*/}
					<div className="col-xs-12">
						<div className="prop-title">border</div>
						<TextControl
							placeholder={'-'}
							type="text"
							value={this.state.borderTop}
							onChange={
								(value) => {
									this.onChangeTrigger('borderTop', value);
								}
							}
						/>
					</div>

					{/*Border-left*/}
					<div className="col-xs-2 vertical">
						<TextControl
							placeholder={'-'}
							type="text"
							value={this.state.borderLeft}
							onChange={
								(value) => {
									this.onChangeTrigger('borderLeft', value);
								}
							}
						/>
					</div>

					<div className="col-xs-8 row padding-container">


						<div className="col-xs-12">
							{/*Border-top*/}
							<div className="prop-title">padding</div>
							<TextControl
								placeholder={'-'}
								type="text"
								value={this.state.paddingTop}
								onChange={
									(value) => {
										this.onChangeTrigger('paddingTop', value);
									}
								}
							/>
						</div>

						<div className="col-xs-3 vertical">
							{/*padding-left*/}
							<TextControl
								placeholder={'-'}
								type="text"
								value={this.state.paddingLeft}
								onChange={
									(value) => {
										this.onChangeTrigger('paddingLeft', value);
									}
								}
							/>
						</div>

						<div className="col-xs-6 row inner-width">


							<div className="row">


							</div>
						</div>
						<div className="col-xs-3 vertical">
							{/*Padding-right*/}
							<TextControl
								placeholder={'-'}
								type="text"
								value={this.state.paddingRight}
								onChange={
									(value) => {
										this.onChangeTrigger('paddingRight', value);
									}
								}
							/>
						</div>

						<div className="col-xs-12">
							{/*padding-bottom*/}
							<TextControl
								placeholder={'-'}
								type="text"
								value={this.state.paddingBottom}
								onChange={
									(value) => {
										this.onChangeTrigger('paddingBottom', value);
									}
								}
							/>
						</div>
					</div>

					{/*Border-right*/}
					<div className="col-xs-2 vertical">
						<TextControl
							placeholder={'-'}
							type="text"
							value={this.state.borderRight}
							onChange={
								(value) => {
									this.onChangeTrigger('borderRight', value);
								}
							}
						/>
					</div>

					{/*Border-bottom*/}
					<div className="col-xs-12">
						<TextControl
							placeholder={'-'}
							type="text"
							value={this.state.borderBottom}
							onChange={
								(value) => {
									this.onChangeTrigger('borderBottom', value);
								}
							}
						/>
					</div>
				</div>

				{/*margin-right*/}
				<div className="col-xs-2 vertical">
					<TextControl
						placeholder={'-'}
						type="text"
						value={this.state.marginRight}
						onChange={
							(value) => {
								this.onChangeTrigger('marginRight', value);
							}
						}
					/>
				</div>

				{/*margin bottom*/}
				<div className="col-xs-12">
					<TextControl
						placeholder={'-'}
						type="text"
						value={this.state.marginBottom}
						onChange={
							(value) => {
								this.onChangeTrigger('marginBottom', value);
							}
						}
					/>
				</div>
			</div>

			{showDimensions ? (
				<div>
					<span className="components-base-control__label">Block Dimensions</span>
					<div className="vt-dimensions-controls">
						<div className="row">
							<div className="col-xs-4">
								<TextControl
									label="MinH"
									placeholder={'-'}
									type="text"
									value={this.state.minHeight}
									onChange={
										(value) => {
											this.onChangeTrigger('minHeight', value);
										}
									}
								/>
							</div>
							<div className="col-xs-4">
								<TextControl
									label="Height"
									placeholder={'-'}
									type="text"
									value={this.state.height}
									onChange={
										(value) => {
											this.onChangeTrigger('height', value);
										}
									}
								/>
							</div>
							<div className="col-xs-4">
								<TextControl
									label="MaxH"
									placeholder={'-'}
									type="text"
									value={this.state.maxHeight}
									onChange={
										(value) => {
											this.onChangeTrigger('maxHeight', value);
										}
									}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-4">
								<TextControl
									label="MinW"
									placeholder={'-'}
									type="text"
									value={this.state.minWidth}
									onChange={
										(value) => {
											this.onChangeTrigger('minWidth', value);
										}
									}
								/>
							</div>
							<div className="col-xs-4">
								<TextControl
									label="Width"
									placeholder={'-'}
									type="text"
									value={this.state.Width}
									onChange={
										(value) => {
											this.onChangeTrigger('Width', value);
										}
									}
								/>
							</div>
							<div className="col-xs-4">
								<TextControl
									label="MaxW"
									placeholder={'-'}
									type="text"
									value={this.state.maxWidth}
									onChange={
										(value) => {
											this.onChangeTrigger('maxWidth', value);
										}
									}
								/>
							</div>
						</div>
					</div>
				</div>
			) : ''}

		</Fragment>
	}
}

function BoxModelControl({label, hideLabelFromVision, value, help, className, instanceId, onChange, type = 'text', ...props}) {

	return (
		<BaseControl label={label} hideLabelFromVision={hideLabelFromVision} help={help} className={`vt-box-model-control ${className}`}>
			<BoxModel {...props} value={value}/>
		</BaseControl>
	);


}

export default withInstanceId( BoxModelControl );
