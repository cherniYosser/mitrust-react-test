// NodeTree.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NodeTree from "./NodeTree";

// Mock the global fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

vi.mock("../NodeItem/NodeItem", () => ({
  __esModule: true,
  default: () => <div data-testid="node-item">NodeItem</div>,
}));

describe("<NodeTree>", () => {
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

  it("renders the component", () => {
    render(<NodeTree />); // Renders the NodeTree component
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument(); // Check if the search input exists
  });

  it("renders NodeItem components", async () => {
    render(<NodeTree />);

    // Assume NodeTree renders NodeItem components dynamically based on the data
    // We're checking if NodeItem components are rendered properly
    const nodeItems = await screen.findAllByTestId("node-item");
    expect(nodeItems.length).toBeGreaterThan(0); // Check that NodeItems exist
  });

  it("handles search term input", async () => {
    render(<NodeTree />);

    // Find the search input (assuming it's there)
    const searchInput = screen.getByLabelText(/search/i); // Assuming the input has a label with 'search'

    // Simulate user typing into the search input
    fireEvent.change(searchInput, { target: { value: "node1" } });

    // Check if the value has been updated (React handles state internally, so we don't need to check `vm` like in Vue)
    expect(searchInput).toBe("node1");

    // Add more logic if you want to check how the filtering impacts the UI
    const nodeItems = await screen.findAllByTestId("node-item");
    expect(nodeItems.length).toBeGreaterThan(0); // Check that filtered NodeItems exist
  });
});
