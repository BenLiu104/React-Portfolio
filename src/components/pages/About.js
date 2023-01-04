import React from 'react';
import avatar from '../../images/avatar.jpeg';
export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-5 pic-container">
          <img
            src={avatar}
            alt="profile_picture"
            className="rounded-circle profile-picture "
          />
        </div>
        <section className="col-lg-8 col-md-7">
          <h2 className="text-center intro-heading">About Me</h2>
          <p className="introduction">
            Full stack web developer leveraging with IT background. Recently
            earned a certificate in full stack development from the University
            of Toronto, with newly developed skills in JavaScript, CSS,
            React.js, responsive web design, RESTful API and GraphQL. With each
            project, my aim is to engage my target audiences for a great user
            experience. I applied aspects of UX and agile development in recent
            projects. I worked on a team of Three to develop a single-page MERN
            app that helps customers to order and pay the burger meal. I have
            well prepared myself get into the web developing journey. And I’m
            excited to leverage my skills as part of a quality-driven team to
            create better experiences on the web.
          </p>
        </section>
      </div>
    </div>
  );
}
