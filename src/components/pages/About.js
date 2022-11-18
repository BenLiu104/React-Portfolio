import React from 'react';
import avatar from '../../images/avatar.jpeg';
export default function About() {
  return (
    <div className="px-2">
      <h2 className="text-center">About Me</h2>
      <img
        src={avatar}
        alt="profile_picture"
        className="rounded-circle text-center"
        width="30%"
      />
      <section>
        <p>
          I am a new full stack web developer graduated from University of
          Toronto School. After 12-week intensive bootcamp training, I learnt so
          many useful concept and skills on web development. On the other hand,
          because of my previous IT jobs experience, I can pick up the
          programming concept and skill quickly. Also it makes me easier to
          understand the front-end and back-end relationship. I have well
          prepared myself get into the web developing journey.
        </p>
      </section>
    </div>
  );
}
