/**
 * BLOCK: Atomic Blocks Advanced Columns.
 */

/**
 * Components and dependencies.
 */
import Edit from './components/edit';
import Save from './components/save';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register advanced columns block InnerBlocks.
 */
registerBlockType( 'vt/ab-columns', {
	title: __( 'VT Responsive Columns', 'vt' ),
	description: __( 'Add a pre-defined column layout.', 'vt' ),
	icon: 'editor-table',
	category: 'v-tech',
	supports: {
		html: false,
		styles: true,
		spacings: true,
		display: true,
		scrollReveal: true,
	},
	keywords: [
		__( 'column', 'vt' ),
		__( 'grid', 'vt' ),
		__( 'row', 'vt' ),
	],
	attributes: {
		boxModel: {
			type: 'object',
			default: {}
		},
		vtID: {
			type: 'string',
			default: null
		},
		columns: {
			type: 'number',
		},
		layout: {
			type: 'string',
		},
		align: {
			type: 'string',
		},
		responsiveToggle: {
			type: 'boolean',
			default: true,
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		blockBackgroundColor: {
			type: 'string',
		},
		blockTextColor: {
			type: 'string',
		},
		columnMaxWidth: {
			type: 'number',
		},
		centerColumns: {
			type: 'boolean',
			default: true,
		}
	},

	/* Add alignment to block wrapper. */
	getEditWrapperProps( { align } ) {
		if ( 'left' === align || 'right' === align || 'full' === align || 'wide' === align ) {
			return { 'data-align': align };
		}
	},

	/* Render the block components. */
	edit: props => {
		return <Edit { ...props } />;
	},

	/* Save the block markup. */
	save: props => {
		return <Save { ...props } />;
	},
} );
