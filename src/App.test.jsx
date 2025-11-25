import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router";

describe("App component", () => {
    test("Renders the navbar component", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const navElement = screen.getByRole("navigation");
        expect(navElement).toBeInTheDocument();
    });

    test("Loads the correct outlet", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const shopTab = screen.getByTestId("shop-link");
        await user.click(shopTab);

        expect(screen.getByText("Shop")).toBeInTheDocument();
    });
});
