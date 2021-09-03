import classnames from 'classnames';
import _camelCase from 'lodash/camelCase';
import _cloneDeep from 'lodash/cloneDeep';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
	withColors,
	RichText,
} = wp.blockEditor;

const {
	Placeholder,
	ButtonGroup,
	Tooltip,
	Button,
	SelectControl
} = wp.components;

export default class Tab extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			tabIndex
		} = this.props;

		const {tabs, activeTab} = attributes;
		const tabTitle = tabs[tabIndex];
		const className = (tabIndex === activeTab) ? 'show active' : '';

		return [
			<Fragment>
				<li className="nav-item">
					<a
						className={classnames(
							className,
							'nav-link'
						)}
						data-toggle="tab"
						href={`#${_camelCase(tabTitle)}`}
						role="tab"
						onClick={() => {
							this.props.setAttributes( { activeTab: tabIndex} );

							const select = wp.data.select('core/block-editor');
							const inner = select.getBlock(this.props.clientId).innerBlocks;

							// Update all the inner blocks className
							_.each(inner, (containerBlock, blockIndex) => {
								const {attributes} = containerBlock;
								let className = 'tab-pane fade';

								if (tabIndex === blockIndex) {
									className += ' show active';
								}
								attributes.className = className;
							});
						}}
					>
						<RichText
							tagName="span"
							placeholder={ __( 'Button text...', 'vt' ) }
							value={ tabTitle }

							onChange={ (value) => {
								let tabsInner = _cloneDeep(attributes.tabs);
								tabsInner[tabIndex] = value;
								this.props.setAttributes( { tabs: tabsInner} );

								let className = 'tab-pane fade';

								if (tabIndex === attributes.activeTab) {
									className += ' show active';
								}

								const select = wp.data.select('core/block-editor');
								const inner = select.getBlock(this.props.clientId).innerBlocks;

								_.each(inner, (containerBlock, blockIndex) => {
									const {attributes} = containerBlock;
									attributes.containerID = _camelCase(tabsInner[blockIndex]);
									attributes.className = className;
								});
							} }
						/>
					</a>
				</li>
			</Fragment>
		];

	}
}
