import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
 const allProducts = [
  {
    id: '1',
    name: 'Vibrant Red Lipstick',
    description: 'Achieve a bold and beautiful look with our long-lasting vibrant red lipstick. Smooth application and intense color payoff.',
    price: 24.99,
    imageUrl: "data:image/jpeg;base64,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",
  },
  {
    id: '2',
    name: 'Ocean Blue Hair Dye',
    description: 'Transform your look with this stunning, semi-permanent ocean blue hair dye. Vibrant color, easy to apply.',
    price: 18.50,
    imageUrl: 'https://via.placeholder.com/300x300?text=Blue+Hair+Dye',
  },
  {
    id: '3',
    name: 'Glow-Up Highlighter Palette',
    description: 'Illuminate your best features with this versatile highlighter palette. Includes four shimmering shades.',
    price: 35.00,
    imageUrl: 'https://via.placeholder.com/300x300?text=Highlighter',
  },
];
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
                    const foundProduct = allProducts.find(p => p.id === id);
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