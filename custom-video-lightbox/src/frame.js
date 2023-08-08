import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import './style.scss';

const NAMESPACE = 'custom-video-lightbox';

export default function Frame( props ) {
	const { modalInfo, handleChildrenSubtitle, handleChildrenTitle, handleChildrenDescription } = props;
	const { layout, title, subTitle, description, downloadedMedia } = modalInfo;
	const activeClass = layout === 'right' ? 'right-aligned-image' : '';

	return (
		<div className={`custom-video-lightbox__container ${activeClass}`}>
				<div className={`custom-video-lightbox__image--cover ${activeClass}`}>
					<div className={`custom-video-lightbox__image--overlay ${activeClass}`}></div>
					<img src={ downloadedMedia?.url ? downloadedMedia?.url : 'https://www.frbsf.org/wp-content/uploads/homepage_xlg_CommitmenttoEquity.jpg' } alt={ downloadedMedia?.title ? downloadedMedia?.title : 'Youtube Video Title'} />
				</div>
				<div className={`custom-video-lightbox__overlay ${activeClass}`}>
						<div className="custom-video-lightbox__text">
								<RichText
									tagName="h3"
									placeholder={__('Subtitle', NAMESPACE)}
									value={subTitle}
									onChange={handleChildrenSubtitle}
								/>
								<RichText
									tagName="h2"
									placeholder={__('Title', NAMESPACE)}
									value={title}
									onChange={handleChildrenTitle}
								/>
								<div className="custom-video-lightbox__icon--text">
										<button
										  id="openModalBtn"
											className="custom-video-lightbox__play--video"
											aria-haspopup="dialog"
											aria-controls="modal"
										>
											<svg width="100%" height="100%" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M68.2708 34.8116C68.2708 52.9169 53.4631 67.6232 35.1608 67.6232C16.8585 67.6232 2.05078 52.9169 2.05078 34.8116C2.05078 16.7063 16.8585 2 35.1608 2C53.4631 2 68.2708 16.7063 68.2708 34.8116Z" stroke="#FDFBF7" strokeWidth="4"/>
												<path d="M47.8224 37.1006L30.8555 48.0489C29.1919 49.1224 27 47.9281 27 45.9483L27 24.0517C27 22.0719 29.1919 20.8776 30.8555 21.9511L47.8224 32.8994C49.3484 33.8841 49.3484 36.1159 47.8224 37.1006Z" fill="#FDFBF7" stroke="#FDFBF7"/>
											</svg>
										</button>
										<RichText
											tagName="p"
											placeholder={__('Description', NAMESPACE)}
											value={description}
											onChange={handleChildrenDescription}
										/>
								</div>
						</div>
				</div>
		</div>
	);
};
