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
			attributes: {
				containerID,
				containerBackgroundColor,
				containerAlignment,
				containerWidth,
				vtID
			}
		} = this.props;

		const styles = {
			backgroundColor: containerBackgroundColor ? containerBackgroundColor : undefined,
			textAlign: containerAlignment ? containerAlignment : undefined,
		};

		const className = classnames( [
			this.props.className,
			'ab-block-container',
		], {
			[ 'align' + containerWidth ]: containerWidth,
		} );

		return (
			<div
				vt-id={vtID || null}
				id={containerID ? containerID : null}
				style={ styles }
				className={ className ? className : undefined }
				role={containerID ? 'tabpanel' : null}
			>{ this.props.children }</div>
		);
	}
}
