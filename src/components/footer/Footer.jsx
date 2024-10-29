import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yusuf Emre</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/yusufemresehirlii/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yusuf-emre-%C5%9Fehirli-a52630303/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/YusufEmreSehirli"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169;Yusuf Emre Şehirli. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
