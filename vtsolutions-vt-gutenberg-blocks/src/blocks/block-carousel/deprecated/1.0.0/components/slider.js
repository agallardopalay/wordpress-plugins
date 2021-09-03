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
			backgroundColorValue,
			textColorValue,
			slideId,
			attributes,
			attributes: {
				backgroundColor,
				boxModel: {
					borderLeft,
					borderRight,
					borderTop,
					borderBottom,
					paddingTop,
					paddingRight,
					paddingBottom,
					paddingLeft,
					marginTop,
					marginBottom,
					marginLeft,
					marginRight,
					minWidth,
					width,
					maxWidth,
					minHeight,
					height,
					maxHeight
				}
			}
		} = this.props;

		const customStyles = {
			backgroundColor: backgroundColor ? backgroundColor : null,
			borderLeft: borderLeft ? `${borderLeft}` : null,
			borderRight: borderRight ? `${borderRight}` : null,
			borderBottom: borderBottom ? `${borderBottom}` : null,
			borderTop: borderTop ? `${borderTop}` : null,
			paddingLeft: paddingLeft ? `${paddingLeft}` : null,
			paddingRight: paddingRight ? `${paddingRight}` : null,
			paddingBottom: paddingBottom ? `${paddingBottom}` : null,
			paddingTop: paddingTop ? `${paddingTop}` : null,
			marginTop: marginTop ? `${marginTop}` : null,
			marginBottom: marginBottom ? `${marginBottom}` : null,
			marginLeft: marginLeft ? `${marginLeft}` : null,
			marginRight: marginRight ? `${marginRight}` : null,
			minWidth: minWidth ? `${minWidth}` : null,
			width: width ? `${width}` : null,
			maxWidth: maxWidth ? `${maxWidth}` : null,
			minHeight: minHeight ? `${minHeight}` : null,
			height: height ? `${height}` : null,
			maxHeight: maxHeight ? `${maxHeight}` : null,
		};

		const styles = {};

		return (
			<div
				id={attributes.slideId ? attributes.slideId : ''}
				className="carousel slide"
				style={ Object.assign( customStyles, styles ) }
				data-ride={attributes.autoplay ? 'carousel' : null}
				data-interval={attributes.autoplay ? '10000' : null}
			>
				{ this.props.children }
			</div>
		);
	}
}
