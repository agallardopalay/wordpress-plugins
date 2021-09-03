/**
 * Column wrapper component.
 */

/**
 * WordPress dependencies.
 */
const { Component } = wp.element;

/**
 * Create a Columns wrapper Component.
 */
export default class Tabs extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes: {
				slideId,
				vtID
			},
		} = this.props;

		return (
			<div
				id={slideId ? slideId : ''}
				vt-id={vtID ? vtID : null}
				className="tabs-block"
			>
				{ this.props.children }
			</div>
		);
	}
}
