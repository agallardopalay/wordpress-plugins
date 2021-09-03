/**
 * Column component deprecations.
 */

import Edit_1_0_0 from './1.0.0/components/edit';
import Save_1_0_0 from './1.0.0/components/save';

import '../styles/style.scss';
import '../styles/editor.scss';


/**
 * Register advanced columns block InnerBlocks.
 */
const Carousel_attributes_1_0_0 = {
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
	}
}



const deprecated = [
	// Version 1.7.1
	{
		attributes: Carousel_attributes_1_0_0,
		edit: Edit_1_0_0,
		save: Save_1_0_0,
	},
];

export default deprecated;
