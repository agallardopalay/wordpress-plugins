import Inspector from './inspector';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Placeholder } = wp.components;
const { Component, Fragment } = wp.element;

const {
	RichText,
	InnerBlocks,
} = wp.blockEditor;

export default class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			toggleModal: true
		}
	}

	render() {
		const {
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
				modalID,
				modalTitle,
				showModalHeader,
				showModalFooter,
				showModalCloseButton,
				closeButtonText,
			},
			setAttributes,
			clientId,
		} = this.props;

		const styles = {
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

		const TEMPLATE = [
			['vt/container', [
				['vt/cta', { text: 'Make this Recipe' }],
				['core/paragraph', {text: 'Paragraph Sample'}]
			]],
		];

		if (!_.includes(window.wp_modals, clientId)) {
			window.wp_modals.push(clientId);
		}

		if (!modalID) {
			this.props.setAttributes({ modalID: clientId });
		}

		return [
			<Inspector { ...this.props } />,
			<div className="modal">
				<div className="modal-dialog" style={styles}>
					{this.state.toggleModal ?
						<div className="modal-content">
							{showModalHeader ?
								<div className="modal-header">
									{ modalTitle ?
										<h5 className="modal-title">
											<RichText
												tagName="span"
												placeholder={'Modal title'}
												value={modalTitle}
												onChange={(value) => setAttributes({modalTitle: value})}
											/>
										</h5> : ''
									}
									{showModalCloseButton ?
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
											onClick={() => {
												this.setState({toggleModal: !this.state.toggleModal});
											}}
										>
											<span aria-hidden="true">&times;</span>
										</button> : ''
									}
								</div> : ''
							}
							<div className="modal-body">
								<InnerBlocks template={TEMPLATE}/>
							</div>
							{showModalFooter && (
								<div className="modal-footer">
									<button type="button" className="btn" data-dismiss="modal">
										<RichText
											tagName="span"
											placeholder={'Close'}
											value={closeButtonText}
											onChange={(value) => setAttributes({closeButtonText: value})}
										/>
									</button>
								</div>
							)}
						</div>
						:
						<div>
							<button
								type="button"
								className="toggle-modal"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => {
									this.setState({toggleModal: !this.state.toggleModal});
								}}
							>Preview Modal</button>
						</div>
					}
				</div>
			</div>
		];
	}
}
