import { useState } from "react";
import { useOutletContext } from "react-router";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useOutletContext();

    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
    const increment = () => setQuantity((prev) => prev + 1);

    return (
        <div className="product-card">
            <img className="product-img" src={product.img} alt="Product" />
            <h3 className="product-title" data-full={product.title}>
                {product.title}
            </h3>
            <p className="product-price">${product.price}</p>
            <div className="controls-container">
                <div className="quantity-controls">
                    <button onClick={decrement}>-</button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(Number(e.target.value) || 1)
                        }
                    />
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={() => addToCart(product, quantity)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
