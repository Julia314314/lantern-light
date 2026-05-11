import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "作品集 — 拾光書語" },
      { name: "description", content: "文學評論、散文、新詩、英文寫作、自主學習研究與模擬聯合國相關作品集。" },
      { property: "og:title", content: "作品集 — 拾光書語" },
      { property: "og:description", content: "文學、英文寫作、研究與 MUN 文章合集。" },
    ],
  }),
  component: PortfolioPage,
});

const sections = [
  {
    cat: "01",
    title: "文學評論與閱讀心得",
    color: "vermilion",
    items: [
      "《人間失格》—— 在「合群」之外的脆弱靈魂",
      "《邊城》—— 留白美學與沉默的力量",
      "《解憂雜貨店》—— 一封信能改變的事",
      "魯迅《朝花夕拾》—— 帶著溫度的懷疑",
    ],
  },
  {
    cat: "02",
    title: "散文創作",
    color: "jade",
    items: [
      "〈把光帶進村子裡〉—— 偏鄉教學側記",
      "〈祖母的灶〉—— 一道菜裡的家族記憶",
      "〈第一次當老師〉—— 站上講台之前的那五分鐘",
    ],
  },
  {
    cat: "03",
    title: "新詩創作",
    color: "vermilion",
    items: [
      "〈山的這一邊〉",
      "〈寫給未來的學生〉",
      "〈關於「家」的七種寫法〉",
    ],
  },
  {
    cat: "04",
    title: "英文寫作作品 · English Writings",
    color: "jade",
    items: [
      "On Empathy in Cross-Cultural Education",
      "Why Mandarin Matters in a Global Classroom",
      "Letter to a Student I Have Not Yet Met",
    ],
  },
  {
    cat: "05",
    title: "自主學習研究成果",
    color: "vermilion",
    items: [
      "AI 工具在偏鄉華語教學的應用可能性",
      "從《邊城》看華人「含蓄」的語用文化",
      "雙語教材的版面設計與閱讀負擔",
    ],
  },
  {
    cat: "06",
    title: "模擬聯合國相關文章",
    color: "jade",
    items: [
      "MUN 立場文件 · Education Equity in Rural Areas",
      "會議反思：當你的代表國立場與你的價值觀衝突",
      "如何用英文寫一份有說服力的決議草案",
    ],
  },
] as const;

function PortfolioPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">作品 · 集</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          把想說的話，<span className="text-vermilion">寫下來</span>。
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
          從文學評論、散文新詩，到英文寫作、研究報告與 MUN 文件——
          這裡是我嘗試用不同語言、不同文體去理解世界的痕跡。
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border/70 rounded-sm p-7 hover:border-vermilion transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <span className={`font-display text-3xl ${s.color === "vermilion" ? "text-vermilion" : "text-jade"}`}>
                {s.cat}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-ink-soft">Collection</span>
            </div>
            <h2 className="mt-3 font-display text-xl text-ink">{s.title}</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-soft leading-relaxed">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className={`${s.color === "vermilion" ? "text-vermilion" : "text-jade"} shrink-0`}>·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
