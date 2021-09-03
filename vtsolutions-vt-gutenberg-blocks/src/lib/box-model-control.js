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
import ResponsiveTabPanel from "./responsive-tab-panel";

import _pickBy from 'lodash/pickBy';
import _cloneDeep from 'lodash/cloneDeep';

class BoxModel extends Component {
	constructor( props ) {
		super( ...arguments );

		this.defaultState = {
			marginTop: null,
			marginRight: null,
			marginBottom: null,
			marginLeft: null,

			paddingTop: null,
			paddingRight: null,
			paddingBottom: null,
			paddingLeft: null,

			borderTop: null,
			borderRight: null,
			borderBottom: null,
			borderLeft: null,
		}

		this.state = {
			marginTop: props.value.marginTop || null,
			marginRight: props.value.marginRight || null,
			marginBottom: props.value.marginBottom || null,
			marginLeft: props.value.marginLeft || null,

			paddingTop: props.value.paddingTop || null,
			paddingRight: props.value.paddingRight || null,
			paddingBottom: props.value.paddingBottom || null,
			paddingLeft: props.value.paddingLeft || null,

			borderTop: props.value.borderTop || null,
			borderRight: props.value.borderRight || null,
			borderBottom: props.value.borderBottom || null,
			borderLeft: props.value.borderLeft || null,

			responsive: props.value.responsive || null
		};

		const showDimensions = !_.isNull(props.dimensions) ? props.dimensions : false;

		if ( showDimensions ) {
			this.state.minHeight 	= props.value.minHeight || null;
			this.state.height 		= props.value.height || null;
			this.state.maxHeight 	= props.value.maxHeight || null;

			this.state.minWidth 	= props.value.minWidth || null;
			this.state.width 		= props.value.width || null;
			this.state.maxWidth 	= props.value.maxWidth || null;
		}
	}

	onChangeTrigger(property, value, size) {
		const {attributes} = this.props;

		let boxModel = _cloneDeep(attributes.boxModel);

		// set responsive settings
		if (size!=='all') {
			let properties = this.state.responsive && this.state.responsive[size] || {};

			if (!_.isNull(value) && !_.isEmpty(value)) {
				properties[property] = value;
			}
			else {
				delete properties[property];
			}

			const responsiveSettings = _.extend({}, this.state.responsive, {[size] : properties});
			this.setState({responsive: responsiveSettings});

			boxModel.responsive = responsiveSettings;
		}
		else {

			if (!_.isNull(value) && !_.isEmpty(value)) {
				boxModel[property] = value;
			}
			else {
				delete boxModel[property];
			}

			this.setState( {[property]: value});
		}

		this.props.setAttributes( { boxModel} );
	}

