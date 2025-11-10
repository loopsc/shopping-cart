import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";

const App = () => {
    const [cartItems, setCartItems] = useState(0);

    return (
        <div className="main">
            <Navbar cartItems={cartItems} />
            <div className="page-container">
                <Outlet context={{ cartItems, setCartItems }} />
            </div>
        </div>
    );
};

export default App;
