import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <Link className="nav-link" to="home">Home</Link>
            <Link className="nav-link" to="shop">Shop</Link>
            <Link className="nav-link" to="cart">Cart</Link>
        </nav>
    );
};

export default Navbar;
