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
	['core/heading', {text: 'LiveIntent Modal Mobile Tittle...', placeholder: 'LiveIntent Modal Mobile Tittle...'}],
	['core/paragraph', {text: 'Add Mobile paragraph', placeholder: 'Add Mobile paragraph...'}],
	['core/image']
];


// Register the block
registerBlockType( 'vt/inner-live-intent-mobile', {
	title: 'VT LiveIntent Mobile',
	icon: icons.modal,
	category: 'v-tech',

	attributes: {},

	/* Render the block components. */
	edit: props => {
		return <div className="modal-mobile-content restricted-block">
			<InnerBlocks template={TEMPLATE} />
		</div>;
	},

	/* Save the block markup. */
	save: props => {
		return <div className="modal-mobile-content restricted-block">
			<InnerBlocks.Content className="" />
		</div>;
	},
} );
