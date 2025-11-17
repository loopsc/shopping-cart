import abe from "../../assets/back-home-to-mama-ramonu-translated-saku39sann-mejiro-v0-hdsh3cq3m5yf1.jpg";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <section className={styles.homeSection}>
                <img src={abe} alt="Umazing" />
            </section>
        </div>
    );
};

export default Home;
