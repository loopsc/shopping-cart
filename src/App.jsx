import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import { useState, Profiler } from "react";
import { ShopContext, CartContext } from "./contexts";

const App = () => {
    // Keep track of the items in the cart
    const [cart, setCart] = useState([]);
    // Keep track of the items generated in the shop page
    const [shopItems, setShopItems] = useState(null);

    const addToCart = (item, numToAdd) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) {
                return prev.map((p) =>
                    p.id === item.id
                        ? { ...p, quantity: p.quantity + numToAdd }
                        : p
                );
            }
            console.log([...prev, { ...item, quantity: numToAdd }]);
            return [...prev, { ...item, quantity: numToAdd }];
        });
    };

    const removeFromCart = (item) => {
        setCart((prev) => prev.filter((p) => p.id !== item.id));
    };

    const onRender = (
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
    ) => {
        console.log({
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
        });
    };

    return (
        <div className={styles.main}>
            <Navbar cart={cart} />
            <div className={styles.outlet}>
                <Profiler id="route-profiler" onRender={onRender}>
                    <ShopContext.Provider value={{ shopItems, setShopItems }}>
                        <CartContext.Provider
                            value={{ cart, setCart, addToCart, removeFromCart }}
                        >
                            <Outlet
                                // context={{
                                //     cart,
                                //     addToCart,
                                //     setCart,
                                //     removeFromCart,
                                //     shopItems,
                                //     setShopItems,
                                // }}
                            />
                        </CartContext.Provider>
                    </ShopContext.Provider>
                </Profiler>
            </div>
        </div>
    );
};

export default App;
