import Inspector from './inspector';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;
const {
	BlockControls,
	BlockAlignmentToolbar,
} = wp.editor;

export default class Edit extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
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

		/* Placeholder with layout modal */
		return [
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			<div className="icon-wrapper">
				<i className={`fa fab ${fontIconClass}`}
				   style={ styles }
				/>
			</div>
		];
	}
}
