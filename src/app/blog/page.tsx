import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Automatizacion y captacion de leads",
  description:
    "Guias practicas sobre automatizacion comercial, CRM, WhatsApp y sistemas de captacion. Sin teoria: solo lo que funciona.",
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
            fm.match(new RegExp(`${key}: "?([^"\n]+)"?`))?.[1] ?? "";
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
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as PostMeta[];
  } catch {
    return [];
  }
}

// Posts de muestra mientras el agente genera contenido real
const SAMPLE_POSTS: PostMeta[] = [
  {
    slug: "como-cualificar-leads-automaticamente",
    title: "Como cualificar leads automaticamente y dejar de perder tiempo",
    description: "El 80% de los leads que recibes no son buenos. Te explico como filtrarlos antes de hablar con ellos.",
    date: "2026-04-01",
    tags: ["lead qualification", "automatizacion", "crm"],
  },
  {
    slug: "propuestas-comerciales-automaticas",
    title: "Propuestas comerciales en 8 minutos: como lo hago",
    description: "De 3 dias a 8 minutos por propuesta. El sistema que implemente para una empresa de eventos.",
    date: "2026-03-25",
    tags: ["propuestas", "automatizacion", "go high level"],
  },
  {
    slug: "whatsapp-automatizacion-ventas",
    title: "WhatsApp para ventas: como montar un sistema real",
    description: "No un chatbot generico. Un flujo que cualifica, agenda y notifica a tu equipo automaticamente.",
    date: "2026-03-18",
    tags: ["whatsapp", "automatizacion", "crm"],
  },
];

export default async function BlogPage() {
  const generated = await getPosts();
  const posts = generated.length > 0 ? generated : SAMPLE_POSTS;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <span className="inline-block text-xs font-mono text-accent border border-accent/30 rounded px-2 py-0.5 mb-6">
          Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          Lo que funciona, escrito.
        </h1>
        <p className="text-foreground-muted text-lg mb-16 max-w-xl">
          Guias practicas sobre automatizacion comercial, CRM y captacion de leads. Sin teoria: solo lo que ya esta implementado.
        </p>

        <div className="flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-8 flex flex-col gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {post.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-xs font-mono text-accent/70 border border-accent/20 rounded px-1.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed">{post.description}</p>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-muted">Articulos en camino.</p>
          </div>
        )}
      </div>
    </div>
  );
}
