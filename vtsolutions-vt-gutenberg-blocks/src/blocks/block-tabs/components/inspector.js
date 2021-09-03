/**
 * Inspector Controls
 */
import _cloneDeep from 'lodash/cloneDeep';

// Setup the block
const { __ } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;

// Import block components
const {
	InspectorControls,
} = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	editorHelper() {
		const {allowEdit} = this.props.attributes.allowEdit;

		if (!allowEdit) {
			return __( 'To change numbers of tabs disable this control', 'vt' );
		}

		return __( 'To enable tab editor enable this tab', 'vt' );
	}

	render() {

		// Setup the attributes
		const {
			attributes,
		} = this.props;

		return (
		<InspectorControls key="inspector">
			<PanelBody>
				{ !attributes.allowEdit &&

					<Fragment>
						<RangeControl
							label={ __( 'Tabs Counter', 'vt' ) }
							value={ attributes.columns }
							onChange={ ( value ) => {

								let tabs = _cloneDeep(attributes.tabs);
								tabs[value-1] = `tab_${value}`;

								this.props.setAttributes( {
									columns: value,
									tabs: tabs
								});
							}}
							min={ 1 }
							max={ 10 }
							step={ 1 }
						/>
						<hr />
					</Fragment>
				}

				<ToggleControl
					label={ __( 'Allow edit', 'vt' ) }
					help={ this.editorHelper() }
					checked={ attributes.allowEdit }
					onChange={ () => this.props.setAttributes( { allowEdit: ! attributes.allowEdit } ) }
				/>
			</PanelBody>
		</InspectorControls>
		);
	}
}
