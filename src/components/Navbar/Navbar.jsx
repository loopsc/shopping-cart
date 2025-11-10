import { Link } from "react-router";
import "./Navbar.css";

const Navbar = ({ cart }) => {
    let itemsInCart = 0;
    if (cart.length > 0) {
        itemsInCart = cart.reduce((total, curr) => total + curr.quantity, 0);
    }

    return (
        <nav>
            <Link className="nav-link" to="home">
                Home
            </Link>
            <Link className="nav-link" to="shop">
                Shop
            </Link>
            <Link className="nav-link" to="cart">
                Cart
                <p className="cart-items">{itemsInCart}</p>
            </Link>
        </nav>
    );
};

export default Navbar;
