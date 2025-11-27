import { describe, expect, test } from "vitest";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home Component", () => {
    test("Home text shows up on home page", () => {
        render(<Home />);

        expect(screen.getByRole("heading").textContent).toMatch("Home");
    });

    test("Image shows on home screen", () => {
        render(<Home />);

        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});
