import React from "react";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Json Server</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Node JS</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
