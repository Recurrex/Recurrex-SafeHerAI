import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bell, MapPin, Users, Camera, Sparkles, Shield, Building2, Car, Smartphone, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SafeHer AI" },
      { name: "description", content: "Discover all SafeHer AI features: AI distress detection, SOS, guardian tracking, safe routes, evidence vault, and more." },
      { property: "og:title", content: "Features — SafeHer AI" },
      { property: "og:description", content: "AI-powered tools designed for women's safety." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: Sparkles, title: "AI Distress Detection", desc: "Our AI continuously listens for screams, panic in your voice, and help signals — automatically triggering emergency alerts so help arrives fast." },
  { icon: Bell, title: "One-Tap SOS", desc: "A single tap shares your live location with emergency contacts and notifies authorities instantly. No fumbling, no delay." },
  { icon: MapPin, title: "Safe Route Intelligence", desc: "Routes optimized using lighting, crowd density, crime reports, and time of day — so the safest path is always one tap away." },
  { icon: Users, title: "Guardian Tracking", desc: "Add trusted guardians who can see your live journey, ETA, and route — peace of mind for them, freedom for you." },
  { icon: Camera, title: "Emergency Evidence Vault", desc: "Audio, images, and videos captured during incidents are encrypted and stored securely — usable as evidence later." },
  { icon: Shield, title: "AI Safety Score", desc: "Risk prediction for any location at any time — know before you go." },
  { icon: Building2, title: "Nearby Safe Places", desc: "Police stations, hospitals, pharmacies, and verified safe zones — always within reach." },
  { icon: Car, title: "Fake Ride Detection", desc: "Verify your ride's plate, driver, and route in seconds before you step inside." },
  { icon: Smartphone, title: "Shake to Alert", desc: "When you can't reach your phone, just shake — SOS triggers automatically." },
  { icon: MessageCircle, title: "Community Safety Reports", desc: "Anonymous, verified reports from women — for women. Stay informed about your area." },
];

function FeaturesPage() {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Built for <span className="gradient-text">every moment</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ten powerful safety features powered by real-time AI, designed around real-world threats.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-7 hover:shadow-glow transition-all"
            >
              <div className="gradient-bg inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-glow">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
