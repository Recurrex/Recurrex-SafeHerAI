import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SafeHer AI" },
      { name: "description", content: "How SafeHer AI collects, uses, and protects your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="June 16, 2026">
      <p>Your privacy is fundamental to safety. SafeHer AI collects only what's needed to protect you — location, contacts you choose to add, and incident data you generate.</p>
      <h2>Information we collect</h2>
      <ul><li>Account information (name, email)</li><li>Location data when actively using safety features</li><li>Emergency contacts you add</li><li>Evidence you capture in the secure vault</li></ul>
      <h2>How we use it</h2>
      <p>We use your data exclusively to power safety features, notify your guardians, and improve threat detection. We never sell your data.</p>
      <h2>Security</h2>
      <p>End-to-end encryption protects sensitive content. Servers run with industry-standard hardening.</p>
      <h2>Your rights</h2>
      <p>You can export or delete your data anytime from Settings.</p>
      <p>Questions? Email <a href="mailto:recurrex.ofc@gmail.com">recurrex.ofc@gmail.com</a>.</p>
    </LegalPage>
  ),
});
