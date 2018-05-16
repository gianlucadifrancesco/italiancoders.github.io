import React from 'react';
import get from 'lodash/get';

export default function AuthorItem({ author }) {
  const name = get(author, 'childMarkdownRemark.frontmatter.name');
  return (
    <div className="authorItem">
      <p>My name is: {name}</p>
    </div>
  );
}
