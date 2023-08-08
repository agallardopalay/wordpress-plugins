import { __ } from '@wordpress/i18n';
import React, { useEffect } from "react";
import { InspectorControls, useBlockProps, URLInput } from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  ToggleControl,
  RangeControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { PostPicker, SelectedPostPreview, SelectedPostsBlock, SelectedPost } from './postPicker';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  // Generate block's class name
  const blockProps = useBlockProps({
    className: 'placeholder',
  });

  function handleViewMoreClick() {
    setAttributes({ displayViewMoreButton: false });
  }

  function handlePostSelection(post) {
    const prevSelectedPosts = [...attributes?.allSelectedPosts] || [];
    setAttributes({ selectedPost: post });
    setAttributes({ allSelectedPosts: [...prevSelectedPosts, post] });
  }

  function handleRemoveItem(post) {
    const prevSelectedPosts = [...attributes?.allSelectedPosts] || [];
    const filteredSelectedPosts = prevSelectedPosts.filter(item => item.id !== post.id);

    setAttributes({ allSelectedPosts: filteredSelectedPosts });
  }

  const NAMESPACE = 'custom-curated-related-content';

  const {
    selectedPost,
    allSelectedPosts,
    displayViewMoreButton,
    numberOfVisibleItems,
    displayThumbnail,
    displayAuthorInfo
  } = attributes;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  let counter = 0;

  // Display options in the content area
  return (
    <>
      <div {...blockProps}>
        <PostPicker
          label={__('Search Content:', NAMESPACE)}
          onSelectPost={handlePostSelection}
          selectedPost={selectedPost}
          allSelectedPosts={allSelectedPosts}
        />

        {loading === false ? (
          (!!allSelectedPosts &&
            <div className='custom-related-content-wrapper'>
              <h2 className='custom-related-content-headline'>
                {__('Related:', NAMESPACE)}
              </h2>
              {allSelectedPosts.map((post, index) => {
                counter = index;
                return (
                  <SelectedPostPreview
                    post={post}
                    hidden={displayViewMoreButton && index >= numberOfVisibleItems}
                    displayAuthorInfo={displayAuthorInfo}
                    displayThumbnail={displayThumbnail}
                  />
                )
              })}
              {displayViewMoreButton && (counter + 1) > numberOfVisibleItems && (
                <button className='custom-view-more-btn' onClick={() => {
                  handleViewMoreClick();
                }}>
                  <span>
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 21L6 15L1 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                      <path d="M8 21L13 15L8 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                      <path opacity="0.3" d="M25 1L25 29" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 6" />
                    </svg>
                  </span>
                  View More
                </button>
              )}
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}

        <InspectorControls>
          <PanelBody title="Related Content">
            <PanelRow>
              <ToggleControl
                label={__('Display Thumbnail', NAMESPACE)}
                checked={displayThumbnail}
                onChange={() =>
                  setAttributes({ displayThumbnail: !displayThumbnail })
                }
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label={__('Display Author Info', NAMESPACE)}
                checked={displayAuthorInfo}
                onChange={() =>
                  setAttributes({ displayAuthorInfo: !displayAuthorInfo })
                }
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label={__('Display View More Button', NAMESPACE)}
                checked={displayViewMoreButton}
                onChange={() =>
                  setAttributes({ displayViewMoreButton: !displayViewMoreButton })
                }
              />
            </PanelRow>
            {
              displayViewMoreButton && (
                <PanelRow>
                  <RangeControl
                    label={__('Number of Visible Related Posts', NAMESPACE)}
                    value={numberOfVisibleItems}
                    onChange={(value) =>
                      setAttributes({ numberOfVisibleItems: value })
                    }
                    min={1}
                    max={10}
                    required
                  />
                </PanelRow>
              )
            }
            <PostPicker
              label={__('Search Content:', NAMESPACE)}
              onSelectPost={handlePostSelection}
              selectedPost={selectedPost}
              allSelectedPosts={allSelectedPosts}
            />

            <label>{__('Currently Selected Content:', NAMESPACE)}</label>
            <SelectedPostsBlock
              posts={allSelectedPosts}
              handleRemoveItem={handleRemoveItem}
            />

          </PanelBody>
        </InspectorControls>
      </div>
    </>
  );
}
