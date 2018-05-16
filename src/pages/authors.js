import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import AuthorsList from '../components/AuthorsPage/AuthorsList';

export default function AuthorsPage(props) {
  const authors = get(props, 'data.allFile.edges');
  return (
    <div>
      <Helmet title="Gli autori - ItalianCoders" />
      <AuthorsList authors={authors} />
    </div>
  );
}

export const pageQuery = graphql`
query AuthorsQuery {
  allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, sourceInstanceName: {eq: "authors"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            name
            gravatarMail
            bio
            github
            website
          }
        }
      }
    }
  }
}
`;
