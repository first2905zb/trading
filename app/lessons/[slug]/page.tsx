import Link from "next/link";
import { lessons } from "@/app/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = lessons.find((item) => item.slug === slug);

  if (!lesson) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ไม่พบบทเรียน</h1>
          <Link href="/" className="text-blue-400 hover:underline">กลับหน้าแรก</Link>
        </div>
      </main>
    );
  }

  const currentIndex = lessons.findIndex((l) => l.slug === slug);
  const prev = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const next = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#050816] text-slate-200 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition">หน้าแรก</Link>
          <span>/</span>
          <span className="text-slate-300">{lesson.title}</span>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src={lesson.image}
            alt={lesson.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Title */}
        <div className="mb-10">
          <span className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full mb-4">
            {lesson.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{lesson.title}</h1>
          <p className="text-lg text-slate-400">{lesson.deepContent.introduction}</p>
        </div>

        {/* Why Important */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5">ทำไมถึงสำคัญ</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {lesson.deepContent.whyImportant.map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <span className="text-emerald-400">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5">เนื้อหา</h2>
          <ul className="space-y-3">
            {lesson.content.map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Real Example */}
        <section className="mb-10">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-blue-300 mb-3">📊 ตัวอย่างจริง</h2>
            <p className="text-slate-300">{lesson.deepContent.realExample}</p>
          </div>
        </section>

        {/* Beginner Mistakes */}
        {lesson.deepContent.beginnerMistakes && (
          <section className="mb-10">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-red-300 mb-3">⚠️ ข้อผิดพลาดที่มือใหม่มักทำ</h2>
              <ul className="space-y-2">
                {lesson.deepContent.beginnerMistakes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <span className="text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          {prev ? (
            <Link href={`/lessons/${prev.slug}`} className="group flex items-center gap-2 text-slate-400 hover:text-white transition">
              <span className="group-hover:-translate-x-1 transition">←</span>
              <span className="text-sm">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/lessons/${next.slug}`} className="group flex items-center gap-2 text-slate-400 hover:text-white transition">
              <span className="text-sm">{next.title}</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
