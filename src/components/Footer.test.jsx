import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the logo and tagline", () => {
    render(<Footer />);
    expect(screen.getByAltText("Mugil Soft Solutions")).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering businesses with cutting-edge software/i)
    ).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link").map((l) => l.getAttribute("href"));
    expect(links).toContain("/about");
    expect(links).toContain("/services");
    expect(links).toContain("/blog");
    expect(links).toContain("/contact");
  });

  it("renders contact details", () => {
    render(<Footer />);
    expect(screen.getByText("mugilsoftsolutions@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+91 9360054104")).toBeInTheDocument();
    expect(screen.getByText("Salem, Tamil Nadu, India")).toBeInTheDocument();
  });

  it("renders the current copyright year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Mugil Soft Solutions. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it("renders social links with accessible labels", () => {
    render(<Footer />);
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  });
});
