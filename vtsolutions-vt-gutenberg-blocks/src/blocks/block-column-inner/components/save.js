/**
 * Internal dependencies.
 */
import Column from './column';

/**
 * WordPress dependencies.
 */
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class Save extends Component {

	render() {
		return (
			<Column
				{ ...this.props }
			>
				<InnerBlocks.Content />
			</Column>
		);
	}
}
