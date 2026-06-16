import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — SafeHer AI" },
      { name: "description", content: "How SafeHer AI uses cookies and similar technologies." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <LegalPage title="Cookies Policy" updated="June 16, 2026">
      <p>We use cookies to keep you signed in, remember preferences, and understand usage patterns.</p>
      <h2>Types of cookies</h2>
      <ul>
        <li><b>Essential:</b> required for authentication and session.</li>
        <li><b>Analytics:</b> aggregated usage data, anonymized.</li>
        <li><b>Preferences:</b> remember your theme and settings.</li>
      </ul>
      <h2>Managing cookies</h2>
      <p>You can disable cookies in your browser, but some features may stop working.</p>
    </LegalPage>
  ),
});
