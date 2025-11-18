import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter} from "react-router";
import "@testing-library/jest-dom";

describe("Navbar component", () => {
    it("renders a navbar", () => {
        render(
            <MemoryRouter>
                <Navbar cart={[]} />
            </MemoryRouter>
        );

        const navBar = screen.getByRole("navigation");
        expect(navBar).toBeInTheDocument();
    });

    it("contains number of items in cart", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Navbar cart={[{ quantity: 1 }, { quantity: 5 }]} />
            </MemoryRouter>
        );

        const count = getByText("6");
        expect(count).toBeInTheDocument();
    });

    it("renders the correct tabs", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByText("Cart")).toBeInTheDocument();
    });
});
