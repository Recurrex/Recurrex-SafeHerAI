import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Bell, MapPin, Users, Camera, Sparkles, Building2, Car, Smartphone,
  MessageCircle, ArrowRight, Play, CheckCircle2, Activity, Clock, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeHer AI — Intelligent Women Safety Platform" },
      { name: "description", content: "AI-powered protection with intelligent alerts, guardian tracking, safe routes, and emergency response — your safety companion wherever you go." },
      { property: "og:title", content: "SafeHer AI — Intelligent Women Safety Platform" },
      { property: "og:description", content: "AI-powered protection, guardian tracking, and emergency response in one platform." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Sparkles, title: "AI Distress Detection", desc: "Detect screams, panic, and help signals — auto-trigger emergency alerts." },
  { icon: Bell, title: "One-Tap SOS", desc: "Live location sharing, emergency contacts, instant notifications." },
  { icon: MapPin, title: "Safe Route Intelligence", desc: "Lighting, crowd density, crime reports, and time-of-day factored in." },
  { icon: Users, title: "Guardian Tracking", desc: "Real-time journey tracking with your trusted circle." },
  { icon: Camera, title: "Emergency Evidence Vault", desc: "Securely store audio, images, and videos when seconds matter." },
  { icon: Shield, title: "AI Safety Score", desc: "Risk prediction for any location, anytime." },
  { icon: Building2, title: "Nearby Safe Places", desc: "Police, hospitals, pharmacies, and safe zones nearby." },
  { icon: Car, title: "Fake Ride Detection", desc: "Verify your ride details before stepping in." },
  { icon: Smartphone, title: "Shake to Alert", desc: "Shake your phone to trigger an instant SOS." },
  { icon: MessageCircle, title: "Community Reports", desc: "Anonymous safety reports from women, for women." },
];

const stats = [
  { value: "< 3s", label: "Emergency Response" },
  { value: "120K+", label: "Protected Users" },
  { value: "850K+", label: "Safe Routes Generated" },
  { value: "42K+", label: "Community Reports" },
];

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Powered by Real-Time AI Intelligence
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                AI-Powered <span className="gradient-text">Protection</span> for Every Journey
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Stay safe with intelligent alerts, guardian tracking, emergency assistance,
                and predictive safety insights — designed for women, everywhere.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="gradient-bg text-white shadow-glow hover:opacity-90" asChild>
                  <Link to="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">
                    <Play className="mr-2 h-4 w-4" /> Watch Demo
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                {["No credit card", "Free forever plan", "End-to-end encrypted"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="glass relative rounded-3xl p-6 shadow-glow">
                <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="gradient-bg flex h-11 w-11 items-center justify-center rounded-xl">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Safety Status</p>
                        <p className="text-xs text-muted-foreground">Live monitoring</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Protected
                    </span>
                  </div>

                  <div className="rounded-2xl border bg-card/70 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">AI Safety Score</span>
                      <span className="font-semibold">94 / 100</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="h-full rounded-full gradient-bg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Users, label: "Guardians", val: "4 active" },
                      { icon: MapPin, label: "Safe route", val: "On track" },
                      { icon: Activity, label: "Heart rate", val: "72 bpm" },
                      { icon: Clock, label: "ETA", val: "12 min" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border bg-card/60 p-3">
                        <s.icon className="h-4 w-4 text-primary" />
                        <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-semibold">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-emergency text-emergency-foreground hover:opacity-90 shadow-glow">
                    <Bell className="mr-2 h-4 w-4" /> Trigger Emergency SOS
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to feel <span className="gradient-text">safe</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete toolkit built on AI, designed around real-world women's safety.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group glass rounded-2xl p-6 transition-all hover:shadow-glow hover:-translate-y-1"
            >
              <div className="gradient-bg inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-glow">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 gradient-bg opacity-10" />
          <div className="relative">
            <Heart className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Your safety, <span className="gradient-text">our priority</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Join thousands of women who trust SafeHer AI to keep them protected every day.
            </p>
            <Button size="lg" className="mt-6 gradient-bg text-white shadow-glow hover:opacity-90" asChild>
              <Link to="/signup">Start Protecting Yourself <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
