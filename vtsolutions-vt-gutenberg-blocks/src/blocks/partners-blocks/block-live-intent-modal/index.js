/**
 * BLOCK: V-Tech Retreaver Modal
 */

/**
 * Components and dependencies.
 */
import Edit from './components/edit';
import Save from './components/save';
import icons from './../../../lib/icons';

import './styles/style.scss';
import './styles/editor.scss';
import './components/live-intent-desktop';
import './components/live-intent-mobile';

// Register block
const { registerBlockType } = wp.blocks;


// Register the block
registerBlockType( 'vt/live-intent-modal', {
	title: 'VT LiveIntent Modal',
	icon: icons.modal,
	category: 'v-tech',

	attributes: {
		boxModel: {
			type: 'object',
			default: {}
		},
		modalID: {
			type: 'string'
		},
		callTimeout: {
			type: 'number',
			default: 5000
		},
		urlAttribute: {
			type: 'string'
		},
		modalTitle: {
			type: 'string'
		},
		showModalHeader: {
			type: 'boolean',
			default: false
		},
		showModalFooter: {
			type: 'boolean',
			default: false
		},
		showModalCloseButton: {
			type: 'boolean',
			default: false
		},
		showModalOnDesktop: {
			type: 'boolean',
			default: true
		},
		showModalOnMobile: {
			type: 'boolean',
			default: true
		},
		showMobileView: {
			type: 'boolean',
			default: false
		},
		closeButtonText: {
			type: 'string',
			default: 'Close'
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
