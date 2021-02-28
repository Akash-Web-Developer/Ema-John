import React from 'react';
import product from '../Product/Product';

const Cart = (props) => {
    
    const cart = props.cart;
    let total =0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total  = (total + product.price);
    }
    let shipping = 0;
    if (total>35){
        shipping = 12.99;
    }
    else if(total>15){
        shipping = 4.99;
    }
    let tax = (total / 10);
    const granTotal = (total + shipping + tax).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Order: {cart.length}</p>
            <h5>Price: {total}</h5>
            <p>Shipping Cost: {shipping}</p>
            <p>VAT 10%: {tax}</p>
            <h4>Total: {granTotal}</h4>

        </div>
    );
};

export default Cart;