import { createFileRoute } from "@tanstack/react-router";
import { Bell, Phone, Ambulance, Users, MapPin, Camera } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Center — SafeHer AI" },
      { name: "description", content: "Quick access to SOS, police, ambulance, and guardian alerts when every second counts." },
      { property: "og:title", content: "Emergency Center — SafeHer AI" },
      { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Emergency <span className="gradient-text">Center</span></h1>
          <p className="mt-3 text-muted-foreground">One tap. Help is on the way.</p>
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <button className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-emergency text-emergency-foreground shadow-glow transition-transform active:scale-95">
            <span className="absolute inset-0 animate-ping rounded-full bg-emergency opacity-30" />
            <div className="relative text-center">
              <Bell className="mx-auto h-10 w-10" />
              <p className="mt-2 text-xl font-bold">SOS</p>
              <p className="text-xs opacity-80">Press &amp; hold</p>
            </div>
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, label: "Call Police", color: "bg-blue-600" },
            { icon: Ambulance, label: "Call Ambulance", color: "bg-rose-600" },
            { icon: Users, label: "Notify Guardians", color: "bg-primary" },
            { icon: MapPin, label: "Share Location", color: "bg-emerald-600" },
          ].map((a) => (
            <Button key={a.label} size="lg" className={`h-20 ${a.color} text-white text-base hover:opacity-90 shadow-soft`}>
              <a.icon className="mr-3 h-6 w-6" /> {a.label}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <Camera className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-semibold">Start evidence capture</h3>
            <p className="mt-1 text-sm text-muted-foreground">Begin secure audio/video recording streamed to your evidence vault.</p>
            <Button variant="outline" className="mt-4">Start recording</Button>
          </div>
          <div className="glass rounded-2xl p-6">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-semibold">Emergency contacts</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[{ n: "Mom", p: "+1 555 0100" }, { n: "Best friend", p: "+1 555 0142" }, { n: "Local police", p: "100" }].map((c) => (
                <li key={c.n} className="flex justify-between rounded-lg border bg-card/50 px-3 py-2">
                  <span>{c.n}</span><span className="text-muted-foreground">{c.p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
