import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Mail, Shield, CheckCircle2, MailCheck } from "lucide-react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — SafeHer AI" },
      { name: "description", content: "Your SafeHer AI profile." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/profile" }],
  }),
  component: () => <Layout><ProtectedRoute><Profile /></ProtectedRoute></Layout>,
});

function Profile() {
  const { user, sendVerification } = useAuth();
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold">Your <span className="gradient-text">Profile</span></h1>

      <div className="glass mt-8 rounded-3xl p-8">
        <div className="flex items-center gap-4">
          <div className="gradient-bg flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-glow">
            {(user?.displayName?.[0] || user?.email?.[0] || "U").toUpperCase()}
          </div>
          <div>
            <p className="text-xl font-semibold">{user?.displayName || "Anonymous"}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Row icon={User} label="Display name" value={user?.displayName || "—"} />
          <Row icon={Mail} label="Email" value={user?.email || "—"} />
          <Row
            icon={user?.emailVerified ? CheckCircle2 : MailCheck}
            label="Email status"
            value={user?.emailVerified ? "Verified" : "Not verified"}
            action={!user?.emailVerified ? (
              <Button size="sm" variant="outline" onClick={async () => {
                try { await sendVerification(); toast.success("Verification email sent!"); }
                catch (err) { toast.error((err as Error).message); }
              }}>Send email</Button>
            ) : null}
          />
          <Row icon={Shield} label="Account ID" value={user?.uid.slice(0, 12) + "…"} />
        </div>

        <div className="mt-8 flex gap-3">
          <Button asChild variant="outline"><Link to="/settings">Account settings</Link></Button>
          <Button asChild className="gradient-bg text-white"><Link to="/dashboard">Go to dashboard</Link></Button>
        </div>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, value, action }: { icon: any; label: string; value: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-card/50 px-4 py-3">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-primary" />
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-sm font-medium">{value}</p>
        </div>
      </div>
      {action}
    </div>
  );
}
