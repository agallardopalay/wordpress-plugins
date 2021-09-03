/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

import templates from './templates';
import compact from 'lodash/compact';
import map from 'lodash/map';

// Import block components
const {
  InspectorControls,
} = wp.editor;

// Import Inspector components
const {
	PanelBody,
	SelectControl,
	TextControl,
} = wp.components;

const { addQueryArgs } = wp.url;
const { apiFetch } = wp;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		// Setup the attributes
		const {
			attributes,
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Post and Page Grid Settings', 'vt' ) }
				>
					<SelectControl
						label={ __( 'Template', 'vt' ) }
						options={ templates }
						value={ attributes.template }
						onChange={ ( value ) => this.props.setAttributes( { template: value } ) }
					/>

					{ attributes.template === 'source' && (
						<TextControl
							label={ __( 'Source URL', 'vt' ) }
							type="url"
							value={ attributes.source }
							onChange={ ( value ) => this.props.setAttributes( { source: value } ) }
						/>
					) }

				</PanelBody>
			</InspectorControls>
		);
	}
}
