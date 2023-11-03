import React from "react";
import ParticleBG from "./particleBG";
//import style from "../css/pricing.css";
import birdImg from "../images/bird_img.png";
import planeImg from "../images/plane_img.png";


function Pricing() {
    return (
        <div className="services">
            <ParticleBG />
            <div className="main-div">

                <div className="section over-hide">

                    <div className="container">

                        <div className="row full-height justify-content-center">

                            <div className="col-12 text-center align-self-center py-5">
                                <h1 >Basic</h1>
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <label for="pricing"><span className="block-diff">WordPress<span
                                        className="float-right">Custom</span></span></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5">WordPress</h4>
                                                    <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                    <p className="mb-4">per person</p>
                                                    <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4">Drina, Serbia</p>
                                                    <a href="#0" className="link">Choose Date</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src={planeImg} alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5">Custom</h4>
                                                    <h2 className="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
                                                    <p className="mb-4">per person</p>
                                                    <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4">Tara, Serbia</p>
                                                    <a href="#0" className="link">Choose Date</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-4">
                                                        <img src={birdImg} alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-5">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-7">
                                                        <img src="" alt="Web"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="section over-hide">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <h1 >Premium</h1>
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing-1" type="checkbox" id="pricing-1" name="pricing-1" />
                                    <label for="pricing-1"><span className="block-diff">WordPress<span
                                        className="float-right">Custom</span></span></label>
                                    <div className="card-3d-wrap-1 mx-auto">
                                        <div className="card-3d-wrapper-1">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5">WordPress</h4>
                                                    <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                    <p className="mb-4">per person</p>
                                                    <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4">Drina, Serbia</p>
                                                    <a href="#0" className="link">Choose Date</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://assets.codepen.io/1462889/kayak.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://assets.codepen.io/1462889/Stone.png" alt="Web"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="pricing-wrap">
                                                    <h4 className="mb-5">Custom</h4>
                                                    <h2 className="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
                                                    <p className="mb-4">per person</p>
                                                    <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                    <p className="mb-4">Tara, Serbia</p>
                                                    <a href="#0" className="link">Choose Date</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/grass.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-4">
                                                        <img src="https://assets.codepen.io/1462889/camp.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-5">
                                                        <img src="https://assets.codepen.io/1462889/Ivy.png" alt="Web"/>
                                                    </div>
                                                    <div className="img-wrap img-7">
                                                        <img src="https://assets.codepen.io/1462889/IvyRock.png" alt="Web"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <div className="section over-hide">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <h1 >Enterprise</h1>
                            <div className="section text-center py-5 py-md-0">
                                <input className="pricing-2" type="checkbox" id="pricing-2" name="pricing-2" />
                                <label for="pricing-2"><span className="block-diff">WordPress<span
                                    className="float-right">Custom</span></span></label>
                                <div className="card-3d-wrap-2 mx-auto">
                                    <div className="card-3d-wrapper-2">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">WordPress</h4>
                                                <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">Drina, Serbia</p>
                                                <a href="#0" className="link">Choose Date</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/sea.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-1">
                                                    <img src="https://assets.codepen.io/1462889/kayak.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-3">
                                                    <img src="https://assets.codepen.io/1462889/water.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-6">
                                                    <img src="https://assets.codepen.io/1462889/Stone.png" alt="Web"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">Custom</h4>
                                                <h2 className="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">Tara, Serbia</p>
                                                <a href="#0" className="link">Choose Date</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/grass.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-4">
                                                    <img src="https://assets.codepen.io/1462889/camp.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-5">
                                                    <img src="https://assets.codepen.io/1462889/Ivy.png" alt="Web"/>
                                                </div>
                                                <div className="img-wrap img-7">
                                                    <img src="https://assets.codepen.io/1462889/IvyRock.png" alt="Web"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Pricing;