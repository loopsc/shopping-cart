import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
    test("contains number of items in cart", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Navbar cart={[{ quantity: 1 }, { quantity: 5 }]} />
            </MemoryRouter>
        );

        const count = getByText("6");
        expect(count).toBeInTheDocument();
    });

    test("renders the correct tabs", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByTestId("home-link")).toBeInTheDocument();
        expect(screen.getByTestId("shop-link")).toBeInTheDocument();
        expect(screen.getByTestId("cart-link")).toBeInTheDocument();
    });
});
