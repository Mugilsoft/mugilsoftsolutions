import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the logo and brand name", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Mugil Soft Solutions")).toBeInTheDocument();
    expect(screen.getByText("Mugil")).toBeInTheDocument();
    expect(screen.getByText("Soft")).toBeInTheDocument();
    expect(screen.getByText("Solutions")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    for (const expected of ["/", "/about", "/services", "/blog", "/contact"]) {
      expect(hrefs).toContain(expected);
    }
  });

  it("renders a Get a Quote CTA", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Get a Quote").length).toBeGreaterThan(0);
  });

  it("opens and closes the mobile menu on toggle", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    expect(screen.getAllByText("Insights")).toHaveLength(1);

    await user.click(toggle);
    expect(screen.getAllByText("Insights")).toHaveLength(2);

    await user.click(toggle);
    expect(screen.getAllByText("Insights")).toHaveLength(1);
  });
});
