import "./Cart.css";
import { useOutletContext } from "react-router";

const Cart = () => {
    const { cart } = useOutletContext();

    const total = cart.reduce((total, curr) => total + (curr.price * curr.quantity),0)

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
                    <div className="cart-item">
                        <img
                            className="item-image"
                            src={item.img}
                            alt="item image"
                        />
                        <p className="item-title">{item.title}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                ))}
            </div>
            <div className="total-price">
                <p className="total-text">${total}</p>
            </div>
        </div>
    );
};

export default Cart;
