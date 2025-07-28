// File: src/Footer.js

import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Fl<span className="highlight">i</span>py</h2>
          <p>Swapping wisdom through scriptures. Discover, share, and connect through the sacred texts of Hinduism.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/browse">Browse</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <a href="mailto:malaviyaprashant4050@gmail.com">malaviyaprashant4050@gmail.com</a>
          <a href="mailto:hetpatell0305@gmail.com">hetpatell0305@gmail.com</a>
          <div className="footer-socials">
            <a href="https://www.instagram.com/prashant_malaviya_95" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/Prashant4050" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Flipy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
