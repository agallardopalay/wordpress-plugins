/**
 * BLOCK: vt Icon
 */

/**
 * Components and dependencies.
 */
import Edit from './components/edit';
import Save from './components/save';
import icons from './../../lib/icons';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	URLInput,
} = wp.blockEditor;

// Register components
const {
	withFallbackStyles,
} = wp.components;

const blockAttributes = {
	boxModel: {
		type: 'object',
		default: {}
	},
	faVersion: {
		type: 'string'
	},
	type: {
		type: 'string',
		default: 'star'
	},
	size: {
		type: 'number',
	},
	iconBackgroundColor: {
		type: 'string'
	},
	iconColor: {
		type: 'string'
	}
};


// Register the block
registerBlockType( 'vt/icon', {
	title: 'VT icon',
	icon: icons.star,
	category: 'v-tech',

	attributes: blockAttributes,

	/* Render the block components. */
	edit: props => {
		return <Edit { ...props } />;
	},

	/* Save the block markup. */
	save: props => {
		return <Save { ...props } />;
	},
} );
