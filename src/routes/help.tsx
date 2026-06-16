import { createFileRoute, Link } from "@tanstack/react-router";
import { LifeBuoy, BookOpen, MessageCircle, Mail } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — SafeHer AI" },
      { name: "description", content: "Get help with SafeHer AI features, account, and emergencies." },
      { property: "og:url", content: "/help" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: HelpPage,
});

function HelpPage() {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Help <span className="gradient-text">Center</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Guides, answers, and human support — whenever you need.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Getting started", desc: "Set up your account, guardians, and first safe route." },
            { icon: LifeBuoy, title: "Emergencies", desc: "How SOS, evidence vault, and alerts work." },
            { icon: MessageCircle, title: "Community", desc: "Reporting, anonymity, and discussions." },
            { icon: Mail, title: "Contact support", desc: "Reach our team via email." },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-6 hover:shadow-glow transition">
              <div className="gradient-bg inline-flex h-11 w-11 items-center justify-center rounded-xl"><b.icon className="h-5 w-5 text-white" /></div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still need help? Visit our <Link to="/faqs" className="text-primary hover:underline">FAQs</Link> or{" "}
          <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
      </section>
    </Layout>
  );
}
