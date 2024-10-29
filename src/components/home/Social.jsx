import React from "react";

const Social = () => {
  return (
    // sosyal medyaları yaz
    <div className="home__social">
      <a
        href="https://www.instagram.com/yusufemresehirlii/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/yusuf-emre-%C5%9Fehirli-a52630303/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/YusufEmreSehirli"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
