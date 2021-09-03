/**
 * BLOCK: vt Blocks Advanced Slider
 */

/**
 * Components and dependencies.
 */
import Edit from './components/edit';
import Save from './components/save';
import deprecated from './deprecated';

import './styles/style.scss';
import './styles/editor.scss';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register advanced columns block InnerBlocks.
 */
registerBlockType( 'vt/slider', {
	title: __( 'VT Slider', 'vt' ),
	description: __( 'Add a pre-defined column layout.', 'vt' ),
	icon: 'slides',
	category: 'v-tech',
	keywords: [
		__( 'column', 'vt' ),
		__( 'grid', 'vt' ),
		__( 'row', 'vt' ),
	],
	attributes: {
		columns: {
			type: 'number',
			default: 3
		},
		layout: {
			type: 'string',
		},
		columnsGap: {
			type: 'number',
			default: 2,
		},
		align: {
			type: 'string',
		},
		showBottomBar: {
			type: 'boolean',
			default: false,
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
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		columnMaxWidth: {
			type: 'number',
		},
		centerColumns: {
			type: 'boolean',
			default: true,
		},
		showIndicators: {
			type: 'boolean',
			default: false,
		},
		showPagination: {
			type: 'boolean',
			default: false,
		},
		slideId: {
			type: 'string',
		},
		allowEdit: {
			type: 'boolean',
			default: false,
		},
		autoplay: {
			type: 'boolean',
			default: false,
		},
		activeTab: {
			type: 'number',
			default: 0
		},
		boxModel: {
			type: 'object',
			default: {}
		},
		vtID: {
			type: 'string',
			default: null
		}
	},

	/* Add alignment to block wrapper. */
	getEditWrapperProps( { align } ) {
		if ( 'left' === align || 'right' === align || 'full' === align || 'wide' === align ) {
			return { 'data-align': align };
		}
	},

	/* Render the block components. */
	edit: Edit,

	/* Save the block markup. */
	save: Save,

	/* Maintain deprecated blocks */
	deprecated
} );
