/**
 * External dependencies.
 */

import Slider from './slider';
import memoize from 'memize';
import _times from 'lodash/times';

/**
 * WordPress dependencies.
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {

	render() {

		const { attributes, attributes : { showIndicators, showPagination, slideId, showBottomBar } } = this.props;

		/* Get the column template. */
		const getLayoutTemplate = memoize( ( attributes ) => {
			return _times( attributes.columns, (time) => {
				let className = time === 0 ? 'active' : '';
				return [<li data-target={`#${slideId}`} data-slide-to={time} className={className}></li>];
			} );
		} );

		return (
			<Fragment>
				<Slider
					{ ...this.props }
					/* Pass through the color attributes to the Columns component */
					backgroundColorValue={ attributes.backgroundColor ? attributes.backgroundColor : attributes.customBackgroundColor }
					textColorValue={ attributes.textColor ? null : attributes.customTextColor }
				>
					<div className="carousel-inner"
						 style={ { maxWidth: attributes.columnMaxWidth ? attributes.columnMaxWidth : null } }
					>
						<InnerBlocks.Content />
					</div>
					{
						showPagination && slideId &&
						<ol className="carousel-indicators">
							{ getLayoutTemplate( attributes ) }
						</ol>
					}
					{
						showIndicators && slideId &&
						<Fragment>
							<a className="carousel-control-prev" href={`#${slideId}`} role="button" data-slide="prev">
								<i className="fa fa-angle-left" aria-hidden="true"></i>
								<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href={`#${slideId}`} role="button" data-slide="next">
								<i className="fa fa-angle-right" aria-hidden="true"></i>
								<span className="sr-only">Next</span>
							</a>
						</Fragment>
					}
				</Slider>
				{ showBottomBar &&
				<div className="slider-thin-line"></div>
				}
			</Fragment>
		);
	}
}
