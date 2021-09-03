/**
 * BLOCK: vt Blocks Tabs
 */
// Import CSS
import './styles/style.scss';
import './styles/editor.scss';

// Import block dependencies and components
import Edit from './components/edit'
import Save from './components/save'
import icons from "../../lib/icons";

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;


// Register the block
registerBlockType( 'vt/tabs', {
	title: __( 'VT Tabs' ),
	icon: icons.tab,
	category: 'v-tech',
	keywords: [],
	attributes: {
		allowEdit: {
			type: 'boolean',
			default: false
		},
		columns: {
			type: 'number',
			default: 2,
		},
		activeTab: {
			type: 'number',
			default: 0
		},
		tabs: {
			type: 'array',
			default: ["tab1", "tab2", "tab3"]
		}
	},

	// Render the block components
	edit: Edit,

	// Save the attributes and markup
	save: Save,
} );
