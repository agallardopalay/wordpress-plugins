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
export default class Columns extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			attributes: {
				blockBackgroundColor,
				blockTextColor,
				containerDimRatio,
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
				vtID,
			}
		} = this.props;





		/* Setup the wrapper classes. */
		const className = classnames( [
			this.props.className,
			'ab-layout-columns-' + attributes.columns,
			attributes.layout,
			attributes.columnMaxWidth && attributes.centerColumns ? 'ab-columns-center' : null,
		], {
			[ 'align' + attributes.align ]: attributes.align,
		} );


		/* Misc styles. */
		const styles = {
			backgroundColor: blockBackgroundColor ? blockBackgroundColor : null,
			color: blockTextColor ? blockTextColor : null,
		};

		return (
			<div
				vt-id={vtID || null}
				className={ className ? className : undefined }
				style={styles}
			>
				{ this.props.children }
			</div>
		);
	}
}
