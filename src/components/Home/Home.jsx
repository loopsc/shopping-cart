import abe from "../../assets/back-home-to-mama-ramonu-translated-saku39sann-mejiro-v0-hdsh3cq3m5yf1.jpg";
import styles from "./Home.module.css";
import { Link } from "react-router";

const Home = () => {
    return (
        <main className={styles.page}>
            <section className={styles.homeSection}>
                <div className={styles.heroContent}>
                    <h1>Discover Products You’ll Love</h1>
                    <p>
                        Hand-picked deals and trending items, all in one place.
                    </p>
                    <Link
                        data-testid="shop-link"
                        className={styles.navLink}
                        to="shop"
                    >
                        <button className={styles.cta}>Shop Now</button>
                    </Link>
                </div>
                <img
                    src={abe}
                    alt="Shopping promotion"
                    className={styles.heroImage}
                />
            </section>

            <section className={styles.categoriesSection}>
                <h2 className={styles.sectionTitle}>Shop by Category</h2>
                <div className={styles.categories}>
                    <div className={styles.categoryCard}>Electronics</div>
                    <div className={styles.categoryCard}>Fashion</div>
                    <div className={styles.categoryCard}>Home & Living</div>
                    <div className={styles.categoryCard}>Sports</div>
                </div>
            </section>

            <section className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>Featured Products</h2>
                <div className={styles.featuredPlaceholder}>
                    Featured products go here
                </div>
            </section>

        </main>
    );
};

export default Home;
