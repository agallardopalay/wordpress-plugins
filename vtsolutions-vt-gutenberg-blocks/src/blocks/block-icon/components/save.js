/**
 * Internal dependencies.
 */

/**
 * WordPress dependencies.
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {

	render() {

		const {
			attributes,
			attributes: {
				iconBackgroundColor,
				iconColor,
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
				},
				size,
				type,
			},
			setAttributes,
			clientId,
		} = this.props;

		const styles = {
			backgroundColor: iconBackgroundColor ? iconBackgroundColor : null,
			color: iconColor ? iconColor : null,
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
			fontSize: size ? `${size}px`: null
		};

		const fontIconClass = type ? `fa-${type}` : '';

		return (
			<i className={`fa fab ${fontIconClass}`}
			   style={ styles }
			/>
		);
	}
}