	render() {

		const {
			dimensions,
			attributes
		} = this.props;

		const showDimensions = !_.isNull(dimensions) ? dimensions : false;

		return <Fragment>

			<ResponsiveTabPanel>
				{
					(tabData) => {
						let size = `${tabData.name}`;

						const sizeState = size !== 'all' ? (this.state.responsive && this.state.responsive[size] || this.defaultState) : this.state;

						return (
							<div key={size}>
								<div className="row google-customizer vt-control">
									{/*margin top*/}
									<div className="col-xs-12">
										<div className="prop-title">margin</div>
										<TextControl
											placeholder={'-'}
											type="text"
											value={sizeState.marginTop}
											onChange={
												(value) => {
													this.onChangeTrigger('marginTop', value, size);
												}
											}
										/>
									</div>

									{/*margin-left*/}
									<div className="col-xs-2 vertical">
										<TextControl
											placeholder={'-'}
											type="text"
											value={sizeState.marginLeft}
											onChange={
												(value) => {
													this.onChangeTrigger('marginLeft', value, size);
												}
											}
										/>
									</div>

									{/*INNER START BORDER & PADDING*/}
									<div className="col-xs-8 row border-container">
										{/*Border-top*/}
										<div className="col-xs-12">
											<div className="prop-title">border</div>
											<TextControl
												placeholder={'-'}
												type="text"
												value={sizeState.borderTop}
												onChange={
													(value) => {
														this.onChangeTrigger('borderTop', value, size);
													}
												}
											/>
										</div>

										{/*Border-left*/}
										<div className="col-xs-2 vertical">
											<TextControl
												placeholder={'-'}
												type="text"
												value={sizeState.borderLeft}
												onChange={
													(value) => {
														this.onChangeTrigger('borderLeft', value, size);
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
													value={sizeState.paddingTop || null}
													onChange={
														(value) => {
															this.onChangeTrigger('paddingTop', value, size);
														}
													}
												/>
											</div>

											<div className="col-xs-3 vertical">
												{/*padding-left*/}
												<TextControl
													placeholder={'-'}
													type="text"
													value={sizeState.paddingLeft}
													onChange={
														(value) => {
															this.onChangeTrigger('paddingLeft', value, size);
														}
													}
												/>
											</div>

											<div className="col-xs-6 row inner-width">
												<div className="row"/>
											</div>
											<div className="col-xs-3 vertical">
												{/*Padding-right*/}
												<TextControl
													placeholder={'-'}
													type="text"
													value={sizeState.paddingRight}
													onChange={
														(value) => {
															this.onChangeTrigger('paddingRight', value, size);
														}
													}
												/>
											</div>

											<div className="col-xs-12">
												{/*padding-bottom*/}
												<TextControl
													placeholder={'-'}
													type="text"
													value={sizeState.paddingBottom}
													onChange={
														(value) => {
															this.onChangeTrigger('paddingBottom', value, size);
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
												value={sizeState.borderRight}
												onChange={
													(value) => {
														this.onChangeTrigger('borderRight', value, size);
													}
												}
											/>
										</div>

										{/*Border-bottom*/}
										<div className="col-xs-12">
											<TextControl
												placeholder={'-'}
												type="text"
												value={sizeState.borderBottom}
												onChange={
													(value) => {
														this.onChangeTrigger('borderBottom', value, size);
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
											value={sizeState.marginRight}
											onChange={
												(value) => {
													this.onChangeTrigger('marginRight', value, size);
												}
											}
										/>
									</div>

									{/*margin bottom*/}
									<div className="col-xs-12">
										<TextControl
											placeholder={'-'}
											type="text"
											value={sizeState.marginBottom}
											onChange={
												(value) => {
													this.onChangeTrigger('marginBottom', value, size);
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
														value={sizeState.minHeight}
														onChange={
															(value) => {
																this.onChangeTrigger('minHeight', value, size);
															}
														}
													/>
												</div>
												<div className="col-xs-4">
													<TextControl
														label="Height"
														placeholder={'-'}
														type="text"
														value={sizeState.height}
														onChange={
															(value) => {
																this.onChangeTrigger('height', value, size);
															}
														}
													/>
												</div>
												<div className="col-xs-4">
													<TextControl
														label="MaxH"
														placeholder={'-'}
														type="text"
														value={sizeState.maxHeight}
														onChange={
															(value) => {
																this.onChangeTrigger('maxHeight', value, size);
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
														value={sizeState.minWidth}
														onChange={
															(value) => {
																this.onChangeTrigger('minWidth', value, size);
															}
														}
													/>
												</div>
												<div className="col-xs-4">
													<TextControl
														label="Width"
														placeholder={'-'}
														type="text"
														value={sizeState.Width}
														onChange={
															(value) => {
																this.onChangeTrigger('Width', value, size);
															}
														}
													/>
												</div>
												<div className="col-xs-4">
													<TextControl
														label="MaxW"
														placeholder={'-'}
														type="text"
														value={sizeState.maxWidth}
														onChange={
															(value) => {
																this.onChangeTrigger('maxWidth', value, size);
															}
														}
													/>
												</div>
											</div>
										</div>
									</div>
								) : ''}
							</div>
						)
					}
				}
			</ResponsiveTabPanel>
		</Fragment>
	}
}

function BoxModelControl({label, hideLabelFromVision, value, help, className, instanceId,type = 'text', ...props}) {

	return (
		<BaseControl label={label} hideLabelFromVision={hideLabelFromVision} help={help} className={`vt-box-model-control ${className}`}>
			<BoxModel {...props} value={value}/>
		</BaseControl>
	);


}

export default withInstanceId( BoxModelControl );
