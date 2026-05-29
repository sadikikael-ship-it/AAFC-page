import { useState } from "react";

interface Props {
  variant?: "stacked" | "inline";
  cta?: string;
}

export function MailingListForm({
  variant = "stacked",
  cta = "Join the Mailing List",
}: Props) {
  const [form, setForm] = useState({ email: "", name: "", city: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="formSuccess" role="status">
        <h3>You're on the signal.</h3>
        <p>
          Mixes, tickets and drops will land in your inbox.
          {form.city ? ` See you in ${form.city}.` : ""}
        </p>
      </div>
    );
  }

  return (
    <form
      className={`mailingForm mailingForm--${variant}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (form.email.trim()) setSubmitted(true);
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        required
        aria-label="Email"
      />
      {variant === "stacked" ? (
        <>
          <input
            type="text"
            placeholder="Name (optional)"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-label="Name"
          />
          <input
            type="text"
            placeholder="City (optional)"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            aria-label="City"
          />
        </>
      ) : null}
      <button type="submit">{cta}</button>
    </form>
  );
}
