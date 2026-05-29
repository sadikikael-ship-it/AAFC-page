import { useState } from "react";

const reasons = [
  "Booking / Event",
  "Festival Takeover",
  "Brand Collaboration",
  "Press / Interview",
  "Community / Other",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    reason: reasons[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="formSuccess" role="status">
        <h3>Message received.</h3>
        <p>
          The FMLY BZNS team will reply within 3 business days. For urgent
          bookings, email{" "}
          <a href="mailto:bookings@fmlybzns.com">bookings@fmlybzns.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contactForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (form.email.trim() && form.message.trim()) setSubmitted(true);
      }}
    >
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
        required
        aria-label="Name"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        required
        aria-label="Email"
      />
      <input
        type="text"
        placeholder="Organization (optional)"
        value={form.organization}
        onChange={(e) => update("organization", e.target.value)}
        aria-label="Organization"
      />
      <select
        value={form.reason}
        onChange={(e) => update("reason", e.target.value)}
        aria-label="Reason for inquiry"
      >
        {reasons.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Tell us about your event, festival, or collaboration."
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        rows={5}
        required
        aria-label="Message"
      />
      <button type="submit">Send inquiry</button>
    </form>
  );
}
