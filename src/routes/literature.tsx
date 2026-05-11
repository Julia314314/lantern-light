import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/literature")({
  head: () => ({
    meta: [
      { title: "文壇賞析 — 拾光書語" },
      { name: "description", content: "六部經典文學作品的閱讀筆記與賞析：人間失格、傲慢與偏見、小王子、邊城、朝花夕拾、解憂雜貨店。" },
      { property: "og:title", content: "文壇賞析 — 拾光書語" },
      { property: "og:description", content: "六部經典文學作品的閱讀筆記與賞析。" },
    ],
  }),
  component: LiteraturePage,
});

const reviews = [
  {
    title: "《人間失格》賞析",
    author: "太宰治",
    tag: "日本 · 私小說",
    accent: "vermilion",
    quote: "「生而為人，我很抱歉。」",
    body: [
      "太宰治以葉藏的三本手記，剖開一個被「扮演正常」吞噬的靈魂。書中所謂的失格，並非道德的潰敗，而是一個過於敏感的人，無法在虛偽的人際裡找到棲身之處。",
      "閱讀這本書讓我反思教育的另一面——當我們要求孩子合群、聽話、笑得自然，是否也在無意間讓某些靈魂學會了「假面」。真正的教育，應該是允許脆弱，也允許不一樣。",
    ],
  },
  {
    title: "《傲慢與偏見》賞析",
    author: "Jane Austen",
    tag: "英國 · 古典小說",
    accent: "jade",
    quote: "“It is a truth universally acknowledged…”",
    body: [
      "奧斯汀以細膩的諷刺筆法，描繪十九世紀英國鄉紳社會的婚姻、階級與成長。伊莉莎白與達西的拉鋸，本質上是兩種偏見的相互修正。",
      "從應華組的角度看，這部作品提供了極佳的中英對照素材：同一句話，在直譯與意譯之間，藏著文化的距離。語言不只是工具，更是一種觀看世界的方式。",
    ],
  },
  {
    title: "《小王子》賞析",
    author: "Antoine de Saint-Exupéry",
    tag: "法國 · 哲思童話",
    accent: "vermilion",
    quote: "「真正重要的東西，用眼睛是看不見的。」",
    body: [
      "看似童話，其實是一封寫給大人的長信。小王子離開他的玫瑰、走過七顆星球，最後在沙漠裡學會：羈絆是時間累積出來的責任。",
      "這本書是我每年都會重讀的一本。每次讀，都像是被狐狸再馴養一次——提醒自己，教育偏鄉孩子也是同一件事：你為他花費的時間，使他變得獨一無二。",
    ],
  },
  {
    title: "《邊城》賞析",
    author: "沈從文",
    tag: "中華文學 · 鄉土小說",
    accent: "jade",
    quote: "「這個人也許永遠不回來了，也許明天回來。」",
    body: [
      "沈從文以湘西小鎮茶峒為背景，寫翠翠與爺爺、與儺送之間那種未說出口的情感。整部作品像一幅水墨：山是淡的、人是淡的，連悲傷也是淡的。",
      "《邊城》讓我重新認識中華文學的「留白」美學。它不靠戲劇衝突推動，而是靠氛圍與沉默。這種敘事方式，正是華語教學中最難、卻也最值得傳承的部分。",
    ],
  },
  {
    title: "《朝花夕拾》賞析",
    author: "魯迅",
    tag: "中華文學 · 散文集",
    accent: "vermilion",
    quote: "「從百草園到三味書屋。」",
    body: [
      "魯迅以回憶為刀，溫柔卻鋒利。〈藤野先生〉裡的師生情、〈父親的病〉裡對舊式醫術的失望，都讓人看見一個知識分子如何在傳統與現代之間掙扎。",
      "這本書對我而言是一面鏡子：教育從來不是中性的，它承載著時代的偏見與希望。讀魯迅，是在學一件事——保留懷疑，但不失溫度。",
    ],
  },
  {
    title: "《解憂雜貨店》賞析",
    author: "東野圭吾",
    tag: "日本 · 當代小說",
    accent: "jade",
    quote: "「請相信，所有的煩惱，都會在未來找到答案。」",
    body: [
      "三個小偷誤闖一間能跨越時空收信的雜貨店，意外串起數十年的人生抉擇。東野圭吾用溫柔取代懸疑，告訴讀者：每一個看似微小的回應，都可能改變另一個人的一生。",
      "這本書讓我想到偏鄉志工的角色。我們也許不能解決所有問題，但一封信、一次陪伴，就足以成為某個孩子記憶裡的「浪矢雜貨店」。",
    ],
  },
] as const;

function LiteraturePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">文壇 · 賞析</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          六本書，<span className="text-vermilion">六種看世界的方式</span>。
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
          從太宰治到沈從文，從奧斯汀到東野圭吾——這些作品橫跨東西、跨越時代，
          卻都在追問同一個問題：人，要怎麼好好地活著？
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-10 md:grid-cols-2">
        {reviews.map((r, i) => (
          <article
            key={r.title}
            className={`relative bg-card border border-border/70 p-8 md:p-10 rounded-sm hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className={`text-xs tracking-[0.3em] uppercase ${r.accent === "vermilion" ? "text-vermilion" : "text-jade"}`}>
                第 {String(i + 1).padStart(2, "0")} 篇
              </span>
              <span className="text-xs text-ink-soft">{r.tag}</span>
            </div>
            <h2 className="font-display text-3xl text-ink">{r.title}</h2>
            <div className="mt-1 text-sm text-ink-soft">{r.author}</div>
            <blockquote className={`mt-6 pl-4 border-l-2 ${r.accent === "vermilion" ? "border-vermilion" : "border-jade"} font-display text-lg text-ink/90 italic`}>
              {r.quote}
            </blockquote>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
              {r.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
