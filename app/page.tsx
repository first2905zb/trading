import Link from "next/link";
import { lessons } from "./data";

const categoryColors: Record<string, { badge: string; border: string; glow: string }> = {
  "พื้นฐาน Forex": { badge: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300", border: "hover:border-emerald-500/40", glow: "shadow-emerald-500/10" },
  "พื้นฐานการเทรด": { badge: "bg-cyan-500/20 border-cyan-500/30 text-cyan-300", border: "hover:border-cyan-500/40", glow: "shadow-cyan-500/10" },
  "Risk Management": { badge: "bg-orange-500/20 border-orange-500/30 text-orange-300", border: "hover:border-orange-500/40", glow: "shadow-orange-500/10" },
  Technical: { badge: "bg-purple-500/20 border-purple-500/30 text-purple-300", border: "hover:border-purple-500/40", glow: "shadow-purple-500/10" },
  Indicators: { badge: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300", border: "hover:border-indigo-500/40", glow: "shadow-indigo-500/10" },
  Psychology: { badge: "bg-pink-500/20 border-pink-500/30 text-pink-300", border: "hover:border-pink-500/40", glow: "shadow-pink-500/10" },
  Advanced: { badge: "bg-red-500/20 border-red-500/30 text-red-300", border: "hover:border-red-500/40", glow: "shadow-red-500/10" },
  TradingView: { badge: "bg-blue-500/20 border-blue-500/30 text-blue-300", border: "hover:border-blue-500/40", glow: "shadow-blue-500/10" },
};

const defaultColor = { badge: "bg-blue-500/20 border-blue-500/30 text-blue-300", border: "hover:border-blue-500/40", glow: "shadow-blue-500/10" };

export default function ForexCourseWebsite() {
  // Group lessons by category
  const grouped = lessons.reduce((acc, lesson) => {
    const cat = lesson.category || "อื่นๆ";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(lesson);
    return acc;
  }, {} as Record<string, typeof lessons>);

  return (
    <main className="min-h-screen bg-[#050816] text-slate-200 overflow-hidden pt-20">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#050816] via-[#0B1120] to-[#111827] text-white py-28 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_40%)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 mb-8 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300">Forex Trading Academy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            เรียน Forex
            <br />
            ตั้งแต่พื้นฐานจนเทรดเป็น
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            คอร์สสอน Forex สำหรับมือใหม่ พร้อมการใช้งาน TradingView, Risk Management, Price Action และการอ่านกราฟแบบมืออาชีพ
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#lessons" className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-500/30">
              เริ่มเรียนฟรี
            </a>
            <a href="#roadmap" className="bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition px-8 py-4 rounded-2xl">
              ดู Roadmap
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-blue-400">{lessons.length}+</h3>
              <p className="text-slate-400 mt-1 text-sm">บทเรียน</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-emerald-400">{Object.keys(grouped).length}</h3>
              <p className="text-slate-400 mt-1 text-sm">หมวดหมู่</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-purple-400">Beginner</h3>
              <p className="text-slate-400 mt-1 text-sm">เหมาะสำหรับมือใหม่</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-orange-400">Free</h3>
              <p className="text-slate-400 mt-1 text-sm">เรียนฟรีทั้งหมด</p>
            </div>
          </div>
        </div>
      </header>

      {/* LESSONS BY CATEGORY */}
      <section id="lessons" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            บทเรียนทั้งหมด
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            เรียนตั้งแต่พื้นฐาน Forex, การอ่านกราฟ, TradingView, Price Action ไปจนถึงการบริหารความเสี่ยง
          </p>
        </div>

        {Object.entries(grouped).map(([category, items]) => {
          const colors = categoryColors[category] || defaultColor;
          return (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className={`text-xs px-3 py-1 rounded-full border ${colors.badge}`}>
                  {category}
                </span>
                <span className="text-slate-500 text-sm">{items.length} บทเรียน</span>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {items.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/lessons/${lesson.slug}`}
                    className={`group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden ${colors.border} hover:-translate-y-1 transition-all duration-300 shadow-xl ${colors.glow}`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={lesson.image}
                        alt={lesson.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                          {lesson.title}
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-400 border border-white/10">
                          {lesson.level}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mb-4">{lesson.description}</p>
                      <ul className="space-y-1.5">
                        {lesson.content.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="text-blue-400 text-xs">▸</span>
                            {item}
                          </li>
                        ))}
                        {lesson.content.length > 3 && (
                          <li className="text-xs text-slate-500">+{lesson.content.length - 3} เพิ่มเติม</li>
                        )}
                      </ul>
                      {lesson.deepContent?.beginnerMistakes && (
                        <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                          <p className="text-xs font-semibold text-red-300 mb-1">⚠️ ข้อผิดพลาดที่พบบ่อย</p>
                          <p className="text-xs text-slate-400">{lesson.deepContent.beginnerMistakes[0]}</p>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="bg-gradient-to-b from-[#050816] to-[#0B1120] py-24 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-14 text-center text-white">
            Roadmap การเรียน Forex
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-emerald-500/30 transition">
              <span className="absolute -top-3 left-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1 rounded-full">Step 1</span>
              <h3 className="text-2xl font-bold mb-6 text-emerald-300">Beginner</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Forex คืออะไร</li>
                <li>• Currency Pair</li>
                <li>• Buy / Sell</li>
                <li>• Pip & Lot</li>
                <li>• TradingView</li>
              </ul>
            </div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-purple-500/30 transition">
              <span className="absolute -top-3 left-6 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs px-3 py-1 rounded-full">Step 2</span>
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Intermediate</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Candlestick</li>
                <li>• Trend</li>
                <li>• Support & Resistance</li>
                <li>• Risk Management</li>
                <li>• Trading Psychology</li>
              </ul>
            </div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-red-500/30 transition">
              <span className="absolute -top-3 left-6 bg-red-500/20 border border-red-500/30 text-red-300 text-xs px-3 py-1 rounded-full">Step 3</span>
              <h3 className="text-2xl font-bold mb-6 text-red-300">Advanced</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Smart Money Concept</li>
                <li>• Order Block</li>
                <li>• Liquidity</li>
                <li>• Market Structure</li>
                <li>• Advanced Price Action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
