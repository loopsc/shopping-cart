import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import ProductCard from "./ProductCard";
import { MemoryRouter, Route, Routes, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

let ctx;
const dummyItem = {
    id: 1,
    title: "Test Product",
    price: 10,
    img: "",
};

beforeEach(() => {
    ctx = {
        addToCart: vi.fn(),
    };

    render(
        <MemoryRouter>
            <Routes>
                <Route element={<Outlet context={ctx} />}>
                    <Route
                        path="/"
                        element={<ProductCard product={dummyItem} />}
                    />
                </Route>
            </Routes>
        </MemoryRouter>
    );
});

describe("ProductCard component", () => {
    test("Product card contains image, title, price", () => {
        const image = screen.getByTestId("test-image");
        const title = screen.getByTestId("test-title");
        const price = screen.getByTestId("test-price");

        expect(image).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    });

    test("Input display increment amount", async () => {
        const user = userEvent.setup();
        const input = screen.getByRole("spinbutton");
        const increment = screen.getByText("+");
        const decrement = screen.getByText("-");

        expect(input.value).toBe("1");
        await user.click(increment);
        expect(input.value).toBe("2");
        await user.click(decrement);
        expect(input.value).toBe("1")
    })
});
