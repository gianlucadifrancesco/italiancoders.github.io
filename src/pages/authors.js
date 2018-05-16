import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';

export default class AuthorsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allFile.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'childMarkdownRemark.frontmatter.title');
          return (
            <div>
              <h3 style={{ color: 'black' }}>{title}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export const pageQuery = graphql`
query AuthorsQuery {
  allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, sourceInstanceName: {eq: "authors"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
          }
        }
      }
    }
  }
}
`;
