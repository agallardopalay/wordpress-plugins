/**
 * Internal dependencies.
 */
import ResponsiveTabPanel from './../../../lib/responsive-tab-panel';
import BoxModelControl from './../../../lib/box-model-control';

import _cloneDeep from 'lodash/cloneDeep';
import _words from 'lodash/words';
/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const {
	InspectorControls,
	PanelColorSettings,
	withColors,
	ContrastChecker,
} = wp.blockEditor;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
} = wp.components;


/**
 * Get array for Select element.
 *
 * @returns {Array} array for Select.
 */
const getDefaultColumnSizes = function() {
	const result = [
		{
			label: __( 'Inherit from larger' ),
			value: '',
		}, {
			label: __( 'Auto' ),
			value: 'auto',
		},
	];

	for ( let k = 1; k <= 12; k++ ) {
		result.push( {
			label: sprintf( k === 1 ? __( 'Column size %d (%s)' ) : __( 'Column size %d (%s)' ), k, `${ Math.round( ( 100 * k / 12 ) * 100 ) / 100 }%` ),
			value: k,
		} );
	}
	return result;
};


/**
 * Create an Inspector Controls wrapper Component.
 */
class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			columnBackgroundColor,
			columnTextColor,
			attributes,
			attributes: {
				boxModel
			},
			setAttributes,
		} = this.props;

		/* CSS Units. */
		const cssUnits = [
			{ value: 'px', label: __( 'Pixel (px)', 'vt' ) },
			{ value: '%', label: __( 'Percent (%)', 'vt' ) },
			{ value: 'em', label: __( 'Em (em)', 'vt' ) },
        ];

		return (
		<InspectorControls key="inspector">
			<PanelBody
					title={ __( 'Responsive Column Settings', 'vt' ) }
					initialOpen={ false }
				>
				<SelectControl
					label={ __( 'Margin Unit', 'vt' ) }
					help={ __( 'Choose between pixel, percent, or em units.', 'vt' ) }
					options={ cssUnits }
					value={ attributes.marginUnit }
					onChange={ ( value ) => setAttributes( { marginUnit: value } ) }
				/>
			</PanelBody>

			<PanelBody>
				<ResponsiveTabPanel>
					{
						(tabData) => {
							let sizeName = 'size';
							let sizeValue = attributes[ sizeName ];

							if ( tabData.name !== 'all' ) {
								sizeName = `${ tabData.name }`;
								sizeValue = attributes
											&& attributes.responsive
											&& attributes.responsive[sizeName]
											&& attributes.responsive[sizeName].size || '';
							}

							return (
								<Fragment>
									<SelectControl
										label={ __( 'Size' ) }
										value={ sizeValue }
										onChange={( value ) => {

											let blockClasses = this.props.attributes.className.split(' ') || [];

											let editAttributes = {};

											// if is responsive settings
											if (tabData.name !== 'all') {
												let responsiveSettings = _cloneDeep(attributes.responsive);

												// replace existing classes attached to current size
												blockClasses = _.filter(blockClasses, (blockClass) => {
													return !blockClass.includes(`col-${sizeName}`);
												});

												if (value) {
													blockClasses.push(`col-${sizeName}-${value}`);
												}
												responsiveSettings = _.extend({}, responsiveSettings, {[sizeName] : {size: value}});

												editAttributes.responsive = responsiveSettings;
											}
											else {

												if (sizeValue) {
													blockClasses = _.filter(blockClasses, (blockClass) => {
														return !blockClass.includes(`col-${sizeValue}`);
													});
												}

												if ( value && value !== 'auto' ) {
													blockClasses.push(`col-${value}`);
												}
												else {
													blockClasses.push('col');
												}

												editAttributes[sizeName] = value;
											}

											// Remove class duplicates
											blockClasses = _.uniq(blockClasses);
											editAttributes.className = blockClasses.join(' ');

											setAttributes(editAttributes);

										}}
										options={ getDefaultColumnSizes() }
									/>
								</Fragment>
							);
						}
					}
				</ResponsiveTabPanel>
			</PanelBody>

			<PanelBody>
				<BoxModelControl
					{...this.props}
					className={''}
					label={__('Box Model Settings', 'vt')}
					value={ boxModel }
					onChange={ ( value ) => setAttributes( { boxModel: value } ) }
				/>
			</PanelBody>

			<PanelColorSettings
				title={ __( 'Color', 'vt' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						value: columnBackgroundColor,
						onChange: ( value ) => setAttributes( { columnBackgroundColor: value } ),
						label: __( 'Background Color', 'vt' ),
					},
					{
						value: columnTextColor,
						onChange: ( value ) => setAttributes( { columnTextColor: value } ),
						label: __( 'Text Color', 'vt' ),
					}
			 	] }
			>
			</PanelColorSettings>
		</InspectorControls>
		);
	}
}

export default compose( [
	withColors(
		'backgroundColor',
		{ textColor: 'color' },
	),
] )( Inspector );
