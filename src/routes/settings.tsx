import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Shield, Smartphone, LogOut } from "lucide-react";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — SafeHer AI" },
      { name: "description", content: "Manage your SafeHer AI account preferences." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/settings" }],
  }),
  component: () => <Layout><ProtectedRoute><Settings /></ProtectedRoute></Layout>,
});

function Settings() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [prefs, setPrefs] = useState({ notifs: true, shake: true, location: true, analytics: false });

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold">Account <span className="gradient-text">Settings</span></h1>

      <div className="glass mt-8 rounded-3xl p-6 md:p-8 space-y-4">
        <Setting icon={Bell} title="Push notifications" desc="Receive alerts about activity and guardians."
          checked={prefs.notifs} onChange={(v) => setPrefs({ ...prefs, notifs: v })} />
        <Setting icon={Smartphone} title="Shake to alert" desc="Trigger SOS by shaking your phone."
          checked={prefs.shake} onChange={(v) => setPrefs({ ...prefs, shake: v })} />
        <Setting icon={Shield} title="Background location" desc="Allow safe route monitoring while app is closed."
          checked={prefs.location} onChange={(v) => setPrefs({ ...prefs, location: v })} />
        <Setting icon={Shield} title="Anonymous analytics" desc="Help improve SafeHer AI."
          checked={prefs.analytics} onChange={(v) => setPrefs({ ...prefs, analytics: v })} />
      </div>

      <div className="mt-8">
        <Button variant="outline" onClick={async () => { await signOut(); navigate({ to: "/" }); }}>
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </Button>
      </div>
    </div>
  );
}

function Setting({ icon: Icon, title, desc, checked, onChange }: { icon: any; title: string; desc: string; checked: boolean; onChange: (v: boolean) => void; }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border bg-card/50 p-4">
      <div className="flex items-start gap-3">
        <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl"><Icon className="h-4 w-4 text-white" /></div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
