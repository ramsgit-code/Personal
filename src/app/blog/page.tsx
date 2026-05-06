import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Automatización Comercial y Captación de Leads",
  description:
    "Guías prácticas sobre automatización comercial, Go High Level, WhatsApp y sistemas de captación de leads. Sin teoría: solo lo que ya está implementado.",
  alternates: { canonical: "https://ramiroperez.com/blog" },
  openGraph: {
    title: "Blog — Automatización Comercial y Captación de Leads",
    description:
      "Guías prácticas sobre Go High Level, WhatsApp automation y lead qualification. Casos reales, no teoría.",
  },
};

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

async function getPosts(): Promise<PostMeta[]> {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  try {
    const files = await fs.readdir(blogDir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".mdx"))
        .map(async (file) => {
          const content = await fs.readFile(path.join(blogDir, file), "utf-8");
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (!frontmatterMatch) return null;
          const fm = frontmatterMatch[1];
          const get = (key: string) =>
            fm.match(new RegExp(`${key}: "?([^"\\n]+)"?`))?.[1] ?? "";
          const tagsMatch = fm.match(/tags: \[([^\]]+)\]/);
          const tags = tagsMatch
            ? tagsMatch[1].split(",").map((t) => t.trim().replace(/"/g, ""))
            : [];
          return {
            slug: file.replace(".mdx", ""),
            title: get("title"),
            description: get("description"),
            date: get("date"),
            tags,
          };
        })
    );
    return posts
      .filter(Boolean)
      .sort(
        (a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()
      ) as PostMeta[];
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Lo que funciona, escrito.
          </h1>
          <p className="text-foreground-muted text-lg max-w-xl">
            Guías prácticas sobre automatización comercial, CRM y captación de leads. Sin teoría: solo lo que ya está implementado.
          </p>
        </div>

        {posts.length === 0 ? (
          /* Empty state */
          <div className="text-center py-24 border border-border rounded-2xl">
            <p className="text-foreground-muted mb-2">Artículos en camino.</p>
            <p className="text-sm text-muted">El agente de blog publica cada lunes.</p>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block mb-16 bg-surface border border-border rounded-2xl p-8 md:p-10 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5">
                    Destacado
                  </span>
                  <span className="text-xs text-muted">{formatDate(featured.date)}</span>
                  {featured.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs font-mono text-foreground-muted border border-border rounded px-1.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-3">
                  {featured.title}
                </h2>
                <p className="text-foreground-muted leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
                <p className="text-accent text-sm mt-5 font-medium">
                  Leer artículo →
                </p>
              </Link>
            )}

            {/* Rest of posts */}
            {rest.length > 0 && (
              <div className="flex flex-col divide-y divide-border">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group py-8 flex flex-col md:flex-row md:items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="md:w-36 shrink-0">
                      <span className="text-xs text-muted">{formatDate(post.date)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0, 2).map((t) => (
                          <span key={t} className="text-xs font-mono text-accent/70 border border-accent/20 rounded px-1.5 py-0.5">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
                        {post.title}
                      </h2>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-20 border-t border-border pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-foreground mb-1">¿Quieres aplicar esto en tu negocio?</p>
            <p className="text-sm text-foreground-muted">En 30 minutos te digo exactamente qué sistema necesitas.</p>
          </div>
          <Link href="/diagnostico" className="btn-primary shrink-0">
            Solicita tu diagnóstico →
          </Link>
        </div>
      </div>
    </div>
  );
}
