
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from 'react';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	RadioControl,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes: { heading, listType } , setAttributes }) {
	// Initializing the list HTML lag
	const ListTag = `${listType}`;
	const [listOfLinks, updateListOfLinks] = useState([]);

	useEffect( () => {
		/**
		 * Getting all the H2s when the page loads
		 * Only for Editor visualization purposes
		 */
		const contentHeadings = document.querySelectorAll('h2.wp-block-heading');
		if (contentHeadings.length) {
			contentHeadings.forEach(element => {
				updateListOfLinks((oldList) => [...oldList, {
					id: element.id,
					content: element.textContent
				}]);
			});
		}
	}, [] );

	return (
		<nav id="frbsf-toc" {...useBlockProps()}>
			<InspectorControls key="custom-table-of-content-setting">
				<PanelBody
					title={__('Table of Content Settings', 'custom-table-of-content')}
				>
					<PanelRow>
						<TextControl
							className="blocks-base-control__input"
							label={__('Heading', 'custom-table-of-content')}
							value={heading}
							onChange={( inputValue ) => setAttributes({ heading: inputValue })}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={__('List Type', 'custom-table-of-content')}
							help={__('Change the TOC list type', 'custom-table-of-content')}
							selected={ listType }
							options={ [
									{ label: 'OL', value: 'ol' },
									{ label: 'UL', value: 'ul' },
							] }
							onChange={ ( option ) => setAttributes({ listType: option })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="h2"
				placeholder={__('Content', 'custom-table-of-content')}
				className="custom-toc-heading"
				value={heading}
				onChange={( inputValue ) => setAttributes({ heading: inputValue })}
			/>
			{ listOfLinks &&
				<ListTag>
					{ listOfLinks.map((elementObj, index) =>
						<li key={`custom-toc__${index}`}>
							<a href={`#${elementObj.id}`} className="custom-toc-links">{elementObj.content}</a>
						</li>
					)}
				</ListTag>
			}
		</nav>
	);
}
