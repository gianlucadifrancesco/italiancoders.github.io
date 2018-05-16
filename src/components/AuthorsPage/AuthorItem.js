import React from 'react';
import get from 'lodash/get';

export default function AuthorItem({ author }) {
  const title = get(author, 'childMarkdownRemark.frontmatter.title');
  return (
    <div className="authorItem">
      <p>My name is: {title}</p>
    </div>
  );
}
