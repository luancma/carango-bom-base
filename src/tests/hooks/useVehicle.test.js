import { act, renderHook } from "@testing-library/react-hooks";

import vehicleService from "services/VehicleService";
import useVehicle from "hooks/useVehicle";

jest.mock("services/VehicleService");

describe("useVehicle hook", () => {
  describe("fetchVehicles", () => {
    beforeEach(() => {
      vehicleService.getVehicles.mockResolvedValue({
        content: [
          {
            model: "Yaris",
            year: 2020,
            price: 100000,
            brand: {
              name: "Toyota",
            },
            id: 1,
          },
          {
            model: "Renegade",
            year: 2021,
            price: 120000,
            brand: {
              name: "Fiat",
            },
            id: 2,
          },
        ],
        total: 10,
      });
    });

    it("should load the vehicles", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useVehicle({ size: 10 })
      );

      act(() => {
        result.current.fetchVehicles();
      });

      await waitForNextUpdate();

      expect(result.current.vehicles.length).toBe(2);
    });

    it("should set loading to true when the fetch is not resolved yet", async () => {
      const { result } = renderHook(() => useVehicle({ size: 10 }));

      act(() => {
        result.current.fetchVehicles();
      });

      expect(result.current.loading).toBe(true);
    });

    it("should set loading to false when the fetch is resolved", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useVehicle({ size: 10 })
      );

      act(() => {
        result.current.fetchVehicles();
      });

      await waitForNextUpdate();

      expect(result.current.loading).toBe(false);
    });

    it("should not throw error when fetch is not resolved by an error", async () => {
      vehicleService.getVehicles.mockRejectedValue(
        new Error("Error inside vehicleService")
      );
      const { result, waitForNextUpdate } = renderHook(() =>
        useVehicle({ size: 10 })
      );

      try {
        result.current.fetchVehicles();
        await waitForNextUpdate();
        expect(result.current.vehicles.length).toBe(0);
      } catch (e) {
        throw new Error("it should not reach here");
      }
    });
  });
});
