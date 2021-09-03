/**
 * Column wrapper component.
 */

/**
 * WordPress dependencies.
 */
const { Component } = wp.element;

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * Create a Columns wrapper Component.
 */
export default class Column extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			attributes: {
				columnBackgroundColor,
				columnTextColor,
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
			},
			isEditor
		} = this.props;


		/* Misc styles. */
		const styles = {
			backgroundColor: columnBackgroundColor ? columnBackgroundColor : null,
			color: columnTextColor ? columnTextColor : null,
			textAlign: attributes.textAlign ? attributes.textAlign : null,
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


		return (
			<div
				className={ classnames(
					isEditor ? '' : this.props.className,
					'ab-block-layout-column',
					attributes.columnVerticalAlignment ? 'ab-is-vertically-aligned-' + attributes.columnVerticalAlignment : null
				) }
				style={ styles }
			>
				<div className={ 'ab-block-layout-column-inner' }>
					{ this.props.children }
				</div>
			</div>
		);
	}
}
