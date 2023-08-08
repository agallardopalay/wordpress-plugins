import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button, ColorPalette } from '@wordpress/components';
import { plus, trash } from '@wordpress/icons';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './editor.scss';

function Edit ( {
	attributes: { chartData = [] },
	setAttributes,
} ) {
	const blockProps = useBlockProps();
	ChartJS.register( ArcElement, Tooltip );

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		cutout: '60%',
	};

	/**
	 * Auxiliary function used to return an array of values of a provided property
	 *
     * @param {Array} listObjects array of objects (each object has the percentage data)
	 * @param {string} desiredKey is the percentage property used to return array of values
	 */
	const desiredAttribute = ( listObjects, desiredKey ) => {
		return listObjects.map( ( element ) => element[ desiredKey ] );
	};

	const paletColors = [
		{ name: 'Midnight', color: '#1A1C20' },
		{ name: 'Navy', color: '#2C3143' },
		{ name: 'Blue', color: '#4B5D77' },
		{ name: 'Silver', color: '#BABBBB' },
		{ name: 'Teal', color: '#028580' },
		{ name: 'Pink', color: '#D3887B' },
		{ name: 'Pink Alt', color: '#DA6B5C' },
		{ name: 'Orange', color: '#D7801E' },
		{ name: 'Gold', color: '#F0B921' },
		{ name: 'Green', color: '#7A971C' },
		{ name: 'Off White', color: '#FCF6EE' },
		{ name: 'Cream', color: '#F1E9D5' },
	];

	const percentages = desiredAttribute( chartData, 'percentage' );
	const colors = desiredAttribute( chartData, 'color' );
	const labels = desiredAttribute( chartData, 'label' );

	const dataObject = {
		labels,
		datasets: [
			{
				label: __( 'Percentage' ),
				data: percentages,
				backgroundColor: colors,
				borderColor: colors,
				borderWidth: 1,
			},
		],
	};

	/**
	 * Add a new Percentage Item to the Doughnut Chart
	 */
	const handleAddItem = () => {
		setAttributes( {
			chartData: [
				...chartData,
				{
					index: chartData.length,
					percentage: 5,
					color: '#2C3143',
					label: 'Edit this text...',
				},
			],
		} );
	};

	/**
	 * Action to remove a Percentage Item from the Chart by it's index
	 *
	 * @param {number} index
	 */
	const handleRemoveItem = ( index ) => {
		const newChartData = [...chartData];
		newChartData.splice( index, 1 );

		/**
		 * Update the state variable chartData
		 */
		setAttributes( {
			chartData: newChartData,
		} );
	};

	useEffect( () => {
		/**
		 * Initialize at least one percentage
		 */
		if ( chartData.length === 0 ) {
			handleAddItem();
		}
	}, [] );

	const handleChange = ( newObject, index ) => {
		const newChartData = [...chartData];
		newChartData[index] = newObject;
		setAttributes( { chartData: newChartData } );
	}

	return (
		<div { ...blockProps }>
			<Doughnut
				title={ __( 'Percentage' ) }
				data={ dataObject }
				options={ options }
				fallbackContent={
					<p>
						{ __( 'Doughnut Chart' ) }: Percentage
					</p>
				}
			/>

			<div className="custom-doughnut-chart__table">
				{ chartData.map( ( item, index ) => {
						return (
							<div className="custom-doughnut-chart__table-row" key={ `chartData-${ index }` }>
								<div
									className="custom-doughnut-chart__table-cell custom-doughnut-chart__table-percent"
									style={ { color: item.color } }
								>
									<RichText
										tagName="span"
										placeholder="5"
										value={ item.percentage }
										onChange={ ( value ) => {
											const newObject = Object.assign( {}, item, { percentage: value } );
											handleChange(newObject, index);
										} }
									/>
									%
								</div>
								<div className="custom-doughnut-chart__table-cell custom-doughnut-chart__table-text">
									<RichText
										tagName="span"
										placeholder={ __( 'Edit this label' ) }
										allowedFormats={ [ 'core/bold', 'core/italic' ] }
										value={ item.label }
										onChange={ ( title ) => {
											const newObject = Object.assign( {}, item, { label: title } );
											handleChange(newObject, index);
										} }
									/>
								</div>
								<div className="custom-doughnut-chart__table-cell custom-doughnut-chart__colorpalette">
									<ColorPalette
										className='custom-doughnut-chart__colorpalette--input-color'
										colors={ paletColors }
										value={ item.color }
										clearable={ false }
										disableCustomColors={ true }
										onChange={ ( color ) => {
											const newObject = Object.assign( {}, item, { color } );
											handleChange(newObject, index);
										} }
									/>
								</div>
								<Button
									className='custom-doughnut-chart__button--remove-info'
									label="Remove Row"
									variant="secondary"
									icon={ trash }
									iconSize={ 27 }
									isDestructive
									showTooltip
									onClick={ () => handleRemoveItem( index ) }
								/>
							</div>
						);
				} ) }
			</div>

			<div className="custom-doughnut-chart__button--add-info">
				<Button
					variant="primary"
					onClick={ () => handleAddItem() }
					icon={ plus }
					iconSize="27"
					iconPosition="right"
					showTooltip
					label={ __( 'Add Percentage' ) }
				>
					{ __( 'Add Percentage' ) }
				</Button>
			</div>
		</div>
	);
};
export default Edit;
