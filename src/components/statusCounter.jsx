import React from "react";
import { useEffect } from "react";
import '../css/statusCounter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal,faRocket,faPaintBrush, faCode, faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


function StatusCounter() {

    useEffect(() => {
        // Get all elements with the class 'counter-value'
        const counterElements = document.querySelectorAll('.counter-value');

        counterElements.forEach((counterElement) => {
            const initialValue = parseInt(counterElement.textContent, 10);
            let startTimestamp = null;

            function animateCounter(timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = timestamp - startTimestamp;
                const duration = 3500; // Animation duration in milliseconds
                const increment = (initialValue * (progress / duration));

                if (progress < duration) {
                    counterElement.textContent = Math.ceil(increment);
                    requestAnimationFrame(animateCounter);
                } else {
                    counterElement.textContent = initialValue;
                }
            }

            requestAnimationFrame(animateCounter);
        });
    }, []);



    return (
        <div className="sCounterMain">
            <div className="sCounterMainMid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="top">
                            <h1>Our stats speak for us..</h1><span>
                                <div className="terminal-icon"><FontAwesomeIcon icon={faTerminal} /></div>
                            </span>

                            <p>In a very short time span, we have completed hundreds of orders and projects from companies from USA, Canada, Australia, Maldives, and Bangladesh.</p>
                            <a href="">View Projects</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"><FontAwesomeIcon icon={faRocket} /></div>
                                    <h3>Total Projects</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"><FontAwesomeIcon icon={faPaintBrush} /></div>
                                    <h3>Designing</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"> <FontAwesomeIcon icon={faCode} /></div>
                                    <h3>Developments</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"><FontAwesomeIcon icon={faSearchengin} /></div>
                                    <h3>SEO</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"><i className="bi bi-trophy-fill"></i></div>
                                    <h3>Achievements</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="counter">
                                    <div className="counter-icon"><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                    <h3>Clients</h3>
                                    <span className="counter-value">1000</span><span className="plus"><sup>+</sup></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusCounter;