import Tab from "./tab";
import Inspector from "./inspector";
import Tabs from "./tabs";
import classnames from "classnames";

import _times from 'lodash/times';
import _camelCase from 'lodash/camelCase';
import {Style} from "radium";

// Set allowed blocks and media
const ALLOWED_BLOCKS = [ 'vt/container' ];

const { Component } = wp.element;
// Register editor components
const {
	InnerBlocks,
} = wp.blockEditor;


export default class Edit extends Component {

	getPricingTemplate(attributes) {
		return _times( attributes.columns, (time) => {

			let containerID = attributes.tabs && attributes.tabs[time] || null;
			let className = 'tab-pane fade';

			if (time === attributes.activeTab) {
				className += ' show active';
			}

			return [ 'vt/container', {className, containerID: _camelCase(containerID)} ];
		} );
	}


	getTabTemplate(attributes) {
		return _times( attributes.columns, (tabIndex) => {
			return [<Tab
				{...this.props}
				tabIndex={tabIndex}
			></Tab>
			];
		} );
	}

	render() {

		// Setup the attributes
		const {
			attributes,
			setAttributes,
			clientId
		} = this.props;

		let templateLock = !attributes.allowEdit ? "all" : '';
		let rules = {};
		let blockId = attributes.vtID;

		if (!blockId) {
			blockId = clientId;
		}

		rules[`[vt-id="${blockId}"] > .tabs-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block`] = {
			display: 'none'
		};
		rules[`[vt-id="${blockId}"] > .tabs-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block:nth-child(${attributes.activeTab+1})`] = {
			display: 'block'
		};

		return [
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			// Show the block markup in the editor
			<Tabs { ...this.props }>

				{
					attributes.columns &&
					<div
						className="nav nav-tabs" role="tablist"
					>
						{ this.getTabTemplate( attributes ) }
					</div>
				}
				<div
					className={ classnames(
						'ab-layout-column-wrap-admin',
						'tabs-inner'
					) }
					data-tab={attributes.activeTab ? attributes.activeTab : 0}
				>
					<Style rules={rules} />
					<InnerBlocks
						template={ this.getPricingTemplate( attributes ) }
						templateLock={templateLock}
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
			</Tabs>
		];
	}
}
