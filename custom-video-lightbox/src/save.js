import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		layout,
		downloadedMedia,
		videoType,
		videoId,
		subTitle,
		title,
		description,
	} = attributes;

	const rightAlignedClass = layout === 'right' ? 'right-aligned-image' : '';
	let videoUrl = '';
	if ( videoType === 'youtube') {
		videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
	} else {
		videoUrl = `https://vimeo.com/${videoId}`;
	}

	return (
		<div className={`custom-video-lightbox__container ${rightAlignedClass}`}>
			<div className={`custom-video-lightbox__image--cover ${rightAlignedClass}`}>
				<div className={`custom-video-lightbox__image--overlay ${rightAlignedClass}`}></div>
				<img src={ downloadedMedia?.url ? downloadedMedia?.url : 'https://www.frbsf.org/wp-content/uploads/homepage_xlg_CommitmenttoEquity.jpg' } alt={ downloadedMedia?.title ? downloadedMedia?.title : 'Youtube Video Title'} />
			</div>
			<div className={`custom-video-lightbox__overlay ${rightAlignedClass}`}>
				<div className="custom-video-lightbox__text">
						<RichText.Content tagName="h3" value={subTitle}/>
						<RichText.Content tagName="h2" value={title}/>
						<div className="custom-video-lightbox__icon--text">
								<button
										id={`openModalBtn${videoId}`}
										title="Close the video"
										className="custom-video-lightbox__play--video"
										aria-haspopup="dialog"
										aria-controls="modal"
										data-url={videoUrl}
								>
						  			<svg width="100%" height="100%" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M68.2708 34.8116C68.2708 52.9169 53.4631 67.6232 35.1608 67.6232C16.8585 67.6232 2.05078 52.9169 2.05078 34.8116C2.05078 16.7063 16.8585 2 35.1608 2C53.4631 2 68.2708 16.7063 68.2708 34.8116Z" stroke="#FDFBF7" strokeWidth="4"/>
											<path d="M47.8224 37.1006L30.8555 48.0489C29.1919 49.1224 27 47.9281 27 45.9483L27 24.0517C27 22.0719 29.1919 20.8776 30.8555 21.9511L47.8224 32.8994C49.3484 33.8841 49.3484 36.1159 47.8224 37.1006Z" fill="#FDFBF7" stroke="#FDFBF7"/>
										</svg>
								</button>
								<RichText.Content tagName="p" value={description}/>
						</div>

						{/* <div
							id="modal"
							role="dialog"
							aria-modal="true"
							aria-labelledby="modalTitle"
							aria-describedby="modalContent"
							className="custom-video-lightbox__modal--overlay"
						>
							<div role="document" className="custom-video-lightbox__modal" id="modalContent">
								<button id="closeModalBtn" aria-label="Close Modal" className="custom-video-lightbox__close--modal">
									<svg viewBox="0 0 20 20">
										<path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
									</svg>
								</button>
								<h2 id="modalTitle" className="hide-element">Modal Title</h2>
								<div className="custom-video-lightbox__player" data-id={videoId} data-provider={videoType}></div>
							</div>
						</div> */}
				</div>
			</div>
		</div>
	);
}
