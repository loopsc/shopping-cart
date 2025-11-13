import "./Cart.css";
import { useOutletContext } from "react-router";
import { Trash2 } from "lucide-react";

const Cart = () => {
    const { cart, setCart, removeFromCart } = useOutletContext();

    const total = cart.reduce(
        (total, curr) => total + curr.price * curr.quantity,
        0
    );

    return (
        <div className="container">
            <ul className="headers">
                <li></li>
                <li>Title</li>
                <li>Price</li>
                <li>Quantity</li>
            </ul>

            <div className="items-container">
                {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img
                            className="item-image"
                            src={item.img}
                            alt="item image"
                        />
                        <p className="item-title">{item.title}</p>
                        <p>${item.price}</p>
                        <div className="quantity-controls">
                            <input
                                className="cart-quantity-input"
                                type="number"
                                value={item.quantity}
                                min="1"
                                // Change price function
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
                                className="remove-item-button"
                                onClick={() => {
                                    removeFromCart(item);
                                }}
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
            <div className="total-price">
                <p className="total-text">${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;
