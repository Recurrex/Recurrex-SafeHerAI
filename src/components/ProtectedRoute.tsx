import { useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";
import { Shield } from "lucide-react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <div className="gradient-bg flex h-12 w-12 animate-pulse items-center justify-center rounded-xl">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <p className="text-sm">Securing your session…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
