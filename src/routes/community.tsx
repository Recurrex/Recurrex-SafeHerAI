import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, AlertTriangle, EyeOff, ThumbsUp, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — SafeHer AI" },
      { name: "description", content: "Report incidents anonymously, read community safety reports, and join discussions to keep women safer." },
      { property: "og:title", content: "Community — SafeHer AI" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const seed = [
  { title: "Poorly lit alley near 5th Ave", body: "Dark stretch with no streetlights after 9pm. Avoid solo.", tag: "Unsafe Area", likes: 24, anon: true },
  { title: "Helpful police patrol", body: "Saw regular patrols around the metro station — feels much safer.", tag: "Positive", likes: 41, anon: false },
  { title: "Suspicious person reported", body: "Man following women near the park entrance around dusk.", tag: "Suspicious", likes: 18, anon: true },
];

function CommunityPage() {
  const [anon, setAnon] = useState(true);
  const [reports, setReports] = useState(seed);
  const [form, setForm] = useState({ title: "", body: "", tag: "Suspicious" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) return;
    setReports([{ ...form, likes: 0, anon }, ...reports]);
    setForm({ title: "", body: "", tag: "Suspicious" });
  };

  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Safer <span className="gradient-text">together</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Anonymous reports. Real conversations. Real change.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {reports.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{r.tag}</span>
                  <span className="text-muted-foreground">
                    {r.anon ? <><EyeOff className="mr-1 inline h-3 w-3" />Anonymous</> : "Verified user"}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1.5 hover:text-foreground"><ThumbsUp className="h-4 w-4" /> {r.likes}</button>
                  <button className="flex items-center gap-1.5 hover:text-foreground"><MessageCircle className="h-4 w-4" /> Discuss</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-5">
            <form onSubmit={submit} className="glass rounded-2xl p-6">
              <h3 className="font-semibold flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-primary" /> Report incident</h3>
              <div className="mt-4 space-y-3">
                <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} maxLength={120} required />
                <Textarea placeholder="What happened?" value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} maxLength={800} rows={4} required />
                <select
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  value={form.tag}
                  onChange={(e) => setForm({ ...form, tag: e.target.value })}
                >
                  {["Suspicious", "Unsafe Area", "Harassment", "Theft", "Positive"].map((t) => <option key={t}>{t}</option>)}
                </select>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" checked={anon} onChange={(e) => setAnon(e.target.checked)} /> Post anonymously
                </label>
                <Button type="submit" className="w-full gradient-bg text-white"><Send className="mr-2 h-4 w-4" /> Submit report</Button>
              </div>
            </form>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold">Community guidelines</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Be respectful and supportive.</li>
                <li>• Don't share identifying personal info.</li>
                <li>• Report verified facts, not rumors.</li>
                <li>• Help others feel heard.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
