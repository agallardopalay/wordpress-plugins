import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	SelectControl,
	TextControl,
	TextareaControl
} from '@wordpress/components';
import Frame from './frame';
import './editor.scss';

const NAMESPACE = 'custom-video-lightbox';
export default function Edit({ attributes, setAttributes }) {
	const {
		layout,
		downloadedMedia,
		videoType,
		videoId,
		subTitle,
		title,
		description
	} = attributes;

	const handleSubtitle = (inputValue) => {
		setAttributes({subTitle: inputValue});
	}
	const handleTitle = (inputValue) => {
		setAttributes({title: inputValue});
	}
	const handleDescription = (inputValue) => {
		setAttributes({description: inputValue});
	}
  // Generate block's class name
  const blockProps = useBlockProps();

	return (
			<div {...blockProps}>
				<InspectorControls>
					<PanelBody
						title={__('Video lightbox Settings', NAMESPACE)}
						initialOpen={true}
					>
						<PanelRow>
							<RadioControl
								className='blocks-base-control__layout--radio'
								label={__('Image Display', NAMESPACE)}
								help={__('Select a side for the Image.', NAMESPACE)}
								selected={ layout }
								options={ [
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
								] }
								onChange={ ( option ) => setAttributes({ layout: option })}
							/>
						</PanelRow>
						<hr></hr>
						<PanelRow>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({
										downloadedMedia: {
											title: media.title,
											filename: media.filename,
											url: media.url,
											updated: ''
										}
									})
								}}
								multiple={false}
								render={({ open }) => (
									<>
										<button onClick={open}>
											{ downloadedMedia === null
													? '+ Upload file'
													: 'x Upload new file'
											}
										</button>
										<p>
											{ downloadedMedia === null
													? ''
													: `( ${downloadedMedia?.title} )`
											}
										</p>
									</>
								)}
							/>
						</PanelRow>
						<hr></hr>
						<PanelRow>
							<SelectControl
								label={__('Video Providers', NAMESPACE)}
								value={ videoType }
								options={ [
									{ label: 'Youtube', value: 'youtube' },
									{ label: 'Vimeo', value: 'vimeo' },
								] }
								onChange={ ( option ) => setAttributes({ videoType: option, videoId: '' })}
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="blocks-base-control__input"
								label='Video ID'
								value={videoId}
								onChange={( inputValue ) => setAttributes({ videoId: inputValue })}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="blocks-base-control__input"
								label={__('Subtitle', NAMESPACE)}
								value={subTitle}
								onChange={( inputValue ) => setAttributes({ subTitle: inputValue })}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								className="blocks-base-control__input"
								label={__('Title', NAMESPACE)}
								value={title}
								onChange={( inputValue ) => setAttributes({ title: inputValue })}
							/>
						</PanelRow>
						<PanelRow>
							<TextareaControl
								label={__('Description', NAMESPACE)}
								help={__('Insert a block summary.', NAMESPACE)}
								value={ description }
								onChange={ ( textValue ) => setAttributes({ description: textValue })}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<Frame
					modalInfo={attributes}
					handleChildrenSubtitle={handleSubtitle}
					handleChildrenTitle={handleTitle}
					handleChildrenDescription={handleDescription}
				/>
			</div>
	)
}
