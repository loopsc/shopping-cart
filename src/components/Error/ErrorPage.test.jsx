import { describe, expect, test } from "vitest";
import ErrorPage from "./ErrorPage";
import { render} from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Error page", () => {
    test("Error page displays error text", () => {
        const {getByText} = render(
            <MemoryRouter>
                <ErrorPage />
            </MemoryRouter>
        )

        const errorText = getByText("You can go back to the home page by clicking here, though!")
        expect(errorText).toBeInTheDocument();
    })
})