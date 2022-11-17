import React from 'react';
import Project from '../Project';
export default function Portfolio() {
  const projects = [
    { title: 'project1', url: 'http://url1.com', image: 'image1.png' },
    { title: 'project2', url: 'http://url2.com', image: 'image2.png' },
  ];
  return (
    <div>
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            url={project.url}
            image={project.image}
          />
        );
      })}
    </div>
  );
}
