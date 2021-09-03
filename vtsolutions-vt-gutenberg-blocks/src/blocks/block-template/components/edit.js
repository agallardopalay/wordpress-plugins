import Inspector from './inspector';

const { compose } = wp.compose;

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const {withSelect,} = wp.data;

const {Placeholder, Spinner} = wp.components;

const { addQueryArgs } = wp.url;

class LatestPostsBlock extends Component {

	constructor() {
		super( ...arguments );
		this.state = {
			loading: true,
			source_post_data: null
		}
	}

	componentDidMount() {
		this.stillMounted = true;

		this.setState( {
			source_post_data: [],
			loading: false
		} );
	}

	componentWillUnmount() {
		this.stillMounted = false;
	}

	render() {
		const {
			attributes,
			setAttributes,
			latestPosts,
		} = this.props;

		// Check if there are posts
		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		if ( !hasPosts || attributes.template === 'source' && this.state.loading ) {
			return (
				<Fragment>
					<Inspector
						{ ...{ setAttributes, ...this.props } }
					/>
					<Placeholder
						icon="admin-post"
						label={ __( 'Loading Template', 'vt' ) }
					>
						<Spinner />
					</Placeholder>
				</Fragment>
			);
		}

		return (
			<Fragment>
				<Inspector
					{ ...{ setAttributes, ...this.props } }
				/>
				{ attributes.template !== 'source' &&
					<section>
						<div>Template Block Section <b>{attributes.template}</b></div>
					</section>
				}

				{ attributes.template === 'source' &&
					<section>
						<div>Template Block Section <b>{attributes.template}</b></div>
					</section>
				}

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( () => {
		return {
			latestPosts: [{}]
		};
	} ),
] )( LatestPostsBlock );
