import React from 'react';
import get from 'lodash/get';

import AuthorItem from './AuthorItem';

export default function AuthorsList({ authors }) {
  return (
    <div className="authorsGrid">
      { authors.map(({ node }) => {
        const key = get(node, 'childMarkdownRemark.frontmatter.gravatarMail');
        return (
          <AuthorItem
            key={key}
            author={node}
          />
        );
      })}
    </div>
  );
}
