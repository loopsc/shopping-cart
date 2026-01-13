import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = ({ cart = [] }) => {
    let itemsInCart = 0;
    if (cart.length > 0) {
        itemsInCart = cart.reduce((total, curr) => total + curr.quantity, 0);
    }

    return (
        <nav className={styles.navbar}>
            <Link data-testid="home-link" className={styles.navLink} to="/">
                Home
            </Link>
            <Link data-testid="shop-link" className={styles.navLink} to="shop">
                Shop
            </Link>
            <Link data-testid="cart-link" className={styles.navLink} to="cart">
                Cart
                <p className={styles.cartItems}>{itemsInCart}</p>
            </Link>
        </nav>
    );
};

export default Navbar;
