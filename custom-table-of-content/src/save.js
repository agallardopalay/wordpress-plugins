import { useBlockProps } from '@wordpress/block-editor';

/**
 * Saving the block html and attributes into the final markup,
 * which is then serialized by the block editor into `post_content`.
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes: { heading, listType } }) {
	// Moving attributes to Object string and send it to the front-end
	const datasets = JSON.stringify({
		heading,
		listType,
	});
	return (
		<nav 
			id="frbsf-toc"
			data-content={ datasets }
			{ ...useBlockProps.save() }
		/>
	);
}
