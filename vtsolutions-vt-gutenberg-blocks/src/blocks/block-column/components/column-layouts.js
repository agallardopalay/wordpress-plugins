/**
 * Column layouts available for each column option.
 */

import icons from './icons';

const { __ } = wp.i18n;

const columnLayouts = {
	/* 1 column layout. */
	1 : [
		{
			name: __( '1 Column', 'vt' ),
			key: 'lg_12',
			col: 1,
			icon: icons.oneEqual
		},
	],
	/* 2 column layouts. */
	2 : [
		{
			name: __( '2 Columns - 50/50', 'vt' ),
			key: 'md_6_6',
			col: 2,
			icon: icons.twoEqual
		},
		{
			name: __( '2 Columns - 67/33', 'vt' ),
			key: 'md_8_4',
			col: 2,
			icon: icons.twoLeftWideMd8
		},
		{
			name: __( '2 Columns - 33/67', 'vt' ),
			key: 'md_4_8',
			col: 2,
			icon: icons.twoLeftWideMd3
		},
		{
			name: __( '2 Columns - 75/25', 'vt' ),
			key: 'md_9_3',
			col: 2,
			icon: icons.twoLeftWide
		},
		{
			name: __( '2 Columns - 83/17', 'vt' ),
			key: 'md_10_2',
			col: 2,
			icon: icons.twoLeftWideMd10
		},
		{
			name: __( '2 Columns - 25/75', 'vt' ),
			key: 'md_3_9',
			col: 2,
			icon: icons.twoRightWide
		},
	],
	3: [
		{
			name: __( '3 Columns - 33/33/33', 'vt' ),
			key: 'md_4_4_4',
			col: 3,
			icon: icons.threeEqual
		},
		{
			name: __( '3 Columns - 25/50/25', 'vt' ),
			key: 'md_3_6_3',
			col: 3,
			icon: icons.threeWideCenter
		},
		{
			name: __( '3 Columns - 50/25/25', 'vt' ),
			key: 'md_6_3_3',
			col: 3,
			icon: icons.threeWideLeft
		},
		{
			name: __( '3 Columns - 25/25/50', 'vt' ),
			key: 'md_3_3_6',
			col: 3,
			icon: icons.threeWideRight
		},
	],
	4: [
		{
			name: __( '4 Columns - 4*25', 'vt' ),
			key: 'md_3_3_3_3',
			col: 4,
			icon: icons.fourEqual
		},
		{
			name: __( '4 Columns - 3*16.6% & 50Right', 'vt' ),
			key: 'md_2_2_2_6',
			col: 4,
			icon: icons.fourRight
		},
		{
			name: __( '4 Columns - 50Left+3*16.6%', 'vt' ),
			key: 'md_6_2_2_2',
			col: 4,
			icon: icons.fourLeft
		},
	]
};

export default columnLayouts
