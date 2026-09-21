import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the main hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Building Intelligent Software.*Business Growth/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the hero call-to-action links", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Start Your Project" })).toHaveAttribute(
      "href",
      "/contact"
    );
    expect(screen.getByRole("link", { name: "Explore Services" })).toHaveAttribute(
      "href",
      "/services"
    );
  });

  it("renders the company stats", () => {
    render(<Home />);
    for (const label of ["Projects Delivered", "Happy Clients", "Years Experience", "Expert Engineers"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("renders the benefits section", () => {
    render(<Home />);
    expect(screen.getByText("Maximize ROI")).toBeInTheDocument();
    expect(screen.getByText("AI-Powered Solutions")).toBeInTheDocument();
    expect(screen.getByText("Cost Reduction")).toBeInTheDocument();
    expect(screen.getByText("Faster Delivery")).toBeInTheDocument();
    expect(screen.getByText("Scalable Architecture")).toBeInTheDocument();
  });

  it("renders the technologies list", () => {
    render(<Home />);
    for (const tech of ["React", "Node.js", "Next.js", "Kubernetes", "Python", "AWS"]) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  it("renders testimonials", () => {
    render(<Home />);
    expect(screen.getByText("Ramesh Kumar")).toBeInTheDocument();
    expect(screen.getByText("Priya Sharma")).toBeInTheDocument();
    expect(screen.getByText("Anand Varma")).toBeInTheDocument();
    expect(screen.getByText("Deepa Nair")).toBeInTheDocument();
  });

  it("renders the final CTA section", () => {
    render(<Home />);
    const touchLinks = screen.getAllByRole("link", { name: "Get in Touch" });
    expect(touchLinks.length).toBeGreaterThanOrEqual(2);
    for (const link of touchLinks) {
      expect(link).toHaveAttribute("href", "/contact");
    }
    expect(screen.getByRole("link", { name: "Read Our Blog" })).toHaveAttribute(
      "href",
      "/blog"
    );
  });

  it("renders blog posts section", () => {
    render(<Home />);
    expect(screen.getByText("Latest From Our Blog")).toBeInTheDocument();
  });
});
