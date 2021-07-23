import { act, renderHook } from "@testing-library/react-hooks";

import UserService from "services/UserService";
import useUser from "hooks/useUser";

jest.mock("services/UserService");

describe("useUser hook", () => {
  describe("fetchUsers", () => {
    beforeEach(() => {
      UserService.getUsers.mockResolvedValue({
        content: [
          {
            name: "user1",
            id: 1,
          },
          {
            name: "user2",
            id: 2,
          },
        ],
        total: 10,
      });
    });

    it("should load the users", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useUser({ size: 10 }),
      );
      act(() => {
        result.current.fetchUsers();
      });
      await waitForNextUpdate();
      expect(result.current.users.length).toBe(2);
    });

    it("should set loading to true when the fetch is not resolved yet", async () => {
      const { result } = renderHook(() => useUser({ size: 10 }));
      act(() => {
        result.current.fetchUsers();
      });
      expect(result.current.loading).toBe(true);
    });

    it("should set loading to false when the fetch is resolved", async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useUser({ size: 10 }),
      );
      act(() => {
        result.current.fetchUsers();
      });
      await waitForNextUpdate();
      expect(result.current.loading).toBe(false);
    });

    it("should not throw error when fetch is not resolved by an error", async () => {
      UserService.getUsers.mockRejectedValue(
        new Error("Error inside UserService"),
      );
      const { result, waitForNextUpdate } = renderHook(() =>
        useUser({ size: 10 }),
      );
      try {
        result.current.fetchUsers();
        await waitForNextUpdate();
        expect(result.current.users.length).toBe(0);
      } catch (e) {
        throw new Error("it should not reach here");
      }
    });
  });
});
