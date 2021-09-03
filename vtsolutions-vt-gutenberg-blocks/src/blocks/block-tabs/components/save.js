import classnames from 'classnames';
import Tabs from './tabs';
import _times from 'lodash/times';
import _camelCase from 'lodash/camelCase';

const { Component } = wp.element;
// Register editor components
const {
	InnerBlocks,
} = wp.blockEditor;


export default class Save extends Component {

	getLayoutTemplate(attributes) {
		const {tabs, activeTab} = this.props.attributes;


		return _times( attributes.columns, (tabIndex) => {
			const tabTitle = tabs[tabIndex];
			let className = tabIndex === activeTab ? 'show active' : '';

			return [
				<li className="nav-item">
					<a
						className={classnames(
							className,
							'nav-link'
						)}
						data-toggle="tab"
						href={`#${_camelCase(tabTitle)}`}
						role="tab"
					>
						{tabTitle}
					</a>
				</li>
			];
		} );
	}

	render() {
		const { attributes } = this.props;

		return (
			<Tabs
				{ ...this.props }
			>
				{
					attributes.columns &&
					<ul className="nav nav-tabs" role="tablist">
						{ this.getLayoutTemplate( attributes ) }
					</ul>
				}
				<div className="tab-content">
					<InnerBlocks.Content />
				</div>
			</Tabs>
		);
	}
}
