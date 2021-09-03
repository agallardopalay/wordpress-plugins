/**
 * External dependencies.
 */
import classnames from 'classnames';
import Columns from './column-wrap';

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

			}
		} = this.props;

		const className = classnames( [
			'ab-layout-column-wrap',
			'row'
		]);

		const styles = {
			maxWidth: attributes.columnMaxWidth ? attributes.columnMaxWidth : null
		};

		return (
			<Columns
				{ ...this.props }
			>
				<div
					className={ className ? className : undefined }
					style={ styles }
				>
					<InnerBlocks.Content />
				</div>
			</Columns>
		);
	}
}
