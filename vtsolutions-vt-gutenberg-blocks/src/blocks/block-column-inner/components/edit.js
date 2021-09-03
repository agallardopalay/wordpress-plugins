/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Column from './column';
import classnames from 'classnames';
import icons from "../../block-column/components/icons";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Component } = wp.element;
const {
	BaseControl,
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Tooltip,
	Toolbar,
} = wp.components;

const {
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	withColors,
} = wp.blockEditor;

class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
			isSelected,
			hasChildBlocks,
		} = this.props;

		const toolbarControls = [
			{
				icon: 'arrow-up-alt2',
				title: __( 'Vertical Align Top', 'atomic-blocks' ),
				isActive: attributes.columnVerticalAlignment === 'top',
				onClick: () => setAttributes( { columnVerticalAlignment: 'top' } ),
			},
			{
				icon: 'minus',
				title: __( 'Vertical Align Middle', 'atomic-blocks' ),
				isActive: attributes.columnVerticalAlignment === 'center',
				onClick: () => setAttributes( { columnVerticalAlignment: 'center' } ),
			},
			{
				icon: 'arrow-down-alt2',
				title: __( 'Vertical Align Bottom', 'atomic-blocks' ),
				isActive: attributes.columnVerticalAlignment === 'bottom',
				onClick: () => setAttributes( { columnVerticalAlignment: 'bottom' } ),
			},
		];

		return [
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ attributes.textAlign }
					onChange={ ( value ) => {
						setAttributes( { textAlign: value } );
					} }
				/>
				{/*<Toolbar controls={ toolbarControls } />*/}
			</BlockControls>,
			<Inspector { ...this.props } key="inspector"/>,
			<Column
				/* Pass through the live color value to the Column component */
				backgroundColorValue={ this.props.backgroundColor.color }
				textColorValue={ this.props.textColor.color }
				isEditor={true}
				{ ...this.props }
				key="column"
			>
				<div className={'edit-columns svg-column'}>
					{icons.column}
				</div>
				<InnerBlocks
					templateLock={ false }
					renderAppender={ (
						hasChildBlocks ?
							undefined :
							() => <InnerBlocks.ButtonBlockAppender />
					) }
				/>

			</Column>
		];
	}
}

export default compose( [
	withColors(
		'backgroundColor',
		{ textColor: 'color' },
	),
] )( Edit );
