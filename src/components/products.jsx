import React, { useState } from "react";
import productList from "../js/productsList";
import "../css/productsCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faDownload } from '@fortawesome/free-solid-svg-icons';

function ProductsCard(props) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="productItem col-md-3">
            <a
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    setShowPopup(true);
                }}
            >
                <img src={props.imgUrl} alt="appLogo" />
                <h3>{props.name}</h3>
            </a>
            {showPopup && <Popup appLink={props.appLink} name={props.name} onClose={() => setShowPopup(false)} />}
        </div>
    );
}

function createCards(productList) {
    return (
        <ProductsCard
            key={productList.id}
            name={productList.name}
            imgUrl={productList.imgUrl}
            appLink={productList.appLink}
        />
    );
}

function Popup({ onClose, name,appLink }) {

    const handleDownload = (link) => {
        window.location.href = link;
      };

    return (
        <div className="popup">
            <div className="popup-content">
                <h5>You want to download <span className="appName">{name}</span></h5>
                <p>Choose your platform:</p>
                <div className="btnBox">
                    <button className="androidDbtn" onClick={() => handleDownload(appLink)}>
                        <FontAwesomeIcon icon={faDownload} /> Android App Download
                    </button>
                    <button className="iosDbtn" onClick={() => alert("iOS download clicked")}>
                        <FontAwesomeIcon icon={faDownload} /> iOS App Download
                    </button>
                </div>

                <button className="closeBtn" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </div>
    );
}

function Products() {
    return (
        <div className="productSec" id="products">
            <div className="productMid" >

                <div className="productRow1 row">
                    {productList.map(createCards)}
                </div>

            </div>
        </div>
    );
}

export default Products;