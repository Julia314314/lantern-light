import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "中華文化 × 偏鄉教育 — 拾光書語" },
      { name: "description", content: "結合中華文化專欄、偏鄉文化故事、華語教育資源與數位教學工具的核心專區。" },
      { property: "og:title", content: "中華文化 × 偏鄉教育" },
      { property: "og:description", content: "讓文化走入課室，讓課室走入山林。" },
    ],
  }),
  component: Culture,
});

const culture = [
  { t: "唐詩裡的月", d: "從〈靜夜思〉到〈月下獨酌〉，月亮如何成為華人共同的語言。" },
  { t: "節氣的生活美學", d: "二十四節氣不只是農事曆，更是一種看待時間的方式。" },
  { t: "書法線條中的呼吸", d: "從楷書到行草，線條怎麼變成情緒。" },
  { t: "成語不老", d: "把古老成語放進今天的對話，會發生什麼？" },
];

const rural = [
  { t: "山裡的母語", d: "走訪原鄉，記錄那些正在消失的語言節奏。" },
  { t: "部落的節慶", d: "豐年祭、播種祭：另一種華人土地上的時間感。" },
  { t: "一張學習單的旅程", d: "從台北的書房，到山上的教室，72 小時。" },
];

const resources = [
  { type: "成語學習", n: "圖文整理 12 篇" },
  { type: "古詩賞析", n: "白話解讀 18 首" },
  { type: "閱讀理解", n: "學習單 25 份" },
  { type: "華語教材", n: "PDF 下載 8 套" },
];

function Culture() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">核心專區</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          中華文化 <span className="text-vermilion">×</span> 偏鄉教育
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-ink-soft leading-relaxed">
          這是這個網站的心臟。一邊是流傳千年的文化長河，一邊是仍在等待被看見的孩子。
          我相信兩者可以彼此滋養。
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="font-display text-3xl text-ink">文化．長河</h2>
          <div className="ink-divider flex-1" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culture.map((c) => (
            <article key={c.t} className="bg-card border border-border/70 p-6 rounded-sm hover:border-vermilion transition-colors">
              <div className="seal w-9 h-9 text-xs mb-4">文</div>
              <h3 className="font-display text-xl text-ink">{c.t}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-rice/60 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-display text-3xl text-ink">偏鄉．現場</h2>
            <div className="ink-divider flex-1" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {rural.map((r) => (
              <article key={r.t} className="border-l-2 border-jade pl-5">
                <h3 className="font-display text-xl text-ink">{r.t}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="font-display text-3xl text-ink">華語．資源</h2>
          <div className="ink-divider flex-1" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resources.map((r) => (
            <div key={r.type} className="bg-ink text-paper p-6 rounded-sm">
              <div className="text-xs tracking-[0.3em] uppercase text-gold">{r.type}</div>
              <div className="mt-3 font-display text-2xl">{r.n}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="bg-card border border-border/70 p-10 rounded-sm grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-3">數位 · 華語</div>
            <h2 className="font-display text-3xl text-ink">用 AI 把華語送上山</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              開發互動式生字卡、語音辨識的朗讀回饋、以 AI 生成的個人化故事閱讀，
              讓偏鄉學生也能擁有一對一的學習節奏。
            </p>
          </div>
          <div className="text-right vertical-zh font-display text-5xl text-ink">
            因材．施教
          </div>
        </div>
      </section>
    </div>
  );
}