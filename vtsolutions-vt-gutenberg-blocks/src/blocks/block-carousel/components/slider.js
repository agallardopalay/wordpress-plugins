/**
 * Column wrapper component.
 */

/**
 * WordPress dependencies.
 */
const { Component } = wp.element;

/**
 * Components and dependencies.
 */
import classnames from 'classnames';

/**
 * Create a Columns wrapper Component.
 */
export default class Slider extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			attributes: {
				backgroundColor,
				vtID
			}
		} = this.props;

		const styles = {
			backgroundColor: backgroundColor ? backgroundColor : null,
		};


		return (
			<div
				id={attributes.slideId ? attributes.slideId : ''}
				vt-id={vtID || null}
				className="carousel slide"
				style={styles}
				data-ride={attributes.autoplay ? 'carousel' : null}
				data-interval={attributes.autoplay ? '10000' : null}
			>
				{ this.props.children }
			</div>
		);
	}
}
