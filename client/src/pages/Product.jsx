import React, { useState, useEffect } from "react";
import products from "../assets/product";
import { useParams } from "react-router-dom";

function Product(){
   
    const {id} = useParams(); //get id from url!
    const [product, setProduct] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    

    useEffect(() =>{
        setLoading(true);
        setError(null); //clear any previous loading

        //simulate fetching an product from an API for now
        const fetchProduct = () => {
            return new Promise((resolve)=>{
                setTimeout(() =>{
                    const foundProduct = products.find(p => p.id === Number(id));
                    foundProduct ? resolve(foundProduct) : resolve(null)
                },500);
            })
        }
        fetchProduct().then(data => {
            if (data) {
            setProduct(data);
            setError(null);   
            } else {
            setError("Product not found.");
            setProduct(null);              
            }
        })
        .catch(err => {
            console.error("Error fetching product:", err);
            setError("Failed to load product data.");
        })
        .finally(() => {
            setLoading(false);
      });
    },[id]);

    if (isLoading) {
        return <div >Loading product...</div>;
    }

    if (error) {
        return <div >{error}</div>;
    }


    if (!product) {
        return <div c>No product data available.</div>;
    }
    const handleAddToCart = () => {
        alert(`Added "${product.name}" to cart! (ID: ${product.id})`);

    };

    return ( 
        <div className="product-detail-container">
            <div className="product-image-section">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
            </div>
            <div className="product-info-section">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart 🛒
                </button>
                <div className="ai-preview-placeholder">
                    <h3>AI Beauty Preview (Coming Soon!)</h3>
                    <p>Upload a selfie to virtually try on this product.</p>
                </div>
            </div>
        </div>
    );
}


export default Product;