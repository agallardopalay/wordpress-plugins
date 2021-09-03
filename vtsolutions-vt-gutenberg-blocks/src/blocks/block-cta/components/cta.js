/**
 * CTA Wrapper
 */

// Setup the block
const { Component, Fragment } = wp.element;
// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	BlockAlignmentToolbar,
	MediaUpload,
	RichText,
} = wp.blockEditor;


// Import block dependencies and components
import classnames from 'classnames';

/**
 * Create a CallToAction wrapper Component
 */
export default class CallToAction extends Component {

	constructor( props) {
		super( ...arguments );
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonType,
				buttonTarget,
				ctaTitle,
				ctaText,
				ctaTitleFontSize,
				titleFontSize,
				ctaTextFontSize,
				ctaWidth,
				ctaBackgroundColor,
				ctaTextColor,
				imgURL,
				imgID,
				imgAlt,
				dimRatio,
				btnIcon,
				noWrapper,
				toggleModal,
				modalID
			}
		} = this.props;

		const className = classnames( [
			this.props.className,
		], {
			[ 'ab-font-size-' + ctaTextFontSize ]: ctaTextFontSize,
			[ 'align' + ctaWidth ]: ctaWidth,
		} );

		const styles = {
			textAlign: buttonAlignment ? buttonAlignment : undefined,
		};

		let btnClass = '';
		if (!_.isNull(buttonType) && !_.isEmpty(buttonType)) {
			btnClass = `btn-${buttonType}`;
		}

		let buttonStyles = {};
		if (buttonBackgroundColor) {
			buttonStyles.backgroundColor = buttonBackgroundColor;
		}
		if (buttonTextColor) {
			buttonStyles.color = buttonTextColor;
		}

		return (
			<Fragment>
			{ !noWrapper ?
				<div style={ styles } className={ className ? className : null } {...this.props}>
					{ this.props.children }
				</div>
			:
				<Fragment {...this.props}>
					{this.props.children}
				</Fragment>
			}
			</Fragment>
		);
	}
}

