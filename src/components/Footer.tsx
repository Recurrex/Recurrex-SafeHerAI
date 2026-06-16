import { Link } from "@tanstack/react-router";
import { Shield, Mail, Github, Linkedin, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { href: "mailto:recurrex.ofc@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/Recurrex", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/company/recurrexhq/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/recurrex", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/recurrex", icon: Facebook, label: "Facebook" },
  { href: "https://x.com/recurrex", icon: Twitter, label: "X" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-card/40">
      {/* Recurrex CTA */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14 text-center shadow-glow">
          <div className="absolute inset-0 gradient-bg opacity-10" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Built with care by Recurrex</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Explore more projects, products, and ideas crafted by our team.
            </p>
            <Button
              size="lg"
              className="mt-6 gradient-bg text-white shadow-glow hover:opacity-90"
              asChild
            >
              <a href="https://recurrexofficial.vercel.app" target="_blank" rel="noopener noreferrer">
                For More Projects Visit Recurrex
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-10 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">SafeHer AI</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Your intelligent safety companion — wherever you go. AI-powered protection,
              guardian tracking, and emergency response in one platform.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:recurrex.ofc@gmail.com" className="hover:text-foreground">
                recurrex.ofc@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/safety-map" className="hover:text-foreground">Safety Map</Link></li>
              <li><Link to="/emergency" className="hover:text-foreground">Emergency Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="/faqs" className="hover:text-foreground">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Recurrex. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
