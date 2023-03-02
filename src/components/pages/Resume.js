import React from 'react';
import CV from '../../files/Resume - Ben LIU v2.pdf';

export default function Resume() {
  return (
    <div>
      <div>
        Download my{' '}
        <a href={CV} download>
          Resume
        </a>
      </div>
      <section>
        <h3>Front-end proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>JQuery</li>
          <li>Responsive design</li>
        </ul>
      </section>

      <section>
        <h3>Back-end proficiencies</h3>
        <ul>
          <li>REST</li>
          <li>APIs</li>
          <li>Express.js</li>
          <li>MySQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>GraphSQL</li>
        </ul>
      </section>
    </div>
  );
}
