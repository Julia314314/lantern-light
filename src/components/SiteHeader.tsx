import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "首頁" },
  { to: "/about", label: "關於我" },
  { to: "/culture", label: "文化．偏鄉" },
  { to: "/literature", label: "文壇賞析" },
  { to: "/activities", label: "活動歷程" },
  { to: "/portfolio", label: "作品集" },
  { to: "/contact", label: "聯絡" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="seal w-10 h-10 text-sm leading-none" aria-hidden>
            拾光
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg text-ink">拾光書語</div>
            <div className="text-[10px] tracking-[0.3em] text-ink-soft uppercase">
              Gathered Light · Words
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-vermilion font-medium" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
              activeOptions={{ exact: n.to === "/" }}
              className="transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-rice/60">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-xl text-ink">拾光書語</div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            在教育與文化之間，<br />點亮偏鄉教育與華語文化傳承。
          </p>
        </div>
        <div className="text-sm text-ink-soft">
          <div className="font-medium text-ink mb-2">核心理念</div>
          以教育傳承文化，<br />以科技連結偏鄉。
        </div>
        <div className="text-sm text-ink-soft">
          <div className="font-medium text-ink mb-2">聯絡</div>
          學習歷程網站 · 高中應華組志願<br />
          © {new Date().getFullYear()} 拾光書語
        </div>
      </div>
    </footer>
  );
}