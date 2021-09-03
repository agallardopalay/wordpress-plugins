/**
 * Inspector Controls.
 */

 /**
 * External dependencies.
 */
import map from 'lodash/map';
import _words from 'lodash/words';
import columnLayouts from './column-layouts';
import BoxModelControl from './../../../lib/box-model-control';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	ColorPalette,
} = wp.blockEditor;

const WPColorPicker = wp.components.ColorPicker;

const {
	PanelBody,
	RangeControl,
	ButtonGroup,
	Button,
	Tooltip,
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
				boxModel,
			},
			setAttributes,
			blockBackgroundColor,
			blockTextColor,
		} = this.props;

		let selectedColumns = 1;

		if ( attributes.columns ) {
			selectedColumns = parseInt( attributes.columns.toString().split('-') );
		}

		return (
			<InspectorControls key="inspector">
				{ attributes.layout &&
					/* Show the column settings once a layout is selected. */
					<PanelBody
						title={ __( 'General', 'vt' ) }
						initialOpen={ true }
						className="ab-column-select-panel"
					>
						<RangeControl
							label={ __( 'Column Count', 'vt' ) }
							help={ __( "Note: Changing the column count after you've added content to the column can cause loss of content.", 'vt' ) }
							value={ attributes.columns }
							onChange={(value) => {

								const layout = columnLayouts[value];
								const key = layout[0].key;

								this.props.setAttributes({
									columns: value,
									layout: key,
								});
							}}
							min={ 1 }
							max={ 6 }
							step={ 1 }
						/>

						<hr />

						{ ( attributes.columns > 1 ) &&
							<Fragment>
								<p>{ __( 'Column Layout', 'vt' ) }</p>
								<ButtonGroup aria-label={ __( 'Column Layout', 'vt' ) }>
									{ map( columnLayouts[ selectedColumns ], ( { name, key, icon, col } ) => (
										<Tooltip text={ name } key={ key }>
											<Button
												key={ key }
												className="ab-column-selector-button"
												isSmall
												onClick={ () => {
													setAttributes( {
														layout: null,
													} );

													this.setState( { 'selectLayout' : true } );


													const select = wp.data.select('core/block-editor');
													const inner = select.getBlock(this.props.clientId).innerBlocks;

													const split_layout = _words(key, /[^_]+/g);
													const column_classes = split_layout.slice(1);

													// Update all the inner blocks className
													_.each(inner, (containerBlock, blockIndex) => {
														const {attributes} = containerBlock;

														let size = column_classes[blockIndex];
														attributes.className = `col-${size}`;
													});

													setTimeout(()=> {
														setAttributes( {
															layout: key,
														} );
													}, 500);
												} }
											>
												{ icon }
											</Button>
										</Tooltip>
									) ) }
								</ButtonGroup>
								<p><i>{ __( 'Change the layout of your columns.', 'vt' ) }</i></p>
								<hr />
							</Fragment>
						}

						<hr />

						<RangeControl
							label={ __( 'Column Inner Max Width (px)' ) }
							help={ __( 'Adjust the width of the content inside the container wrapper.', 'vt' ) }
							value={ attributes.columnMaxWidth }
							onChange={ ( value ) => this.props.setAttributes( { columnMaxWidth: value } ) }
							min={ 0 }
							max={ 2000 }
							step={ 1 }
						/>

						{ attributes.columnMaxWidth > 0 &&
							<ToggleControl
								label={ __( 'Center Columns In Container', 'vt' ) }
								help={ __( 'Center the columns in the container when max-width is used.', 'vt' ) }
								checked={ attributes.centerColumns }
								onChange={ () => this.props.setAttributes( { centerColumns: ! attributes.centerColumns } ) }
							/>
						}

						<hr />

						<ToggleControl
							label={ __( 'Responsive Columns', 'vt' ) }
							help={ __( 'Columns will be adjusted to fit on tablets and mobile devices.', 'vt' ) }
							checked={ attributes.responsiveToggle }
							onChange={ () => this.props.setAttributes( { responsiveToggle: ! attributes.responsiveToggle } ) }
						/>
					</PanelBody>
				}
				<PanelBody
					title={ __( 'Margin and Padding', 'vt' ) }
					initialOpen={ false }
				>
					<BoxModelControl
						{...this.props}
						className={''}
						label={__('Box Model Settings', 'vt')}
						value={ boxModel }
						onChange={ ( value ) => this.props.setAttributes( { boxModel: value } ) }
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color', 'vt' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: blockTextColor,
							onChange: ( value ) => setAttributes( { blockTextColor: value } ),
							label: __( 'Text Color', 'vt' ),
						}
					] }
				>
					<div>
						<p>{ __( 'Select Background Color' ) }</p>
						<WPColorPicker
							color={ blockBackgroundColor }
							onChangeComplete={ ( color ) => {
								let colorString;

								if ( typeof color.rgb === 'undefined' || color.rgb.a === 1 ) {
									colorString = color.hex;
								}
								else {
									const { r, g, b, a } = color.rgb;
									colorString = `rgba(${ r }, ${ g }, ${ b }, ${ a })`;
								}

								this.props.setAttributes( { blockBackgroundColor: colorString } );
							} }
							disableAlpha={ false }
						/>
					</div>
				</PanelColorSettings>
			</InspectorControls>
		);
	}
}
