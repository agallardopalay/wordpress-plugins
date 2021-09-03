/**
 * BLOCK: V-Tech Retreaver Modal
 */

/**
 * Components and dependencies.
 */

import icons from './../../../../lib/icons';

// Register block
const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;

const {
	RichText,
	InnerBlocks,
} = wp.blockEditor;

const TEMPLATE = [
	['core/heading', {text: 'LiveIntent Modal Desktop Tittle...', placeholder: 'LiveIntent Modal Desktop Tittle...'}],
	['core/paragraph', {text: 'Add Desktop paragraph', placeholder: 'Add Desktop paragraph...'}],
	['vt/cta', { text: 'Add Phone Number' }]
];


// Register the block
registerBlockType( 'vt/inner-live-intent-desktop', {
	title: 'VT LiveIntent Desktop',
	icon: icons.modal,
	category: 'v-tech',

	attributes: {},

	/* Render the block components. */
	edit: props => {
		return <div className="modal-desktop-content restricted-block">
			<InnerBlocks template={TEMPLATE} />
		</div>;
	},

	/* Save the block markup. */
	save: props => {
		return <div className="modal-desktop-content restricted-block">
			<InnerBlocks.Content className="" />
		</div>;
	},
} );
