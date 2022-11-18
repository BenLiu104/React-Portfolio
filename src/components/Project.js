import React from 'react';
import githubIcon from '../images/github-sign.png';

export default function Project({ title, url, image, Repo }) {
  const style = {
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
  };

  return (
    <div className="col p-4">
      <div className="card">
        <img
          src={image}
          className="card-img-top border"
          alt={title}
          style={style}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {/* <p className="card-text">Go to Application</p> */}
          <div className="text-end">
            <a href={url} className="card-text">
              <span>Go to Application</span>
            </a>
            <a href={Repo} className="card-text mx-3">
              <img src={githubIcon} alt="" width="20px"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
