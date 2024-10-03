import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";
describe("<Header>", () => {
  it("Should display a title ", () => {
    const title = "Mitrust react test";
    render(<Header title={title} />);

    const titleFirstHeading = screen.getByRole("heading", { level: 1 });
    expect(titleFirstHeading).toBeInTheDocument();
    expect(titleFirstHeading).toHaveTextContent(title);
  });
});
