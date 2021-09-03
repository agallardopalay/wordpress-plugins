/**
 * Column layouts available for each column option.
 */

import icons from './icons';

const { __ } = wp.i18n;

const columnLayouts = {
	/* 1 column layout. */
	1 : [
		{
			name: __( '1 Column', 'atomic-blocks' ),
			key: 'ab-1-col-equal',
			col: 1,
			icon: icons.oneEqual
		},
	],
	/* 2 column layouts. */
	2 : [
		{
			name: __( '2 Columns - 50/50', 'atomic-blocks' ),
			key: 'md_6_6',
			col: 2,
			icon: icons.twoEqual
		},
		{
			name: __( '2 Columns - 67/33', 'atomic-blocks' ),
			key: 'md_8_4',
			col: 2,
			icon: icons.twoLeftWideMd8
		},
		{
			name: __( '2 Columns - 33/67', 'atomic-blocks' ),
			key: 'md_4_8',
			col: 2,
			icon: icons.twoLeftWideMd3
		},
		{
			name: __( '2 Columns - 75/25', 'atomic-blocks' ),
			key: 'md_9_3',
			col: 2,
			icon: icons.twoLeftWide
		},
		{
			name: __( '2 Columns - 83/17', 'atomic-blocks' ),
			key: 'md_10_2',
			col: 2,
			icon: icons.twoLeftWideMd10
		},
		{
			name: __( '2 Columns - 25/75', 'atomic-blocks' ),
			key: 'md_3_9',
			col: 2,
			icon: icons.twoRightWide
		},
	],
	3 : [
		{
			name: __( '2 Columns - 50/50', 'atomic-blocks' ),
			key: 'md_6_6',
			col: 3,
			icon: icons.twoEqual
		},
		{
			name: __( '2 Columns - 67/33', 'atomic-blocks' ),
			key: 'md_8_4',
			col: 3,
			icon: icons.twoLeftWideMd8
		},
		{
			name: __( '2 Columns - 33/67', 'atomic-blocks' ),
			key: 'md_4_8',
			col: 3,
			icon: icons.twoLeftWideMd3
		},
		{
			name: __( '2 Columns - 75/25', 'atomic-blocks' ),
			key: 'md_9_3',
			col: 3,
			icon: icons.twoLeftWide
		},
		{
			name: __( '2 Columns - 83/17', 'atomic-blocks' ),
			key: 'md_10_2',
			col: 3,
			icon: icons.twoLeftWideMd10
		},
		{
			name: __( '2 Columns - 25/75', 'atomic-blocks' ),
			key: 'md_3_9',
			col: 3,
			icon: icons.twoRightWide
		},
	],
	4 : [
		{
			name: __( '2 Columns - 50/50', 'atomic-blocks' ),
			key: 'md_6_6',
			col: 4,
			icon: icons.twoEqual
		},
		{
			name: __( '2 Columns - 67/33', 'atomic-blocks' ),
			key: 'md_8_4',
			col: 4,
			icon: icons.twoLeftWideMd8
		},
		{
			name: __( '2 Columns - 33/67', 'atomic-blocks' ),
			key: 'md_4_8',
			col: 4,
			icon: icons.twoLeftWideMd3
		},
		{
			name: __( '2 Columns - 75/25', 'atomic-blocks' ),
			key: 'md_9_3',
			col: 4,
			icon: icons.twoLeftWide
		},
		{
			name: __( '2 Columns - 83/17', 'atomic-blocks' ),
			key: 'md_10_2',
			col: 4,
			icon: icons.twoLeftWideMd10
		},
		{
			name: __( '2 Columns - 25/75', 'atomic-blocks' ),
			key: 'md_3_9',
			col: 4,
			icon: icons.twoRightWide
		},
	],

}

export default columnLayouts
