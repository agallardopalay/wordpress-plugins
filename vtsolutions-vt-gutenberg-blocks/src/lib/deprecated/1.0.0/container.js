/**
 * Container wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a Button wrapper Component
 */
export default class Container extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {
		// Setup the attributes
		const {
			attributes,
			attributes: {
				containerID,
				containerBackgroundColor,
				containerAlignment,
				containerWidth,
				containerMaxWidth,
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
					marginRight
				}
			}
		} = this.props;

		const styles = {
			backgroundColor: containerBackgroundColor ? containerBackgroundColor : undefined,
			textAlign: containerAlignment ? containerAlignment : undefined,
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
		};

		const className = classnames( [
			this.props.className,
			'ab-block-container',
		], {
			[ 'align' + containerWidth ]: containerWidth,
		} );

		return (
			<div
				id={containerID ? containerID : null}
				style={ styles }
				className={ className ? className : undefined }
				role={containerID ? 'tabpanel' : null}
			>{ this.props.children }</div>
		);
	}
}
