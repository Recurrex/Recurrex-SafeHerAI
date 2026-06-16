import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Shield, Building2, Hospital, AlertTriangle, Navigation } from "lucide-react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";

export const Route = createFileRoute("/safety-map")({
  head: () => ({
    meta: [
      { title: "Safety Map — SafeHer AI" },
      { name: "description", content: "Interactive safety map showing safe zones, police stations, hospitals, and reported incidents nearby." },
      { property: "og:title", content: "Safety Map — SafeHer AI" },
      { property: "og:url", content: "/safety-map" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/safety-map" }],
  }),
  component: () => (
    <Layout><ProtectedRoute><SafetyMap /></ProtectedRoute></Layout>
  ),
});

const legend = [
  { icon: Shield, color: "bg-emerald-500", label: "Safe Zones" },
  { icon: Building2, color: "bg-blue-500", label: "Police Stations" },
  { icon: Hospital, color: "bg-rose-500", label: "Hospitals" },
  { icon: AlertTriangle, color: "bg-amber-500", label: "Reported Incidents" },
  { icon: Navigation, color: "bg-primary", label: "Your Location" },
];

function SafetyMap() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Safety <span className="gradient-text">Map</span></h1>
        <p className="mt-2 text-muted-foreground">Live awareness of safe places, threats, and your guardians.</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="glass relative aspect-[16/10] overflow-hidden rounded-3xl">
          {/* Stylized map placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-pink-500/10" />
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {[
            { top: "30%", left: "25%", icon: Shield, color: "bg-emerald-500" },
            { top: "55%", left: "60%", icon: Building2, color: "bg-blue-500" },
            { top: "20%", left: "70%", icon: Hospital, color: "bg-rose-500" },
            { top: "70%", left: "35%", icon: AlertTriangle, color: "bg-amber-500" },
            { top: "45%", left: "45%", icon: Navigation, color: "bg-primary" },
          ].map((p, i) => (
            <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
              <div className={`flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${p.color} text-white shadow-glow animate-pulse`}>
                <p.icon className="h-4 w-4" />
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
            <MapPin className="mr-1 inline h-3.5 w-3.5" /> Map integration ready (Google Maps / Mapbox)
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold">Legend</h3>
            <ul className="mt-3 space-y-2">
              {legend.map((l) => (
                <li key={l.label} className="flex items-center gap-3 text-sm">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${l.color} text-white`}>
                    <l.icon className="h-3.5 w-3.5" />
                  </span>
                  {l.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold">Nearby</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {[
                { name: "Central Police Station", dist: "0.6 km" },
                { name: "City Hospital", dist: "1.2 km" },
                { name: "24/7 Pharmacy", dist: "0.4 km" },
                { name: "Verified Safe Café", dist: "0.2 km" },
              ].map((n) => (
                <li key={n.name} className="flex items-center justify-between">
                  <span>{n.name}</span>
                  <span className="text-muted-foreground">{n.dist}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
