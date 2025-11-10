import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity((prev) => Math.min(1, prev - 1));
    const increment = () => setQuantity((prev) => prev + 1);
    const handleAddToCart = () =>
        console.log(`Added ${product.title}(s) to card`);

    return (
        <div className="product-card">
            <img className="product-img" src={product.img} alt="Product" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <div className="controls-container">
                <button onClick={decrement}>-</button>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                />
                <button onClick={increment}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard;
