import React from 'react';

export default function Project({ title, url, image }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{url}</div>
      <div className="card-body">{image}</div>
    </div>
  );
}
