import axios from 'axios';
import React, { useEffect, useState } from 'react';
import s from './Product.module.scss';
import { BASE_URL } from '../../BASE_URL/BASE_URL.js';
import ProductCard from './ProductCard/ProductCard.jsx';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart/Cart';

const Product = ({ id, title, description, addToCart }) => {

    const navigate = useNavigate()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/product`)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <button onClick={() => {navigate("/cart")}}>Cart</button>
            <div className={s.product_content}>
                {product !== [] ? (
                    product.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} title={product.title} description={product.description} onClick={() => addToCart({ id, title, description })}/>
                        )
                    })
                ) : (
                    <h1>Продуктов нет</h1>
                )}
            </div>
        </div>
    );
};

export default Product;