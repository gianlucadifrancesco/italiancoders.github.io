import React from 'react';

import AuthorItem from './AuthorItem';

export default function AuthorsList({ authors }) {
  return (
    <div className="authorsGrid">
      { authors.map(({ node }) => <AuthorItem author={node} />)}
    </div>
  );
}
