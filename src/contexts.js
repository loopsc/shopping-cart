import { createContext } from "react";

export const CartContext = createContext({
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {}
});

export const ShopContext = createContext({
    shopItems: [],
    setShopItems: () => {},
});
