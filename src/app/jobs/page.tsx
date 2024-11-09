// pages/jobs.js
import React from 'react';
import '@/app/styles/style.css'; // Importing the CSS file

export default function Jobs() {
  return (

    <div className="jobs">
    <div>
    <div className="jobs-container">
      <h1>Job Openings</h1>

      <div className="job-card">
        <h2>Frontend Developer</h2>
        <p>Join our team to build amazing user interfaces and work with cutting-edge technologies.</p>
      </div>

      <div className="job-card">
        <h2>Backend Developer</h2>
        <p>We are looking for someone to build scalable backend services and APIs.</p>
      </div>

      <div className="job-card">
        <h2>UI/UX Designer</h2>
        <p>Help us design user-friendly, visually appealing interfaces for our web and mobile applications.</p>
      </div>
    </div>
    </div>
    </div>
  
  );
}
