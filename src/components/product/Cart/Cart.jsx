import React, { useState } from 'react';

const Cart = () => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>${item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;