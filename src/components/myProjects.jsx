import React from 'react';
import '../css/myProjects.css';
import ParticleBG from './particleBG';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



function MyProjectCard() {
    return (
        <div className="courses-container">
            <div className="course">
                <div className="course-preview">
                    <h6>Course</h6>
                    <h2>JavaScript Fundamentals</h2>
                    <a href="/">View all chapters <FontAwesomeIcon icon={faChevronRight} /></a>
                </div>
                <div className="course-info">
                    <div className="progress-container">
                        <div className="progress"></div>
                        <span className="progress-text">
                            6/9 Challenges
                        </span>
                    </div>
                    <h6>Chapter 4</h6>
                    <h2>Callbacks & Closures</h2>

                    <Link to="manage"><button className="ContinueBtn">Continue</button></Link>


                </div>
            </div>
        </div>
    );
}

function MyProjects() {


    return (
        <>
            <ParticleBG />
            <div className="allProjects">
                <div className="completed">
                    <h1>Completed Projects</h1>
                    <MyProjectCard />
                </div>
                <div className="running">
                <h1>Running Projects</h1>
                    <MyProjectCard />
                </div>
            </div>

        </>

    );
}

export default MyProjects;
