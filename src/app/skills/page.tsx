// components/Skills.js
import React from 'react';
import '@/app/styles/style.css';  // Import the custom CSS file

export default function Skills() {
  return (
    <div className="skills-container background">
      <h1 className="skills-heading">My Skills</h1>

      <div className="skills-list">
        <div className="skill-category">
          <h2 className="category-title">Frontend Development</h2>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2 className="category-title">Backend Development</h2>
          <ul className="skills">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2 className="category-title">Design & Tools</h2>
          <ul className="skills">
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
