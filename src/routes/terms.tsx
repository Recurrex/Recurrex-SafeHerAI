import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — SafeHer AI" },
      { name: "description", content: "Terms governing use of SafeHer AI." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="June 16, 2026">
      <p>By using SafeHer AI, you agree to these terms. SafeHer AI is provided as a safety tool — not a replacement for emergency services.</p>
      <h2>Acceptable use</h2>
      <p>Don't misuse the platform, impersonate others, or trigger false alarms intentionally.</p>
      <h2>Service availability</h2>
      <p>We aim for 99.9% uptime but cannot guarantee uninterrupted service. Always have a backup safety plan.</p>
      <h2>Liability</h2>
      <p>SafeHer AI is a supplemental tool. We are not liable for outcomes beyond our reasonable control.</p>
      <h2>Changes</h2>
      <p>We may update these terms. We'll notify you of material changes.</p>
    </LegalPage>
  ),
});
