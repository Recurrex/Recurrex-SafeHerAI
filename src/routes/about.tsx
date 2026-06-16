import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Cpu, Heart } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SafeHer AI" },
      { name: "description", content: "Our mission, vision, technology, and why SafeHer AI exists — making safety intelligent and universal." },
      { property: "og:title", content: "About — SafeHer AI" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Safety is a <span className="gradient-text">human right</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            SafeHer AI exists because no woman should ever feel alone, unsafe, or unheard.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Mission", desc: "Empower every woman with intelligent protection at her fingertips." },
            { icon: Eye, title: "Vision", desc: "A world where AI quietly stands guard so women can move freely." },
            { icon: Cpu, title: "Technology", desc: "Real-time AI, encrypted data, and edge intelligence working together." },
            { icon: Heart, title: "Impact", desc: "Thousands protected, faster response times, safer communities." },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-6">
              <div className="gradient-bg inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <b.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-10 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold">Why <span className="gradient-text">SafeHer AI</span> matters</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            One in three women experiences violence in her lifetime. Most safety apps stop at a panic button.
            We believe AI can do more — predict risk, intervene early, capture evidence, and connect women with
            the people and services they trust. SafeHer AI is built by Recurrex with that single belief:
            technology should protect, not just react.
          </p>
        </div>
      </section>
    </Layout>
  );
}
