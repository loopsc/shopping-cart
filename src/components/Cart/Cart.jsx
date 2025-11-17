import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { Trash2 } from "lucide-react";

const Cart = () => {
    const { cart, setCart, removeFromCart } = useOutletContext();

    const total = cart.reduce(
        (total, curr) => total + curr.price * curr.quantity,
        0
    );

    return (
        <div className={styles.container}>
            <ul className={styles.headers}>
                <li></li>
                <li>Title</li>
                <li>Price</li>
                <li>Quantity</li>
            </ul>

            <div className={styles.itemsContainer}>
                {cart.map((item) => (
                    <div className={styles.cartItem} key={item.id}>
                        <img
                            className={styles.itemImage}
                            src={item.img}
                            alt="item image"
                        />
                        <p className={styles.itemTitle}>{item.title}</p>
                        <p>${item.price}</p>

                        <div className={styles.quantityControls}>
                            <input
                                className={styles.cartQuantityInput}
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) =>
                                    setCart((prev) =>
                                        prev.map((cartItem) =>
                                            cartItem.id === item.id
                                                ? {
                                                      ...cartItem,
                                                      quantity: Number(
                                                          e.target.value
                                                      ),
                                                  }
                                                : cartItem
                                        )
                                    )
                                }
                            />

                            <button
                                className={styles.removeItemButton}
                                onClick={() => removeFromCart(item)}
                            >
                                <Trash2
                                    size={16}
                                    color="#ce0000"
                                    strokeWidth={1.5}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.totalPrice}>
                <p className={styles.totalText}>${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;
