import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Users, MapPin, Bell, AlertTriangle, TrendingUp, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — SafeHer AI" },
      { name: "description", content: "Your personal safety dashboard with AI insights, guardians, and recent activity." },
      { property: "og:title", content: "Dashboard — SafeHer AI" },
      { property: "og:url", content: "/dashboard" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: () => (
    <Layout>
      <ProtectedRoute><Dashboard /></ProtectedRoute>
    </Layout>
  ),
});

const trend = [
  { day: "Mon", score: 88 }, { day: "Tue", score: 91 }, { day: "Wed", score: 86 },
  { day: "Thu", score: 93 }, { day: "Fri", score: 89 }, { day: "Sat", score: 94 }, { day: "Sun", score: 96 },
];
const reports = [
  { name: "Theft", value: 12 }, { name: "Harassment", value: 8 },
  { name: "Suspicious", value: 15 }, { name: "Unsafe Area", value: 6 },
];
const risk = [
  { name: "Low", value: 62 }, { name: "Medium", value: 28 }, { name: "High", value: 10 },
];
const COLORS = ["#7c3aed", "#ec4899", "#06b6d4"];

const stats = [
  { icon: Shield, label: "Safety Score", value: "94", sub: "+4 this week", color: "text-emerald-500" },
  { icon: Users, label: "Active Guardians", value: "4", sub: "All online", color: "text-primary" },
  { icon: MapPin, label: "Recent Trips", value: "12", sub: "This month", color: "text-accent-foreground" },
  { icon: Bell, label: "Community Alerts", value: "3", sub: "Near your area", color: "text-amber-500" },
];

function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi, {user?.displayName?.split(" ")[0] || "there"} <span className="gradient-text">👋</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild><Link to="/safety-map">Open Map</Link></Button>
          <Button className="bg-emergency text-emergency-foreground hover:opacity-90" asChild>
            <Link to="/emergency"><Bell className="mr-2 h-4 w-4" /> Emergency</Link>
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-muted ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Safety Score Trend</h3>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="day" stroke="currentColor" fontSize={12} />
                <YAxis stroke="currentColor" fontSize={12} domain={[80, 100]} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="score" stroke="#a855f7" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold">Route Risk Analysis</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={risk} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                  {risk.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-3 text-xs text-muted-foreground">
            {risk.map((r, i) => (
              <span key={r.name} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: COLORS[i] }} />{r.name}
              </span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-semibold">Community Reports</h3>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reports}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
                <YAxis stroke="currentColor" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="value" fill="#ec4899" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold">Emergency History</h3>
          <ul className="mt-4 space-y-3">
            {[
              { t: "False alarm — resolved", time: "2 days ago", icon: AlertTriangle },
              { t: "Guardian check-in", time: "5 days ago", icon: Users },
              { t: "Route deviation alert", time: "1 week ago", icon: MapPin },
              { t: "Shake-to-alert triggered", time: "2 weeks ago", icon: Activity },
            ].map((h) => (
              <li key={h.t} className="flex items-start gap-3 rounded-xl border bg-card/50 p-3">
                <h.icon className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">{h.t}</p>
                  <p className="text-xs text-muted-foreground">{h.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
