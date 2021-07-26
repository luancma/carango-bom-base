import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardItem from "pages/Dashboard/DashboardItem";

describe("Testing DashboardItem", () => {
    it("Should test the props render", () => {
        const brandItem =  {
            brand: "Name",
            totalVehicle: 1,
            totalPrice: 15000,
          };

        render(<DashboardItem brandDetails={brandItem}/>)

        const brandName = screen.getByText("Name");
        const totalPrice = screen.getByText("15 000,00 BRL");
    
        expect(brandName).toBeInTheDocument(true);
        expect(totalPrice).toBeInTheDocument(true);
    })
})