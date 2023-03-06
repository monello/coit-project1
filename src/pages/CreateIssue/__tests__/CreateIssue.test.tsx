import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateIssue } from "../CreateIssue";
import { BrowserRouter } from "react-router-dom";

describe("CreateIssue component", () => {
    it("renders correctly", () => {
        // ARRANGE

        // ACT
        render(
            <BrowserRouter>
                <CreateIssue />
            </BrowserRouter>
        );

        // ASSERT
        expect(
            screen.getByRole("button", { name: "Create Ticket" })
        ).toBeDisabled();
    });
});
