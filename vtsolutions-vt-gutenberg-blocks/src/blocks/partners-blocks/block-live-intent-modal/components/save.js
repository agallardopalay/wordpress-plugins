/**
 * Internal dependencies.
 */

/**
 * WordPress dependencies.
 */
const {Component, RawHTML} = wp.element;
const {InnerBlocks} = wp.blockEditor;

export default class Save extends Component {

	getScript() {
		const {callTimeout, urlAttribute, modalID, showModalOnDesktop, showModalOnMobile} = this.props.attributes;
		const variable = JSON.stringify({callTimeout, urlAttribute, modalID, showModalOnDesktop, showModalOnMobile});

		const script = `jQuery(document).ready(function(event) {window.phoneCallAttempt(${variable});});`;

		return script.replace(/\n|\r\n|\r/g, '');
	}

	render() {

		const {
			attributes,
			attributes: {
				backgroundColor,
				textColor,
				boxModel: {
					borderLeft,
					borderRight,
					borderTop,
					borderBottom,
					paddingTop,
					paddingRight,
					paddingBottom,
					paddingLeft,
					marginTop,
					marginBottom,
					marginLeft,
					marginRight,
					minWidth,
					width,
					maxWidth,
					minHeight,
					height,
					maxHeight
				},
				showFormHeader,
				headerTitle,
				submitBtnTitle,
				showHeaderAsTooltip,
				tooltipBackgroundColor,
				tooltipTextColor,

				submitBtnBackgroundColor,
				submitBtnTextColor,
				disclaimerContent,
				showModalHeader,
				showModalFooter,
				showModalCloseButton,
				closeButtonText,
				modalTitle,
				modalID
			},
			setAttributes,
			clientId,
		} = this.props;

		const styles = {
			backgroundColor: backgroundColor ? backgroundColor : null,
			color: textColor ? textColor : null,
			borderLeft: borderLeft ? `${borderLeft}` : null,
			borderRight: borderRight ? `${borderRight}` : null,
			borderBottom: borderBottom ? `${borderBottom}` : null,
			borderTop: borderTop ? `${borderTop}` : null,
			paddingLeft: paddingLeft ? `${paddingLeft}` : null,
			paddingRight: paddingRight ? `${paddingRight}` : null,
			paddingBottom: paddingBottom ? `${paddingBottom}` : null,
			paddingTop: paddingTop ? `${paddingTop}` : null,
			marginTop: marginTop ? `${marginTop}` : null,
			marginBottom: marginBottom ? `${marginBottom}` : null,
			marginLeft: marginLeft ? `${marginLeft}` : null,
			marginRight: marginRight ? `${marginRight}` : null,
			minWidth: minWidth ? `${minWidth}` : null,
			width: width ? `${width}` : null,
			maxWidth: maxWidth ? `${maxWidth}` : null,
			minHeight: minHeight ? `${minHeight}` : null,
			height: height ? `${height}` : null,
			maxHeight: maxHeight ? `${maxHeight}` : null,
		};

		return (
			<div className="modal fade" id={modalID} role="dialog" aria-labelledby={modalID} aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document" style={styles}>
					<div className="modal-content">
						{showModalHeader && (
							<div className="modal-header">
								{
									modalTitle ? <h5 className="modal-title">{modalTitle}</h5> : ''
								}
								{
									showModalCloseButton ?
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button> : ''
								}
							</div>
						)}
						<div className="modal-body">
							<InnerBlocks.Content className="" />
						</div>
						<script>
							{this.getScript()}
						</script>
						{showModalFooter && (
							<div className="modal-footer">
								<button type="button" className="btn" data-dismiss="modal">
									{closeButtonText}
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
