import { describe, test, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

let context;

beforeEach(() => {
    context = {
        cart: [
            {
                id: 1,
                title: "Test Product",
                price: 10,
                quantity: 2,
                img: "",
            },
        ],
        setCart: vi.fn(),
        removeFromCart: vi.fn(),
    };

    render(
        <MemoryRouter>
            <Routes>
                <Route element={<Outlet context={context} />}>
                    <Route path="/" element={<Cart />} />
                </Route>
            </Routes>
        </MemoryRouter>
    );
});

describe("Cart component", () => {
    test("Item appears in cart", () => {
        expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    test("Removed item button calls", async () => {
        const user = userEvent.setup();
        const button = screen.getByTestId("remove-item-button");

        await user.click(button);

        expect(context.removeFromCart).toHaveBeenCalled();
    });

    // Total price is accurate
    test("Total price is accurate", () => {
        const totalPrice = screen.getByTestId("total-price");

        expect(totalPrice.textContent).toBe("$20.00");
    });
});
