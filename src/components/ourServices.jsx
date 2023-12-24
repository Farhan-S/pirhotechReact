import React from "react";
import '../css/ourServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode, faChartSimple } from '@fortawesome/free-solid-svg-icons';
// import {  faSearchengin, faAndroid, faApple } from '@fortawesome/free-regular-svg-icons';
import { faSearchengin, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';


function OurServices() {
  return (
    <div className="serviceMain">
      <h1>Our Services</h1>
      <section className="container serContainer">
        <section className="card__container">
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">

                <FontAwesomeIcon icon={faPaintBrush} />

              </div>
              <div className="card__content">
                <h3>Designing</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="card__content">
                <h3>Develoment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faSearchengin} />

              </div>
              <div className="card__content">
                <h3>SEO</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="card__bx" >
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faChartSimple} />
              </div>
              <div className="card__content">
                <h3>Digital Marketing</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faAndroid} />
              </div>
              <div className="card__content">
                <h3>Android App Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faApple} />
              </div>
              <div className="card__content">
                <h3>IOS App Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

        </section>

      </section>
    </div>

  );
}

export default OurServices;