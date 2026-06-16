import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — SafeHer AI" },
      { name: "description", content: "Reset your SafeHer AI password." },
      { property: "og:url", content: "/forgot-password" },
    ],
    links: [{ rel: "canonical", href: "/forgot-password" }],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
    } catch (err) { toast.error((err as Error).message); }
    finally { setLoading(false); }
  };

  return (
    <Layout>
      <section className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-12 md:px-6">
        <div className="glass w-full max-w-md rounded-3xl p-8 shadow-glow">
          <div className="text-center">
            <div className="gradient-bg mx-auto flex h-12 w-12 items-center justify-center rounded-2xl shadow-glow">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="mt-4 text-2xl font-bold">Reset password</h1>
            <p className="text-sm text-muted-foreground">We'll email you a link to reset your password.</p>
          </div>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full gradient-bg text-white shadow-glow">
              {loading ? "Sending…" : "Send reset link"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Back to <Link to="/login" className="font-medium text-primary hover:underline">login</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
