import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "@/app/contact/page";

const FORMSPREE_ID = "test-form-id";

beforeEach(() => {
  process.env.NEXT_PUBLIC_FORMSPREE_ID = FORMSPREE_ID;
  global.fetch = vi.fn();
});

async function fillForm(user, overrides = {}) {
  await user.type(screen.getByLabelText("Name *"), overrides.name ?? "Test User");
  await user.type(screen.getByLabelText("Email *"), overrides.email ?? "test@example.com");
  await user.type(
    screen.getByLabelText("Message *"),
    overrides.message ?? "I want to build a software product."
  );
}

describe("Contact form", () => {
  it("renders the form fields and submit button", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Email *")).toBeInTheDocument();
    expect(screen.getByLabelText("Company")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send Message" })).toBeInTheDocument();
  });

  it("updates form state as the user types", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await fillForm(user);

    expect(screen.getByLabelText("Name *")).toHaveValue("Test User");
    expect(screen.getByLabelText("Email *")).toHaveValue("test@example.com");
    expect(screen.getByLabelText("Message *")).toHaveValue(
      "I want to build a software product."
    );
  });

  it("shows a success message when submission succeeds", async () => {
    const user = userEvent.setup();
    global.fetch.mockResolvedValue({ ok: true });

    render(<Contact />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(await screen.findByText("Thank You!")).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith(
      `https://formspree.io/f/${FORMSPREE_ID}`,
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows an error message when submission fails", async () => {
    const user = userEvent.setup();
    global.fetch.mockResolvedValue({ ok: false });

    render(<Contact />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });

  it("shows an error message when the network request rejects", async () => {
    const user = userEvent.setup();
    global.fetch.mockRejectedValue(new Error("Network down"));

    render(<Contact />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });

  it("disables the button while sending", async () => {
    const user = userEvent.setup();
    let resolveFetch;
    global.fetch.mockReturnValue(
      new Promise((resolve) => {
        resolveFetch = resolve;
      })
    );

    render(<Contact />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: "Send Message" }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();

    resolveFetch({ ok: true });
    await waitFor(() => {
      expect(screen.getByText("Thank You!")).toBeInTheDocument();
    });
  });

  it("requires name, email, and message fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name *")).toBeRequired();
    expect(screen.getByLabelText("Email *")).toBeRequired();
    expect(screen.getByLabelText("Message *")).toBeRequired();
    expect(screen.getByLabelText("Company")).not.toBeRequired();
  });

  it("renders office hours and contact details", () => {
    render(<Contact />);
    expect(screen.getByText("mugilsoftsolutions@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+91 9360054104")).toBeInTheDocument();
    expect(screen.getByText(/Monday – Friday/)).toBeInTheDocument();
  });
});
