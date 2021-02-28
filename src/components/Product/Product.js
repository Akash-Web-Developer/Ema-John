import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const product = (props) => {
    // console.log(props);
    const {name, img, price,stock,seller} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <div className="">
                    <div>
                        <h5>${price}</h5>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
                    </div>
                    <div>
                        <h3>Features</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;