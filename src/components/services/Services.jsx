import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services </h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__button " onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 6months of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Conduct user research.</p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Create wireframes and prototypes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design UI/UX .</p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborate within the team and ensure coordination.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Continuously improve design processes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 6 months of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creating and developing user interface (UI) designs.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Improving and optimizing user experience (UX) design.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Managing design processes by analyzing user needs and
                    behaviors.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Designing interactive and user-friendly interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Enhancing user experience using visual design elements (such
                    as color, typography, icons, etc.)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 6 months of experience. Creating visual
                communication designs (logos, posters, brochures, website
                graphics, etc.)
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing user interface (UI) designs
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creating or redesigning brand identity designs.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Generating prototypes and mockups.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Selecting color palettes and typography.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="bx bx-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Following and implementing visual trends.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
