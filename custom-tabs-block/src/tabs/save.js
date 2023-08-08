/**
 * Retrieves the translation of text.
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	AlignmentControl,
	BlockControls,
	BlockIcon,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, className, clientId }) {

	let activeTabIndex = 0;
	const tabBar = (tabs) => {
		return (
			tabs.sort((a, b) => a.index - b.index).map(tab => {
				return (
					<button role="tab"
                        aria-selected={tab.index == activeTabIndex}
                        aria-controls={tab.index}
                        id={`tab${tab.index}`}
                        tabindex={tab.index}
                        onClick={() => setActiveTab(tab.index)}
                        className={tab.index == activeTabIndex ? 'tab-bullet-active' : 'tab-bullet'}
                        >
                            <span className="custom-tab__content">
                                <RichText.Content
                                    tagName="span"
                                    className="custom-tab__text-label"
                                    value={tab.title}
                                />
                            </span>
                            <span className={tab.index == activeTabIndex ? 'custom-tab-indicator custom-tab-indicator--active' : 'custom-tab-indicator'}>
                                <span className="custom-tab-indicator__content custom-tab-indicator__content--underline"></span>
                            </span>
                            <span className="custom-tab__ripple"></span>
                    </button>
				)
			})
		)
	}

	const blockProps = useBlockProps.save();
	return (
		<div  {...blockProps} className="tab-wrap" data-tab-component>
			<div className={className} id={clientId}>
				<div className="custom-tab-bar" role="tablist">
					<div className="custom-tab-scroller">
						<div className="custom-tab-scroller__scroll-area">
							<div className="custom-tab-scroller__scroll-content">
								{tabBar(attributes.tabs)}
							</div>
						</div>
					</div>
				</div>
                <div id="innerBlocks">
				    <InnerBlocks.Content />
                </div>
			</div>
		</div>

	);
}
