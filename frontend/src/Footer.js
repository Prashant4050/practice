import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Created By</h4>
          <p>Prashant Malaviya</p>
          <p>Het Patel</p>
        </div>

        <div className="footer-section">
          <h4>Email Ids</h4>
          <p>malaviyaprashant4050@gmail.com</p>
          <p>hetpatell0305@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://instagram.com/prashant_malaviya_95" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" /> Prashant
          </a>
          <a href="https://github.com/prashant-malaviya" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> Prashant
          </a>
          <a href="https://instagram.com/hettt._03" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" /> Het
          </a>
          <a href="https://github.com/hettt0305" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> Het
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Flipy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
