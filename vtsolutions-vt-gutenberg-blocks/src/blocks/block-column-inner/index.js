/**
 * BLOCK: Atomic Blocks Advanced Columns InnerBlocks.
 */

/**
 * Internal dependencies.
 */
import Edit from './components/edit';
import Save from './components/save';
import './styles/style.scss';
import './styles/editor.scss';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register advanced columns block.
 */
registerBlockType( 'vt/ab-column', {
	title: __( 'vt Advanced Column', 'vt' ),
	description: __( 'Add a pre-defined column layout.', 'vt' ),
	icon: 'editor-table',
	category: 'v-tech',
	parent: [ 'vt/ab-columns' ],
	supports: {
		"html": false,
		"className": false,
		"anchor": true,
		"inserter": false,
		"reusable": false
	},
	keywords: [
		__( 'column', 'vt' ),
		__( 'layout', 'vt' ),
		__( 'row', 'vt' ),
	],
	attributes: {
		columnBackgroundColor: {
			type: 'string'
		},
		columnTextColor: {
			type: 'string'
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		textAlign: {
			type: 'string',
		},
		columnVerticalAlignment: {
			type: 'string',
		},
		size: {
			type: 'string'
		},
		responsive: {
			type: 'object',
			default: {}
		},
		boxModel: {
			type: 'object',
			default: {}
		},
	},

	/* Render the block in the editor. */
	edit: props => {
		return <Edit { ...props } />;
	},

	/* Save the block markup. */
	save: props => {
		return <Save { ...props } />;
	},
} );

/* Add the vertical column alignment class to the block wrapper. */
const withClientIdClassName = wp.compose.createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
		const block = props.block;

		if( block.name === 'vt/ab-column' ) {
			return <BlockListBlock {...props} className={block.attributes.className} />;
        }
        else {
            return <BlockListBlock { ...props } />
        }
	};
}, 'withClientIdClassName' );

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'vt/add-vertical-align-class',
	withClientIdClassName
);
