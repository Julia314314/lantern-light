import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "拾光書語 — 在教育與文化之間" },
      { name: "description", content: "點亮偏鄉教育與華語文化傳承。一位高中生的應華組學習歷程網站。" },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "25+", l: "文章作品" },
  { n: "100+", l: "教學時數" },
  { n: "15+", l: "活動參與" },
  { n: "20+", l: "專題作品" },
];

const features = [
  {
    tag: "文化",
    title: "中華文化專欄",
    desc: "從詩詞、書法到節慶禮俗，整理屬於這個世代的文化筆記。",
    to: "/culture" as const,
  },
  {
    tag: "偏鄉",
    title: "偏鄉教育現場",
    desc: "走進部落與山村，記錄那些課本之外、真正在發生的教育故事。",
    to: "/culture" as const,
  },
  {
    tag: "華語",
    title: "數位華語教學",
    desc: "用 AI、互動教材與線上工具，把華語學習帶到任何角落。",
    to: "/portfolio" as const,
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.4em] text-vermilion uppercase mb-6">
              <span className="h-px w-10 bg-vermilion" />
              拾光 · 書語
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-ink">
              在教育與文化之間，<br />
              <span className="text-vermilion">點亮偏鄉</span>與
              <span className="text-jade">華語傳承</span>。
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed">
              身為一位高中生，我相信教育不只是知識的傳遞，更是文化與價值的延續。
              透過華語、文學與科技，我希望讓更多人看見中華文化的溫度，也讓教育走進更遠的地方。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/culture"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-sm hover:bg-vermilion transition-colors text-sm tracking-widest"
              >
                走進文化專區 →
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-ink/40 text-ink px-6 py-3 rounded-sm hover:bg-ink hover:text-paper transition-colors text-sm tracking-widest"
              >
                認識我
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="vertical-zh font-display text-7xl md:text-8xl text-ink leading-tight tracking-widest">
                以文載道
                <br />
                以光啟人
              </div>
              <div className="seal absolute -bottom-4 -left-6 w-16 h-16 text-base">
                書語
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's phrase */}
      <section className="border-y border-border/60 bg-rice/50">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs tracking-[0.4em] uppercase text-ink-soft">今日一句</div>
          <p className="font-display text-2xl md:text-3xl text-ink">
            「學而不思則罔，思而不學則殆。」
          </p>
          <div className="text-sm text-ink-soft">— 論語 · 為政</div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-3">三條主軸</div>
            <h2 className="font-display text-4xl text-ink">教育 × 文化 × 科技</h2>
          </div>
          <div className="hidden md:block max-w-sm text-sm text-ink-soft">
            把文學的厚度、教育的溫度、科技的速度，編織成同一張網。
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group bg-card border border-border/70 rounded-sm p-8 hover:border-vermilion transition-colors"
            >
              <div className="text-xs tracking-[0.3em] text-vermilion uppercase">{f.tag}</div>
              <h3 className="mt-4 font-display text-2xl text-ink">{f.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.desc}</p>
              <div className="mt-6 text-sm text-ink group-hover:text-vermilion transition-colors">
                閱讀更多 →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-gold">{s.n}</div>
              <div className="mt-3 text-xs tracking-[0.3em] uppercase text-paper/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-3">最新動態</div>
        <h2 className="font-display text-4xl text-ink mb-12">本月文壇 · 教育現場</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <article className="border-l-2 border-vermilion pl-6">
            <div className="text-xs tracking-widest text-ink-soft uppercase">11 月文壇</div>
            <h3 className="mt-2 font-display text-2xl text-ink">讀龍應台《目送》：教育裡的離別練習</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              當我們談教育，常常忘了它本質是一場長長的目送。看似日常的章句，
              其實寫盡了華人家庭與文化傳承中那種「無聲的繼承」。
            </p>
            <Link to="/literature" className="mt-4 inline-block text-sm text-vermilion">前往文壇賞析 →</Link>
          </article>
          <article className="border-l-2 border-jade pl-6">
            <div className="text-xs tracking-widest text-ink-soft uppercase">教育現場</div>
            <h3 className="mt-2 font-display text-2xl text-ink">在山的那一邊：陪伴一位偏鄉孩子讀完一本書</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              他不缺聰明，缺的是一個願意坐下來、聽他把句子讀完的人。
              這篇紀錄一次線上學伴計畫的真實片段。
            </p>
            <Link to="/activities" className="mt-4 inline-block text-sm text-jade">活動歷程 →</Link>
          </article>
        </div>
      </section>
    </div>
  );
}
