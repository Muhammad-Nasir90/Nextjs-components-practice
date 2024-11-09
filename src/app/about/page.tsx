// components/About.js
import React from 'react';
import '@/app/styles/style.css'; // Import the custom CSS file

export default async function About() {
  // Simulate loading delay (5 seconds)
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="about">
    <div className="about-container">
      <h1 className="about-heading">About This Website</h1>
      <p className="about-description">
        Welcome to my website! Here’s a brief summary of what you can find:
      </p>
      <ul className="about-list">
        <li>✅ <strong>Component Architecture:</strong> Built with a modular approach for easy maintenance.</li>
        <li>✅ <strong>Loading State Management:</strong> Enhances user experience during data fetching.</li>
        <li>✅ <strong>404 Not Found Statement:</strong> Custom page for non-existent routes.</li>
        <li>✅ <strong>User-Friendly Design:</strong> Focused on usability and accessibility.</li>
      </ul>
      <p className="about-footer">
        Thank you for visiting! I hope you find the content valuable.
      </p>
    </div>
    </div>
  );
}
