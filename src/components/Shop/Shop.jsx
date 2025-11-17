import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";
import { RefreshCcw } from "lucide-react";

const Shop = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { shopItems, setShopItems } = useOutletContext();

    const generateUniqueIds = (count, max) => {
        const ids = new Set();
        while (ids.size < count) {
            ids.add(Math.floor(Math.random() * max) + 1);
        }
        return Array.from(ids);
    };

    const fetchShopItems = async () => {
        setLoading(true);
        setError(null);
        try {
            const itemIds = generateUniqueIds(12, 20);

            const items = await Promise.all(
                itemIds.map(async (itemId) => {
                    const response = await fetch(
                        `https://fakestoreapi.com/products/${itemId}`
                    );
                    if (!response.ok)
                        throw new Error(`Response status: ${response.status}`);
                    const data = await response.json();

                    return {
                        id: data.id,
                        title: data.title,
                        price: data.price,
                        img: data.image,
                    };
                })
            );

            setShopItems(items);
        } catch (err) {
            setError(err.message || "A network error was encountered");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!shopItems) fetchShopItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        shopItems && (
            <div>
                <div className={styles.shopHeadingGroup}>
                    <h1>Shop</h1>
                    <button
                        className={styles.refreshButton}
                        onClick={fetchShopItems}
                    >
                        <RefreshCcw />
                    </button>
                </div>
                <section className={styles.shopSection}>
                    {shopItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </div>
        )
    );
};

export default Shop;
