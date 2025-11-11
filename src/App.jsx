import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";

const App = () => {
    const [cart, setCart] = useState([]);
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

    return (
        <div className="main">
            <Navbar cart={cart} />
            <div className="page-container">
                <Outlet context={{ cart, addToCart, removeFromCart, shopItems, setShopItems }} />
            </div>
        </div>
    );
};

export default App;
