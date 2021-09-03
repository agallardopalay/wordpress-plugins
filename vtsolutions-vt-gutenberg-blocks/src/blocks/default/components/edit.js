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
			attributes,
			setAttributes,
			clientId,
		} = this.props;

		/* Placeholder with layout modal */
		return (
			<div className={ this.props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>vt-blocks</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	}
}
