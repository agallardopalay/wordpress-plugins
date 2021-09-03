/**
 * External dependencies.
 */
import classnames from 'classnames';
import Slider from './slider';
import Inspector from './inspector';
import memoize from 'memize';
import map from 'lodash/map';
import _times from 'lodash/times';
import columnLayouts from './column-layouts';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const {
	BlockControls,
	BlockAlignmentToolbar,
	InnerBlocks,
	withColors,
} = wp.blockEditor;
const {
	Placeholder,
	ButtonGroup,
	Tooltip,
	Button,
	SelectControl
} = wp.components;
const {applyFilters} = wp.hooks;


/* Set allowed blocks and media. */
const ALLOWED_BLOCKS = [ 'vt/container' ];

/* Get the column template. */
const getLayoutTemplate = memoize( ( attributes ) => {
	return _times( attributes.columns, (time) => {
		let className = 'carousel-item';
		if (time === 0) {
			className += ' active';
		}
		return [ 'vt/container', {className} ];
	} );
} );

class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			selectLayout: true,
		};
	}

	getTabTemplate(attributes) {
		return _times( attributes.columns, (tabIndex) => {
			const className = (tabIndex === attributes.activeTab) ? 'active' : '';
			return [<div
				className={classnames(
					className,
					'slider-tab'
				)}
				tabIndex={tabIndex}
				onClick={() => {
					this.props.setAttributes( { activeTab: tabIndex} );

					const select = wp.data.select('core/block-editor');
					const inner = select.getBlock(this.props.clientId).innerBlocks;

					// Update all the inner blocks className
					_.each(inner, (containerBlock, blockIndex) => {
						const {attributes} = containerBlock;

						// let className = 'tab-pane fade';
						//
						// if (tabIndex === blockIndex) {
						// 	className += ' show active';
						// }
						// attributes.className = className;
					});
				}}
			>{`slide${tabIndex+1}`}</div>
			];
		} );
	}

	render() {

		const {
			attributes,
			setAttributes,
			clientId,
			attributes: {
				showBottomBar,
			}
		} = this.props;

		let selectedRows = 1;

		if ( attributes.columns ) {
			selectedRows = parseInt( attributes.columns.toString().split('-') );
		}

		const columnOptions = [
			{ value: 0, label: __( 'Select number of slides', 'vt' ) },
			{ value: 1, label: __( '1 Slides', 'vt' ) },
			{ value: 2, label: __( '2 Slides', 'vt' ) },
			{ value: 3, label: __( '3 Slides', 'vt' ) },
			{ value: 4, label: __( '4 Slides', 'vt' ) },
			{ value: 5, label: __( '5 Slides', 'vt' ) },
		];

		if (!attributes.slideId) {
			this.props.setAttributes({ slideId: clientId });
		}

		let templateLock = attributes.allowEdit ? "all" : '';

		/* Show the layout placeholder. */
		if ( ! attributes.layout && this.state.selectLayout ) {
			return [
				<Placeholder
					key="placeholder"
					icon="editor-table"
					label={ attributes.columns ? __( 'Column Layout', 'atomic-blocks' ) : __( 'Column Number', 'atomic-blocks' ) }
					instructions={ attributes.columns ? sprintf( __( 'Select a layout for this column.', 'atomic-blocks' ) ) : __( 'Select the number of columns for this layout.', 'atomic-blocks' ) }
					className={ 'ab-column-selector-placeholder' }
				>
					{ ! attributes.columns ?
						<SelectControl
							label={ __( 'Column Options', 'vt' ) }
							help={ __( 'Choose between pixel, percent, or em units.', 'vt' ) }
							options={ columnOptions }
							value={ attributes.layout }
							onChange={ ( value ) => {
								this.props.setAttributes( {
									layout: 'two-column',
									columns: value
								} );
							}}
						/>
						:
						<Fragment>
							<ButtonGroup
								aria-label={ __( 'Select Column Layout', 'atomic-blocks' ) }
								className="ab-column-selector-group"
							>
								{ map( columnLayouts[ selectedRows ], ( { name, key, icon } ) => (
									<Tooltip text={ name } key={ key }>
										<div className="ab-column-selector">
											<Button
												key={ key }
												className="ab-column-selector-button"
												isSmall
												onClick={ () => {
													setAttributes( {
														layout: key,
													} );
													this.setState( { 'selectLayout' : false } );
												} }
											>
												{ icon }
											</Button>
										</div>
									</Tooltip>
								) ) }
								<Button
									className="ab-column-selector-button-back"
									onClick={ () => {
										setAttributes( {
											columns: null,
										} );
										this.setState( { 'selectLayout' : true } );
									} }
								>
									{ __( 'Return to Column Selection', 'atomic-blocks' ) }
								</Button>
							</ButtonGroup>
						</Fragment>
					}
				</Placeholder>
			];
		}

		return [
			<BlockControls key="controls">
				<BlockAlignmentToolbar
					value={ attributes.align }
					onChange={ align => setAttributes( { align } ) }
					controls={ [ 'center', 'wide', 'full' ] }
				/>
			</BlockControls>,
			<Inspector { ...this.props } key="inspector"/>,
			<Fragment>
				{
					attributes.columns &&
					<div
						className="slider-editor nav nav-tabs" role="tablist"
					>
						{ this.getTabTemplate( attributes ) }
					</div>
				}
				<Slider
					{ ...this.props }
					/* Pass through the live color value to the Columns component */
					backgroundColorValue={ this.props.backgroundColor.color }
					textColorValue={ this.props.textColor.color }
					slideId={clientId}
					key="columns"
				>
					<div
						className={ classnames(
							'ab-layout-column-wrap-admin',
							'row',
							'slider-inner'
						) }
						data-tab={attributes.activeTab ? attributes.activeTab : 0}
						style={ { maxWidth: attributes.columnMaxWidth ? attributes.columnMaxWidth : null } }
					>
						<InnerBlocks
							template={ getLayoutTemplate( attributes ) }
							templateLock={templateLock}
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
					</div>
				</Slider>
			</Fragment>
		];
	}
}

export default compose( [
	withColors(
		'backgroundColor',
		{ textColor: 'color' },
	),
] )( Edit );
