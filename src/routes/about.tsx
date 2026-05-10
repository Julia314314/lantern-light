import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "關於我 — 拾光書語" },
      { name: "description", content: "英語實驗班學生、模聯參與者、華語文化的熱愛者。我相信教育是文化的延續。" },
      { property: "og:title", content: "關於我 — 拾光書語" },
      { property: "og:description", content: "教育不只是知識傳遞，更是文化與價值的延續。" },
    ],
  }),
  component: About,
});

const abilities = [
  { tag: "華語文化", items: ["文學賞析", "文化研究", "古典與現代並重"] },
  { tag: "英語能力", items: ["模擬聯合國", "英文簡報", "雙語寫作"] },
  { tag: "科技能力", items: ["Arduino", "網站架設", "AI 教學工具"] },
  { tag: "教學能力", items: ["國中小輔導", "教案設計", "學習單製作"] },
  { tag: "國際視野", items: ["國際教育議題", "海外華人文化", "全球公民"] },
];

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">About</div>
        <h1 className="font-display text-5xl text-ink leading-tight">
          一個正在學習 <br />「如何讓文化被理解」的人。
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-3xl">
          我是一名高中生，就讀英語實驗班。從模擬聯合國的議事桌、Arduino 的線路板，到部落孩子手中的鉛筆，
          我發現自己最在意的，始終是同一件事──如何讓教育與文化，成為跨越距離的橋。
        </p>
      </section>

      <section className="bg-rice/50 border-y border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="text-xs tracking-[0.4em] text-jade uppercase mb-3">教育理念</div>
            <h2 className="font-display text-3xl text-ink">教育是<br />文化的延續</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-ink-soft leading-relaxed">
            <p>
              偏鄉缺的不只是資源，而是一種「被看見」的可能。我希望以華語文化為載體，
              用科技為翅膀，把一篇詩、一段歷史、一個生字，送到願意打開耳朵的孩子身邊。
            </p>
            <p>
              中華文化不是一座博物館裡的玻璃展櫃，而是一條仍在流動的長河。
              這個網站，是我在這條河上拾起的點點光。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-3">能力專區</div>
        <h2 className="font-display text-4xl text-ink mb-12">五個面向，一條主軸</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((a) => (
            <div key={a.tag} className="bg-card border border-border/70 p-6 rounded-sm">
              <div className="font-display text-2xl text-vermilion">{a.tag}</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {a.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-jade">·</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}