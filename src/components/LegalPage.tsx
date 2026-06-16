import type { ReactNode } from "react";
import Layout from "@/components/Layout";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <Layout>
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold gradient-text">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>
      <section className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="glass rounded-3xl p-6 md:p-10 prose prose-sm md:prose-base dark:prose-invert max-w-none">
          {children}
        </div>
      </section>
    </Layout>
  );
}
