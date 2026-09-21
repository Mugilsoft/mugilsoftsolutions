import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { useParams, notFound } from "next/navigation";
import BlogPost from "@/app/blog/[slug]/page";
import { blogPosts } from "@/data/blog-posts";

vi.mock("next/navigation", () => ({
  useParams: vi.fn(() => ({ slug: "ai-transforming-business" })),
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("BlogPost page", () => {
  beforeEach(() => {
    vi.mocked(useParams).mockReturnValue({ slug: "ai-transforming-business" });
    vi.mocked(notFound).mockClear();
  });

  it("renders the post for a known slug", () => {
    const post = blogPosts[0];
    render(<BlogPost />);

    expect(screen.getByRole("heading", { level: 1, name: post.title })).toBeInTheDocument();
    expect(screen.getByText(post.author)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "← Back to Blog" })).toBeInTheDocument();

    for (const tag of post.tags) {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }
  });

  it("renders the post content as HTML", () => {
    const { container } = render(<BlogPost />);
    expect(container.querySelector("article p")).not.toBeNull();
    expect(container.querySelector("article h2")).not.toBeNull();
  });

  it("renders every blog post from the data file", () => {
    for (const post of blogPosts) {
      vi.mocked(useParams).mockReturnValue({ slug: post.slug });
      render(<BlogPost />);
      expect(
        screen.getByRole("heading", { level: 1, name: post.title })
      ).toBeInTheDocument();
    }
  });

  it("calls notFound for an unknown slug", () => {
    vi.mocked(useParams).mockReturnValue({ slug: "not-a-real-post" });

    expect(() => render(<BlogPost />)).toThrow("NEXT_NOT_FOUND");
    expect(notFound).toHaveBeenCalled();
  });
});
