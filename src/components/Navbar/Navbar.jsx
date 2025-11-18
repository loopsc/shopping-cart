import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = ({ cart = [] }) => {
    let itemsInCart = 0;
    if (cart.length > 0) {
        itemsInCart = cart.reduce((total, curr) => total + curr.quantity, 0);
    }

    return (
        <nav>
            <Link className={styles.navLink} to="home">
                Home
            </Link>
            <Link className={styles.navLink} to="shop">
                Shop
            </Link>
            <Link className={styles.navLink} to="cart">
                Cart
                <p className={styles.cartItems}>{itemsInCart}</p>
            </Link>
        </nav>
    );
};

export default Navbar;
