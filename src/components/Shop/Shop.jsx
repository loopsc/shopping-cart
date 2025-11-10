import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
    const [shopItems, setShopItems] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [renderItems, setRenderItems] = useState([]);

    useEffect(() => {
        async function fetchAllItems() {
            setLoading(true);
            setError(null);
            try {
                const items = Array.from({ length: 10 }).map(async () => {
                    let itemId = Math.floor(Math.random() * 20) + 1;
                    while (renderItems.includes(itemId)) {
                        itemId = Math.floor(Math.random() * 20) + 1;
                    }
                    setRenderItems((prev) => [...prev, itemId])
                    const response = await fetch(
                        `https://fakestoreapi.com/products/${itemId}`
                    );
                    if (!response.ok)
                        throw new Error(`Response status: ${response.status}`);
                    const data = await response.json();

                    return {
                        id: data.id,
                        name: data.title,
                        price: data.price,
                        img: data.image,
                    };
                });

                const results = await Promise.all(items);
                setShopItems(results);
            } catch (err) {
                setError(err.message || "A network error was encountered");
            } finally {
                setLoading(false);
            }
        }

        fetchAllItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        shopItems && (
            <div>
                <h1>Shop</h1>
                <section>
                    {shopItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </div>
        )
    );
};

export default Shop;
