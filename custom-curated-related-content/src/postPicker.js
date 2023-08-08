import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { TextControl, Button, Spinner, TextHighlight, NavigableMenu } from '@wordpress/components';
import { safeDecodeURI, filterURLForDisplay } from '@wordpress/url';
import { decodeEntities } from '@wordpress/html-entities';
import thumbnail from './public/images/default-thumbnail.jpeg';
const { select, useSelect } = wp.data;

const NAMESPACE = 'custom-curated-related-content';

/**
 * Post Picker
 *
 * @param {Object} props react props
 * @return {*} React JSX
 */
export const PostPicker = (props) => {
  const {
    onSelectPost,
    label = '',
    postTypes = ['posts', 'pages'],
    placeholder = '',
    selectedPost,
    allSelectedPosts,
  } = props;

  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleItemSelection(post) {
    onSelectPost(post);
    setSearchResults([]);
    setSearchString('');
  }

  /**
   * Using the keyword and the list of tags that are linked to the parent block
   * search for posts that match and return them to the autocomplete component.
   *
   * @param {string} keyword search query string
   */
  const handleSearchStringChange = (keyword) => {
    setSearchString(keyword);
    setIsLoading(true);

    Promise.all(postTypes?.map(postType => apiFetch({
      path: `/wp/v2/${postType}?search=${keyword}`,
    }))).then((results) => {
      const reducedSearchResults = results.reduce((result, final) => [...final, ...result], []);
      const filteredResults = reducedSearchResults.filter((post) => {
        // only return Posts/Pages that aren't previously selected
        const isFound = allSelectedPosts.some(element => {
          if (element.id === post.id) {
            return true;
          }

          return false;
        });

        return !isFound;
      });
      setSearchResults(filteredResults);
      setIsLoading(false);
    })
  };

  function handleSelection(item) {
    if (item === 0) {
      setSelectedItem(null);
    }

    setSelectedItem(item);
  }

  return (
    <div className={`${NAMESPACE}`}>
      <NavigableMenu onNavigate={handleSelection} orientation={'vertical'}>
        <TextControl
          label={label}
          value={searchString}
          onChange={handleSearchStringChange}
          placeholder={placeholder}
        />
        {searchString?.length ? (
          <ul
            className={`${NAMESPACE}-grid`}
            style={{
              marginTop: '0',
              marginBottom: '0',
              marginLeft: '0',
              paddingLeft: '0',
              listStyle: "none"
            }}
          >
            {isLoading && <Spinner />}
            {!isLoading && !searchResults.length && (
              <li className={`${NAMESPACE}-grid-item`}>
                <Button disabled>{__('No Items found', NAMESPACE)}</Button>
              </li>
            )}
            {searchResults?.map((post, index) => {
              if (!post?.title?.rendered?.length) {
                return null;
              }

              return (
                <li key={post.id} className={`${NAMESPACE}-grid-item`} style={{
                  marginBottom: "0"
                }}>
                  <SearchItem
                    onClick={() => handleItemSelection(post)}
                    searchTerm={searchString}
                    suggestion={post}
                    isSelected={selectedItem === index + 1}
                  />
                </li>
              );
            })}
          </ul>
        ) : null}
      </NavigableMenu>
    </div>
  );
};

export function SelectedPostsBlock(props) {
  const { posts, handleRemoveItem } = props;

  const allPosts = posts.map(post => {
    const uniqueId = `${post.slug}-preview`;
    
    return (
      <>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <SearchItem
            suggestion={post}
            onClick={null}
            id={uniqueId}
          />
          <button
            onClick={() => { handleRemoveItem(post) }}
          >
            Remove
          </button>
        </div>
      </>
    )
  });

  return allPosts;
}

export function SelectedPostPreview(props) {

  const {
    post,
    hidden = false,
    displayThumbnail = true,
    displayAuthorInfo = true,
  } = props;

  // Dynamically load the post
  const thePost = useSelect((select) => {
    return select('core').getEntityRecord('postType', post.type, post.id);
  }, [post.type, post.id]);


  // Dynamically load all the categories
  const theTaxonomy = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category');
  });

  let theCategories;
  if (thePost?.categories) {
    if (Array.isArray(thePost.categories) && Array.isArray(theTaxonomy)) {
      theCategories = theTaxonomy.filter(category => {
        return thePost.categories.includes(category.id);
      })
    }
  }

  // Dynamically load author's data
  const theAuthor = useSelect((select) => {
    return select('core').getUser(thePost?.author);
  }, [thePost]);

  // Dynamically load the Featured Image
  const theMedia = useSelect((select) => {
    return select('core').getEntityRecord('postType', 'attachment', post.featured_media);
  }, [post.type, post.featured_media]);

  const mediaSrc = theMedia?.media_details?.sizes?.medium?.source_url || thumbnail;
  const mediaAlt = theMedia?.alt_text || theMedia?.title?.rendered || ' Thumbnail';

  return (
    <>
      <article className={`custom-curated-related-content-article ${hidden ? 'hidden' : ''}`}>
        <div className='custom-curated-related-content-card'>
          {displayThumbnail && (
            <div className='custom-curated-related-content-thumbnail'>
              <img src={mediaSrc} alt={mediaAlt} className='custom-thumbnail-image'/>
            </div>
            )
          }
          <div className={displayThumbnail ? 'custom-curated-related-content-header' : 'custom-curated-related-content-header-full'}>
            <header>
              {theCategories &&
                <div className="custom-category">
                  <p>
                    {thePost?.type.toUpperCase()}
                    {theCategories?.map((category, index) => (
                      <span>{(index ? ', ' : ': ')} <a href={category.link} key={category.id}>{category.name}</a></span>
                    ))}
                  </p>
                </div>
              }
              <a href={thePost?.link} className='custom-linked-headline'>
                <h3 className="custom-headline">{thePost?.title?.rendered}</h3>
              </a>
              {(theAuthor && displayAuthorInfo) &&
                <div className="custom-byline">
                  <address className="custom-author">
                    <a rel="custom-author" href={theAuthor.link}>
                      {theAuthor.first_name} {theAuthor.last_name}
                    </a>
                  </address>
                </div>
              }
            </header>
          </div>
        </div>
      </article>
    </>
  )
}

function SearchItem(props) {
  const {
    suggestion,
    onClick,
    searchTerm = '',
    isSelected = false,
    id = ''
  } = props;

  // Dynamically load the post
  const thePost = useSelect((select) => {
    return select('core').getEntityRecord('postType', suggestion.type, suggestion.id);
  }, [suggestion.type, suggestion.id]);

  return (
    <Button
      id={id}
      onClick={onClick}
      className={`block-editor-link-control__search-item is-entity ${isSelected && 'is-selected'}`}
      style={{
        borderRadius: '0'
      }}
    >
      <span className="block-editor-link-control__search-item-header">
        <span className="block-editor-link-control__search-item-title">
          <TextHighlight
            text={decodeEntities(thePost?.title.rendered)}
            highlight={searchTerm}
          />
        </span>
        <span
          aria-hidden={true}
          className="block-editor-link-control__search-item-info"
        >
          {
            filterURLForDisplay(
              safeDecodeURI(thePost?.link)
            ) || ''
          }
        </span>
      </span>
      {thePost?.type && (
        <span className="block-editor-link-control__search-item-type">
          {thePost?.type === 'post_tag' ? 'tag' : thePost?.type}
        </span>
      )}
    </Button>
  );
}
