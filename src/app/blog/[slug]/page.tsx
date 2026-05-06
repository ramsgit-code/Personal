import React from "react";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getPost(slug: string) {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  try {
    const content = await fs.readFile(path.join(blogDir, `${slug}.mdx`), "utf-8");
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!frontmatterMatch) return null;
    const fm = frontmatterMatch[1];
    const body = frontmatterMatch[2];
    const get = (key: string) => fm.match(new RegExp(`${key}: "?([^"\n]+)"?`))?.[1] ?? "";
    const tagsMatch = fm.match(/tags: \[([^\]]+)\]/);
    const tags = tagsMatch
      ? tagsMatch[1].split(",").map((t) => t.trim().replace(/"/g, ""))
      : [];
    return { title: get("title"), description: get("description"), date: get("date"), tags, body };
  } catch {
    return null;
  }
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const pattern = /(\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\))/g;
  let last = 0;
  let match;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2]) parts.push(<strong key={key++} className="font-semibold text-foreground">{match[2]}</strong>);
    else if (match[3]) parts.push(<code key={key++} className="text-xs bg-white/10 rounded px-1 py-0.5 font-mono">{match[3]}</code>);
    else if (match[4] && match[5]) parts.push(<a key={key++} href={match[5]} className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">{match[4]}</a>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  try {
    const files = await fs.readdir(blogDir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({ slug: f.replace(".mdx", "") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Articulo no encontrado" };
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/blog" className="text-sm text-foreground-muted hover:text-foreground transition-colors mb-8 inline-flex items-center gap-1">
          ← Volver al blog
        </Link>

        <div className="mt-6 mb-10">
          <div className="flex items-center gap-3 mb-4">
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-invert prose-sm max-w-none text-foreground-muted leading-relaxed">
          {post.body.split("\n").map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-foreground mt-10 mb-3">{renderInline(line.slice(3))}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-2">{renderInline(line.slice(4))}</h3>;
            if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-1">{renderInline(line.slice(2))}</li>;
            if (line.trim() === "") return <br key={i} />;
            return <p key={i} className="mb-3">{renderInline(line)}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="text-lg font-semibold text-foreground mb-2">
            ¿Quieres aplicar esto en tu negocio?
          </p>
          <p className="text-foreground-muted text-sm mb-5">
            En 30 minutos te digo exactamente que sistema necesitas.
          </p>
          <Link href="/diagnostico" className="btn-primary">
            Solicita tu diagnostico gratuito →
          </Link>
        </div>
      </div>
    </div>
  );
}
