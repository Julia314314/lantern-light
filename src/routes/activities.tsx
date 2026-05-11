import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "活動歷程與比賽資訊 — 拾光書語" },
      { name: "description", content: "高中文學競賽資訊整理：臺灣文學獎、台積電青年學生文學獎、桃城文學獎、後生文學獎、葉石濤短篇小說文學獎。" },
      { property: "og:title", content: "活動歷程與比賽資訊 — 拾光書語" },
      { property: "og:description", content: "華語、文學與教育相關的競賽與活動參與紀錄。" },
    ],
  }),
  component: ActivitiesPage,
});

const contests = [
  {
    name: "2026 臺灣文學獎",
    deadline: "2026 / 06 / 30",
    desc: "國家級文學獎，含小說、散文、新詩等類別。",
    url: "https://www.google.com/search?q=2026臺灣文學獎",
    level: "國家級",
  },
  {
    name: "第 23 屆 台積電青年學生文學獎",
    deadline: "近期徵件中",
    desc: "高中生最具代表性的文學競賽之一，歷屆得主多有後續創作發表。",
    url: "https://www.google.com/search?q=台積電青年學生文學獎",
    level: "高中生",
  },
  {
    name: "第 17 屆 桃城文學獎",
    deadline: "2026 年度徵件",
    desc: "嘉義市政府主辦，徵散文、新詩、小說，鼓勵在地書寫。",
    url: "https://www.google.com/search?q=桃城文學獎",
    level: "地方文學獎",
  },
  {
    name: "後生文學獎",
    deadline: "2026 年度",
    desc: "客家文學重要平台，鼓勵青年創作者書寫族群記憶與當代經驗。",
    url: "https://www.google.com/search?q=後生文學獎",
    level: "青年創作",
  },
  {
    name: "葉石濤短篇小說文學獎",
    deadline: "2026 年度",
    desc: "紀念台灣文學家葉石濤，徵短篇小說創作。",
    url: "https://www.google.com/search?q=葉石濤短篇小說文學獎",
    level: "短篇小說",
  },
] as const;

const journey = [
  {
    period: "高一",
    title: "模擬聯合國 MUN",
    desc: "擔任代表參與兩場會議，練習以英文進行政策辯論與決議草擬。",
  },
  {
    period: "高一暑假",
    title: "偏鄉華語線上學伴",
    desc: "擔任線上學伴，陪伴偏鄉學童閱讀與寫作，累積超過 60 小時陪伴時數。",
  },
  {
    period: "高二",
    title: "校內文學獎 · 散文組",
    desc: "投稿散文〈把光帶進村子裡〉，記錄一次偏鄉教學的所見所感。",
  },
  {
    period: "高二",
    title: "華語數位教材設計專題",
    desc: "與夥伴合作，使用 AI 工具設計適合國小程度的華語互動教材。",
  },
] as const;

function ActivitiesPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">活動 · 歷程</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          走過的路，<span className="text-vermilion">即將走的路</span>。
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
          這頁整理我參與過的競賽與服務，也包含我正在準備的文學獎徵件清單。
          每一場活動，都是一次靠近「應華組」這條路的練習。
        </p>
      </section>

      {/* Contest list */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ink">比賽資訊 · Contests</h2>
          <div className="text-xs text-ink-soft hidden md:block">資料整理自 獎金獵人 Bhuntr</div>
        </div>

        <div className="overflow-hidden rounded-sm border border-border/70 bg-card">
          <table className="w-full text-sm">
            <thead className="bg-rice/60 text-ink">
              <tr>
                <th className="text-left font-medium px-5 py-4">比賽名稱</th>
                <th className="text-left font-medium px-5 py-4 hidden md:table-cell">類別</th>
                <th className="text-left font-medium px-5 py-4">截止時間</th>
                <th className="text-left font-medium px-5 py-4 hidden lg:table-cell">簡介</th>
                <th className="text-right font-medium px-5 py-4">連結</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {contests.map((c) => (
                <tr key={c.name} className="hover:bg-rice/30 transition-colors">
                  <td className="px-5 py-4 text-ink font-medium">{c.name}</td>
                  <td className="px-5 py-4 text-ink-soft hidden md:table-cell">
                    <span className="inline-block text-[10px] tracking-widest uppercase border border-vermilion/40 text-vermilion px-2 py-1">
                      {c.level}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink-soft whitespace-nowrap">{c.deadline}</td>
                  <td className="px-5 py-4 text-ink-soft hidden lg:table-cell max-w-md">{c.desc}</td>
                  <td className="px-5 py-4 text-right">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vermilion hover:underline whitespace-nowrap"
                    >
                      查看 →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink-soft">＊以上資訊整理自獎金獵人 (Bhuntr)，實際徵件辦法請以主辦單位公告為準。</p>
      </section>

      {/* Journey timeline */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="font-display text-3xl text-ink mb-10">參與紀錄 · Journey</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {journey.map((j) => (
            <div key={j.title} className="border-l-2 border-jade pl-6 py-2">
              <div className="text-xs tracking-widest text-jade uppercase">{j.period}</div>
              <h3 className="mt-2 font-display text-xl text-ink">{j.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
