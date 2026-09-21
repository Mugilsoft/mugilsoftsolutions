import { describe, it, expect } from "vitest";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

describe("blogPosts data", () => {
  it("contains at least one post", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = blogPosts.map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("exposes every post through getBlogPost by slug", () => {
    for (const post of blogPosts) {
      expect(getBlogPost(post.slug)).toBe(post);
    }
  });

  it("returns undefined for an unknown slug", () => {
    expect(getBlogPost("does-not-exist")).toBeUndefined();
  });

  it("has the required fields on every post", () => {
    for (const post of blogPosts) {
      expect(typeof post.slug).toBe("string");
      expect(post.slug.length).toBeGreaterThan(0);
      expect(typeof post.title).toBe("string");
      expect(post.title.length).toBeGreaterThan(0);
      expect(typeof post.excerpt).toBe("string");
      expect(post.excerpt.length).toBeGreaterThan(0);
      expect(typeof post.author).toBe("string");
      expect(post.author.length).toBeGreaterThan(0);
      expect(typeof post.date).toBe("string");
      expect(typeof post.content).toBe("string");
      expect(post.content.length).toBeGreaterThan(0);
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.tags.length).toBeGreaterThan(0);
    }
  });

  it("has valid, sortable ISO dates on every post", () => {
    for (const post of blogPosts) {
      const timestamp = new Date(post.date).getTime();
      expect(Number.isNaN(timestamp)).toBe(false);
    }
  });

  it("has non-empty tag strings on every post", () => {
    for (const post of blogPosts) {
      for (const tag of post.tags) {
        expect(typeof tag).toBe("string");
        expect(tag.length).toBeGreaterThan(0);
      }
    }
  });

  it("contains HTML content that renders a heading", () => {
    for (const post of blogPosts) {
      expect(post.content).toMatch(/<h2>/);
      expect(post.content).toMatch(/<p>/);
    }
  });
});
