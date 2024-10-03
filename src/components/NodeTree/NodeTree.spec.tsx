// NodeTree.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import NodeTree from "./NodeTree";

vi.mock("../NodeItem/NodeItem", () => ({
  __esModule: true,
  default: () => <div data-testid="node-item">NodeItem</div>,
}));
const mockFilteredData = {
  scopes: {
    address: {
      claim_type: "recursive",
      country: {
        claim_type: "value",
        examples: ["DE", "FR", "FRANCE"],
        openid: true,
      },
      desc_2:
        "End-User's preferred postal address. The value of the address member is a JSON structure containing some or all of the members",
      formatted: {
        claim_type: "value",
        desc_2:
          "Composed of address.street_address, address.postal_code and address.locality (with standard country formatting)",
        examples: [
          "3 rue Bellini 92800 Puteaux",
          "7 route de la Reine 92100 Boulogne",
        ],
        openid: true,
      },
      locality: {
        claim_type: "value",
        desc_2:
          "The fragment of the address, generally after the address.street_number and address.route before the address.region",
        examples: ["Puteaux"],
      },
      openid: true,
      postal_code: {
        claim_type: "value",
        desc_2: "The fragment of the address, generally before the city",
        examples: ["92800"],
        openid: true,
      },
      postal_code_locality: {
        claim_type: "value",
        desc_2:
          "Composed of address.postal_code and address.locality (with standard country formatting)",
        examples: ["92800 Puteaux"],
      },
    },
  },
};
describe("<NodeTree>", () => {
  beforeEach(() => {
    vi.mock("../../utils/useClaims", () => ({
      __esModule: true,
      default: () => ({
        isLoading: false,
        data: mockFilteredData,
      }),
    }));
  });

  it("renders the component", () => {
    render(<NodeTree />);
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it("renders NodeItem components", async () => {
    render(<NodeTree />);
    const nodeItems = await screen.findAllByTestId("node-item");
    expect(nodeItems.length).toBeGreaterThan(0);
  });

  it("handles search term input", async () => {
    render(<NodeTree />);
    const searchInput = screen.getByLabelText(/search/i);
    fireEvent.change(searchInput, { target: { value: "address" } });
    expect(searchInput).toHaveValue("address");
    const nodeItems = await screen.findAllByTestId("node-item");
    expect(nodeItems.length).toBeGreaterThan(0);
  });

  it("renders filtered NodeItem components based on search input", async () => {
    render(<NodeTree />);
    const searchInput = screen.getByLabelText(/search/i);
    fireEvent.change(searchInput, { target: { value: "address" } });
    expect(searchInput).toHaveValue("address");
    const nodeItems = await screen.findAllByTestId("node-item");
    expect(nodeItems.length).toBeGreaterThan(0);
  });

  it("displays no NodeItem components when search input does not match", async () => {
    render(<NodeTree />);
    const searchInput = screen.getByLabelText(/search/i);
    fireEvent.change(searchInput, { target: { value: "nonexistent" } });
    expect(searchInput).toHaveValue("nonexistent");
    const nodeItems = screen.queryAllByTestId("node-item");
    expect(nodeItems.length).toBe(0);
  });
});
