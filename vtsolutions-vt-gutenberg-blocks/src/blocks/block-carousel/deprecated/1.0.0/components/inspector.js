/**
 * Inspector Controls.
 */

/**
 * External dependencies.
 */
import BoxModelControl from '../../../../../lib/deprecated/1.0.0/box-model-control';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} = wp.blockEditor;
const {
	PanelBody,
	RangeControl,
	ButtonGroup,
	Button,
	Tooltip,
	TextControl,
	ToggleControl,
	SelectControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			attributes: {
				slideId,
				boxModel,
				boxDimensions
			},
			setAttributes,
			backgroundColor,
			setBackgroundColor,
			textColor,
			setTextColor,
		} = this.props;

		let selectedRows = 1;

		if ( attributes.columns ) {
			selectedRows = parseInt( attributes.columns.toString().split('-') );
		}

		return (
			<InspectorControls key="inspector">
				{ attributes.layout &&
				/* Show the column settings once a layout is selected. */
				<PanelBody
					title={ __( 'General', 'atomic-blocks' ) }
					initialOpen={ true }
					className="ab-column-select-panel"
				>
					{ attributes.allowEdit &&
					<Fragment>
						<RangeControl
							label={ __( 'Slides Counter', 'atomic-blocks' ) }
							help={ __( "Note: Changing the slides count after you've added content to the slide can cause loss of content.", 'vt' ) }
							value={ attributes.columns }
							onChange={ ( value ) => this.props.setAttributes( {
								columns: value,
								layout: 'ab-' + value + '-col-equal',
							} ) }
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>
						<hr />
					</Fragment>
					}

					<ToggleControl
						label={ __( 'Show Slider Indicators', 'vt' ) }
						help={ __( 'Slider indicators will show on the sides of the slider', 'vt' ) }
						checked={ attributes.showIndicators }
						onChange={ () => this.props.setAttributes( { showIndicators: ! attributes.showIndicators } ) }
					/>

					<hr />

					<ToggleControl
						label={ __( 'Show Slider Pagination', 'vt' ) }
						help={ __( 'Slider pagination will show on the bottom side of the slider', 'vt' ) }
						checked={ attributes.showPagination }
						onChange={ () => this.props.setAttributes( { showPagination: ! attributes.showPagination } ) }
					/>

					<hr />

					<ToggleControl
						label={ __( 'Allow edit', 'vt' ) }
						help={ __( 'Allow edit', 'vt' ) }
						checked={ attributes.allowEdit }
						onChange={ () => this.props.setAttributes( { allowEdit: ! attributes.allowEdit } ) }
					/>

					<hr />

					<ToggleControl
						label={ __( 'Autoplay', 'vt' ) }
						help={ __( 'Autoplay', 'vt' ) }
						checked={ attributes.autoplay }
						onChange={ () => this.props.setAttributes( { autoplay: ! attributes.autoplay } ) }
					/>

					<hr />

					<ToggleControl
						label={ __( 'Show Bottom Bar', 'vt' ) }
						checked={ attributes.showBottomBar }
						onChange={ () => this.props.setAttributes( { showBottomBar: ! attributes.showBottomBar } ) }
					/>


					<hr />

					<TextControl
						label={ __( 'Slide ID', 'vt' ) }
						type="text"
						value={ slideId }
						onChange={ ( value ) => this.props.setAttributes( { slideId: value } ) }
					/>
				</PanelBody>
				}
				<PanelBody
					title={ __( 'Margin and Padding', 'atomic-blocks' ) }
					initialOpen={ false }
				>
					<BoxModelControl
						{...this.props}
						className=""
						dimensions={true}
						label={__('Box Model Settings', 'vt')}
						value={ boxModel }
						onChange={ ( value ) => this.props.setAttributes( { boxModel: value } ) }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Background Color', 'vt' ) }
					initialOpen={ false }
					colorSettings={ [ {
						value: backgroundColor.color,
						onChange:(value) => {
							this.props.setAttributes({backgroundColor: value});
						},
						label: __( 'Background Color', 'vt' )
					} ] }
				>
				</PanelColorSettings>
			</InspectorControls>
		);
	}
}
