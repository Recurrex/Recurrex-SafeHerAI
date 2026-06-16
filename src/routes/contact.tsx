import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SafeHer AI" },
      { name: "description", content: "Get in touch with the SafeHer AI team. Questions, partnerships, feedback — we'd love to hear from you." },
      { property: "og:title", content: "Contact — SafeHer AI" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.length < 2) return toast.error("Please enter your name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return toast.error("Invalid email");
    if (form.subject.length < 3) return toast.error("Subject too short");
    if (form.message.length < 10) return toast.error("Please write a longer message");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Let's <span className="gradient-text">talk</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Reach out for support, partnerships, or just to say hi.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={150} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} required />
            </div>
            <Button type="submit" disabled={loading} className="gradient-bg text-white shadow-glow">
              <Send className="mr-2 h-4 w-4" /> {loading ? "Sending…" : "Send message"}
            </Button>
          </form>

          <aside className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold">Email</h3>
              <a href="mailto:recurrex.ofc@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
                recurrex.ofc@gmail.com
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold">Response time</h3>
              <p className="text-sm text-muted-foreground">Usually within 24 hours on business days.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
