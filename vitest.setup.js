import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

if (typeof window !== "undefined") {
  window.matchMedia =
    window.matchMedia ||
    ((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

  if (!window.ResizeObserver) {
    window.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }

  if (!window.IntersectionObserver) {
    window.IntersectionObserver = class {
      constructor(callback) {
        this.callback = callback;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    };
  }
}

vi.mock("next/link", async () => {
  const React = await import("react");
  return {
    default: ({ href, children, ...props }) =>
      React.createElement("a", { href, ...props }, children),
  };
});

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans", className: "" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono", className: "" }),
}));

vi.mock("framer-motion", async () => {
  const React = await import("react");
  const cache = new Map();
  const motion = new Proxy(
    {},
    {
      get: (_target, tag) => {
        if (!cache.has(tag)) {
          cache.set(tag, ({ children, ...props }) => {
            const {
              initial,
              animate,
              exit,
              whileInView,
              whileHover,
              whileTap,
              viewport,
              transition,
              variants,
              layout,
              layoutId,
              drag,
              ...rest
            } = props;
            return React.createElement(tag, rest, children);
          });
        }
        return cache.get(tag);
      },
    }
  );
  return {
    motion,
    AnimatePresence: ({ children }) => children,
    useReducedMotion: () => false,
    MotionConfig: ({ children }) => children,
  };
});
