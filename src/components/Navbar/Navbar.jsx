import { Link } from "react-router";
import "./Navbar.css";

const Navbar = (props) => {
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
                <p className="cart-items">{props.cartItems}</p>
            </Link>
        </nav>
    );
};

export default Navbar;
