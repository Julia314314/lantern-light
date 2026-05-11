import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "聯絡 — 拾光書語" },
      { name: "description", content: "聯絡拾光書語：陳芃亘。歡迎交流文學、教育與華語推廣相關議題。" },
      { property: "og:title", content: "聯絡 — 拾光書語" },
      { property: "og:description", content: "歡迎交流文學、教育與華語推廣相關議題。" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-28">
      <div className="text-xs tracking-[0.4em] text-vermilion uppercase mb-4">聯絡 · Contact</div>
      <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
        願意聽見<span className="text-vermilion">每一個聲音</span>。
      </h1>
      <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
        如果你對偏鄉教育、華語文化推廣或文學閱讀有想法，歡迎來信交流。
        無論是合作邀請、讀後感想，或只是想聊聊一本書——我都很期待。
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border/70 rounded-sm p-8">
          <div className="text-xs tracking-[0.3em] text-vermilion uppercase">聯絡人</div>
          <div className="mt-3 font-display text-3xl text-ink">陳芃亘</div>
          <div className="mt-1 text-sm text-ink-soft">Chen Peng-Hsuan</div>
          <div className="mt-6 pt-6 border-t border-border/60">
            <div className="text-xs tracking-[0.3em] uppercase text-ink-soft mb-2">電話 / Phone</div>
            <a
              href="tel:0906611622"
              className="font-display text-2xl text-ink hover:text-vermilion transition-colors"
            >
              0906 · 611 · 622
            </a>
          </div>
        </div>

        <div className="bg-ink text-paper rounded-sm p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs tracking-[0.3em] text-gold uppercase">寄一封信</div>
            <p className="mt-3 font-display text-2xl leading-snug">
              「以教育傳承文化，<br />以科技連結偏鄉。」
            </p>
          </div>
          <div className="mt-8 text-sm text-paper/70 leading-relaxed">
            如果你正在準備類似的學習歷程、或正在進行華語教學的志工計畫，
            非常歡迎一起交流——我們可能正在做同一件值得的事。
          </div>
        </div>
      </div>

      <div className="mt-16 pt-10 border-t border-border/60 text-center">
        <div className="seal mx-auto w-14 h-14 text-sm">書語</div>
        <p className="mt-4 text-xs tracking-[0.4em] text-ink-soft uppercase">
          Thank you for reading.
        </p>
      </div>
    </div>
  );
}
