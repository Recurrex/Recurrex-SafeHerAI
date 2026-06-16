import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — SafeHer AI" },
      { name: "description", content: "Frequently asked questions about SafeHer AI." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })
    }]
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Is SafeHer AI free?", a: "Yes, the core safety features are free forever. Premium options for families and organizations are coming soon." },
  { q: "How does AI distress detection work?", a: "On-device AI listens for panic patterns, screams, and help signals — without sending raw audio anywhere unless an incident triggers." },
  { q: "Who can see my location?", a: "Only the guardians you explicitly add. You can pause sharing anytime." },
  { q: "What happens during an SOS?", a: "Your live location is shared with guardians, evidence capture begins, and emergency contacts are alerted instantly." },
  { q: "Is my data encrypted?", a: "Yes — sensitive evidence, contacts, and location data are end-to-end encrypted." },
  { q: "Does SafeHer AI replace emergency services?", a: "No. SafeHer AI is a supplemental safety tool. Always contact local emergency services for life-threatening situations." },
];

function FAQPage() {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently asked <span className="gradient-text">questions</span></h1>
        </div>
      </section>
      <section className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="glass rounded-3xl p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
