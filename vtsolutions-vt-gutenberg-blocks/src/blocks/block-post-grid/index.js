/**
 * BLOCK: Atomic Blocks Post and Page Grid
 */

// Import block dependencies and components
import edit from './components/edit';

// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Register block controls
const {
	registerBlockType,
} = wp.blocks;

// Register alignments
const validAlignments = [ 'center', 'wide', 'full' ];

// Register the block
registerBlockType( 'vt/ab-post-grid', {
	title: __( 'AB Post and Page Grid', 'vt' ),
	description: __( 'Add a grid or list of customizable posts or pages.', 'vt' ),
	icon: 'grid-view',
	category: 'v-tech',
	keywords: [
		__( 'post', 'vt' ),
		__( 'page', 'vt' ),
		__( 'grid', 'vt' ),
	],

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== validAlignments.indexOf( align ) ) {
			return { 'data-align': align };
		}
	},

	edit,

	// Render via PHP
	save() {
		return null;
	},
} );
