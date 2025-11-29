import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Shop from "./Shop";
import { MemoryRouter, Route, Routes, Outlet } from "react-router";

beforeEach(() => {
    vi.resetAllMocks();
});

describe("Shop component", () => {
    test("Refresh button exists", () => {
        const context = {
            shopItems: [
                { id: 1, title: "A", price: 10, img: "" },
                { id: 2, title: "B", price: 20, img: "" },
            ],
            setShopItems: vi.fn(),
        };

        render(
            <MemoryRouter>
                <Routes>
                    <Route element={<Outlet context={context} />}>
                        <Route path="/" element={<Shop />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const button = screen.getByTestId("test-refresh");
        expect(button).toBeInTheDocument();
    });

    test("Page is loading when promise is not resolved", () => {
        const context = {
            shopItems: null,
            setShopItems: vi.fn(),
        };

        window.fetch = vi.fn(() => {
            Promise(() => {});
        });

        render(
            <MemoryRouter>
                <Routes>
                    <Route element={<Outlet context={context} />}>
                        <Route path="/" element={<Shop />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("Page loads error when error fetching", async () => {
        const context = {
            shopItems: null,
            setShopItems: vi.fn(),
        };

        window.fetch = vi.fn(() =>
            Promise.reject(new Error("A network error was encountered"))
        );

        render(
            <MemoryRouter>
                <Routes>
                    <Route element={<Outlet context={context} />}>
                        <Route path="/" element={<Shop />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const errorMessage = await screen.findByText(/error/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
