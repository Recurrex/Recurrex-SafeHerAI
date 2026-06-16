import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/safety-map", label: "Safety Map" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl shadow-glow">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">SafeHer AI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <>
                <Button variant="ghost" onClick={() => navigate({ to: "/dashboard" })}>
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={async () => {
                    await signOut();
                    navigate({ to: "/" });
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate({ to: "/login" })}>
                  Login
                </Button>
                <Button className="gradient-bg text-white shadow-glow hover:opacity-90" onClick={() => navigate({ to: "/signup" })}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-card/95 backdrop-blur-xl">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "bg-muted text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t pt-3">
                {user ? (
                  <Button
                    variant="outline"
                    onClick={async () => {
                      await signOut();
                      setOpen(false);
                      navigate({ to: "/" });
                    }}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" onClick={() => { setOpen(false); navigate({ to: "/login" }); }}>
                      Login
                    </Button>
                    <Button className="gradient-bg text-white" onClick={() => { setOpen(false); navigate({ to: "/signup" }); }}>
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
