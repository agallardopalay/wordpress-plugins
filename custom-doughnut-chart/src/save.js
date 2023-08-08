/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * @return {WPElement} Element to render.
 */
export default function save( { attributes: { chartData }, className } ) {
	// Arrays of values per property
	const percentages = chartData.map( ( element ) => element[ 'percentage' ] );
	const colors = chartData.map( ( element ) => element[ 'color' ] );
	const labels = chartData.map( ( element ) => element[ 'label' ] );

	/**
	 * Data definition to drow the Doughnut Chart
	 */
	const datasets = JSON.stringify(
		{
			labels: labels,
			datasets: [{
				label: 'Percentage',
				data: percentages,
				backgroundColor: colors,
				hoverOffset: 4
			}]
		}
	);
	
	return (
		<div { ...useBlockProps.save() }>
			<canvas id="custom-doughnut-chart" data-content={ datasets }></canvas>

			<div className="custom-doughnut-chart__table">
				{ chartData.map( ( item, index ) => {
					return (
						<div className="custom-doughnut-chart__table-row" key={ `chartData-${ index }` }>
							<div
								className="custom-doughnut-chart__table-cell custom-doughnut-chart__table-percent"
								style={ { color: item.color } }
							>
								<RichText.Content
									tagName="span"
									value={ item.percentage }
								/>
								%
							</div>
							<div className="custom-doughnut-chart__table-cell custom-doughnut-chart__table-text">
								<RichText.Content
									tagName="span"
									value={ item.label }
								/>
							</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
}
