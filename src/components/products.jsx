import React from "react";
import productList from "../js/productsList";
import "../css/productsCard.css";

function ProductsCard(props) {
    return (
        <div className="productItem col-md-3">
            <a href={props.appLink}>
                <img src={props.imgUrl} alt="appLogo" />
                <h3>{props.name}</h3>
            </a>
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