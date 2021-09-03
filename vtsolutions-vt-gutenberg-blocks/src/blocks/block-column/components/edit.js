/**
 * External dependencies.
 */
import classnames from 'classnames';
import Columns from './column-wrap';
import icons from './icons';
import Inspector from './inspector';
import columnLayouts from './column-layouts';
import memoize from 'memize';
import map from 'lodash/map';
import _times from 'lodash/times';
import _words from 'lodash/words';
import _reverse from "lodash/reverse";
import {vtKitVariables} from "../../../lib/responsive-tab-panel";
import {Style} from "radium";

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
} = wp.components;

/* Set allowed blocks and media. */
const ALLOWED_BLOCKS = [ 'vt/ab-column' ];

/* Get the column template. */
const getLayoutTemplate = memoize( ( attributes ) => {
	const columns = attributes.columns;
	const split_layout = _words(attributes.layout, /[^_]+/g);
	const column_classes = split_layout.slice(1);

	return _times( columns, (columnIndex) => {
		let size = column_classes[columnIndex];
		let className = `col-${size}`;

		return [ 'vt/ab-column',  { className, size } ];
	} );
} );

class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			selectLayout: false,
		}
	}

	render() {

		const {
			attributes,
			attributes: {
				boxModel,
				vtID
			},
			clientId,
			setAttributes,
			hasChildBlocks
		} = this.props;

		let selectedRows = 1;

		if ( attributes.columns ) {
			selectedRows = parseInt( attributes.columns.toString().split('-') );
		}

		let rules = {};
		if (boxModel && !_.isEmpty(boxModel)) {
			window.metaQueries[clientId] = {
				name,
				styles: boxModel
			};

			const {responsive, ...metaStyles} = boxModel;

			let scopeSelector = `[vt-id="${clientId}"]`;

			if (!_.isEmpty(metaStyles)) {
				rules[`${scopeSelector}`] = metaStyles;
			}

			// css must be in order of big to small in order to have proper responsive settings
			const inverseKeys = _reverse(_.keys(vtKitVariables.media_sizes));

			let mediaQueries = {};
			if (!_.isEmpty(responsive)) {
				_.each(inverseKeys, (size) => {

					const sizeStyles = responsive[size];

					if (size !== 'all' && !_.isEmpty(sizeStyles)) {
						mediaQueries[`screen and (max-width: ${vtKitVariables.media_sizes[size]}px)`] = {
							[`${scopeSelector}`]: sizeStyles
						}
					}

				});
			}

			rules['mediaQueries'] = mediaQueries;
		}

		if (!vtID || vtID !== clientId) {
			this.props.setAttributes({vtID: clientId});
		}

		const columnOptions = [
			{
				name: __( '1 Column', 'vt' ),
				key: 'one-column',
				columns: 1,
				icon: icons.oneEqual,
			},
			{
				name: __( '2 Columns', 'vt' ),
				key: 'two-column',
				columns: 2,
				icon: icons.twoEqual
			},
			{
				name: __( '3 Columns', 'vt' ),
				key: 'three-column',
				columns: 3,
				icon:icons.threeEqual
			},
			{
				name: __( '4 Columns', 'vt' ),
				key: 'four-column',
				columns: 4,
				icon: icons.fourEqual
			},
			{
				name: __( '5 Columns', 'vt' ),
				key: 'five-column',
				columns: 5,
				icon: icons.fiveEqual,
			},
			{
				name: __( '6 Columns', 'vt' ),
				key: 'six-column',
				columns: 6,
				icon: icons.sixEqual,
			},
		];

		/* Show the layout placeholder. */
		if ( !attributes.layout || this.state.selectLayout ) {
			return [
				<Placeholder
					key="placeholder"
					icon="editor-table"
					label={ attributes.columns ? __( 'Column Layout', 'vt' ) : __( 'Column Number', 'vt' ) }
					instructions={ attributes.columns ? sprintf( __( 'Select a layout for this column.', 'vt' ) ) : __( 'Select the number of columns for this layout.', 'vt' ) }
					className={ 'ab-column-selector-placeholder' }
				>
					{ ! attributes.columns ?
						<ButtonGroup
							aria-label={ __( 'Select Row Columns', 'vt' ) }
							className="ab-column-selector-group"
						>
							{ map( columnOptions, ( { name, key, icon, columns } ) => (
								<Tooltip text={ name } key={ key }>
									<div className="ab-column-selector">
										<Button
											className="ab-column-selector-button"
											isSmall
											onClick={ () => {
												setAttributes( {
													columns: columns,
													layout: columns === 1 || columns === 5 || columns === 6 ? key : null,
												} );

												{ columns === 1 &&
													this.setState( { 'selectLayout' : false } );
												}
											} }
										>
											{ icon }
										</Button>
									</div>
								</Tooltip>
							) ) }
						</ButtonGroup>
					:
						<Fragment>
							<ButtonGroup
								aria-label={ __( 'Select Column Layout', 'vt' ) }
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
									{ __( 'Return to Column Selection', 'vt' ) }
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
			<Columns
				{ ...this.props }
				isEditor={true}
				key="columns"
			>
				<div
					className={ classnames(
						'ab-layout-column-wrap-admin',
						'row'
					) }
					style={ { maxWidth: attributes.columnMaxWidth ? attributes.columnMaxWidth : null } }
				>
					<div className={'edit-columns'}>
						{icons.table}
					</div>
					<InnerBlocks
						template={ getLayoutTemplate( attributes ) }
						templateLock="all"
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
				<Style rules={rules} />
			</Columns>
		];
	}
}

export default compose( [
	withColors(
		'backgroundColor',
		{ textColor: 'color' },
	),
] )( Edit );
