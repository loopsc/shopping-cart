import { useContext, useState } from "react";
// import { useOutletContext } from "react-router";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../contexts";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    // const { addToCart } = useOutletContext();
    const { addToCart } = useContext(CartContext)

    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
    const increment = () => setQuantity((prev) => prev + 1);

    console.log(product);

    return (
        <div className={styles.productCard}>
            <img
                data-testid="test-image"
                className={styles.productImg}
                src={product.img}
                alt="Product"
            />
            <h3
                data-testid="test-title"
                className={styles.productTitle}
                data-full={product.title}
            >
                {product.title}
            </h3>
            <p data-testid="test-price" className={styles.productPrice}>
                ${product.price}
            </p>

            <div className={styles.controlsContainer}>
                <div className={styles.quantityControls}>
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
