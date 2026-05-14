"use client";
import { useState } from "react";

const questions = [
  {
    q: "คุณขาดทุน 3 ออเดอร์ติด คุณจะทำอย่างไร?",
    options: [
      { text: "เพิ่ม Lot เพื่อเอาคืน", score: 0, feedback: "❌ นี่คือ Revenge Trade — อันตรายมาก!" },
      { text: "หยุดเทรดวันนี้ กลับมาพรุ่งนี้", score: 2, feedback: "✅ ถูกต้อง! การหยุดพักช่วยรีเซ็ตอารมณ์" },
      { text: "เทรดต่อเหมือนเดิม ไม่เปลี่ยนอะไร", score: 1, feedback: "⚠️ ดีที่ไม่เพิ่ม Lot แต่ควรพักก่อน" },
    ],
  },
  {
    q: "เห็น Gold พุ่ง 300 pip คุณจะทำอย่างไร?",
    options: [
      { text: "รีบ Buy ตามทันที!", score: 0, feedback: "❌ นี่คือ FOMO — ไล่ราคาที่ไปไกลแล้ว" },
      { text: "รอ Pullback แล้ววิเคราะห์ก่อน", score: 2, feedback: "✅ ถูกต้อง! รอจังหวะที่ดีกว่า" },
      { text: "Sell สวนเลย น่าจะลงแล้ว", score: 0, feedback: "❌ สวน Trend โดยไม่มี Confirmation อันตราย" },
    ],
  },
  {
    q: "ระบบเทรดของคุณ Win Rate 55% RR 1:2 แต่ขาดทุน 4 ครั้งติด คุณจะ?",
    options: [
      { text: "เปลี่ยนระบบใหม่ทันที", score: 0, feedback: "❌ Losing Streak เป็นเรื่องปกติ อย่าเปลี่ยนระบบเร็วเกินไป" },
      { text: "เทรดต่อตามระบบเดิม", score: 2, feedback: "✅ ถูกต้อง! ระบบ Win 55% RR 1:2 กำไรระยะยาว Losing Streak เป็นเรื่องปกติ" },
      { text: "หยุดเทรดไปเลย ระบบไม่ดี", score: 0, feedback: "❌ 4 ครั้งติดเป็นเรื่องปกติทางสถิติ อย่ายอมแพ้" },
    ],
  },
  {
    q: "คุณกำไร 5 ออเดอร์ติด รู้สึกมั่นใจมาก คุณจะ?",
    options: [
      { text: "เพิ่ม Lot เป็น 3 เท่า เพราะกำลังร้อนแรง", score: 0, feedback: "❌ Overconfidence อันตราย! Winning Streak ไม่ได้หมายความว่าจะชนะต่อ" },
      { text: "เทรดตาม Position Size เดิม", score: 2, feedback: "✅ ถูกต้อง! ไม่ว่าจะชนะหรือแพ้ ให้ทำตามแผนเดิม" },
      { text: "เทรดเยอะขึ้นเพราะกำลังดี", score: 0, feedback: "❌ Overtrading จากความมั่นใจเกินไป" },
    ],
  },
  {
    q: "คุณมีทุน $1,000 ต้องการกำไร $10,000 ใน 1 เดือน คุณจะ?",
    options: [
      { text: "ใช้ Lot ใหญ่ เสี่ยงเยอะ ทำได้!", score: 0, feedback: "❌ ความคาดหวังที่ไม่สมจริง นำไปสู่การเสี่ยงเกินไป" },
      { text: "ตั้งเป้า 5-10%/เดือน ค่อยๆ เติบโต", score: 2, feedback: "✅ ถูกต้อง! เป้าหมายที่สมจริงช่วยให้อยู่รอดระยะยาว" },
      { text: "หา Signal Group ที่การันตีกำไร", score: 0, feedback: "❌ ไม่มีใครการันตีกำไรได้ ระวังโดนหลอก" },
    ],
  },
];

export default function MindsetQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    setScore((s) => s + questions[current].options[optionIndex].score);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const maxScore = questions.length * 2;
  const percentage = Math.round((score / maxScore) * 100);

  if (finished) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <h3 className="text-lg font-bold text-white mb-4">🧠 ผลทดสอบ Mindset</h3>
        <div className={`text-5xl font-black mb-2 ${percentage >= 70 ? "text-emerald-400" : percentage >= 40 ? "text-yellow-400" : "text-red-400"}`}>
          {percentage}%
        </div>
        <p className="text-slate-400 mb-2">{score}/{maxScore} คะแนน</p>
        <p className="text-sm text-slate-300 mb-6">
          {percentage >= 70
            ? "🎉 Mindset ดีมาก! คุณมีแนวคิดของเทรดเดอร์มืออาชีพ"
            : percentage >= 40
            ? "⚠️ พอใช้ได้ แต่ยังมีจุดที่ต้องปรับปรุง"
            : "❌ ต้องปรับ Mindset ก่อนเทรดจริง ไม่งั้นจะล้างพอร์ต"}
        </p>
        <button onClick={reset} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition">
          ทำใหม่อีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">🧠 Mindset Quiz</h3>
        <span className="text-xs text-slate-500">{current + 1}/{questions.length}</span>
      </div>

      {/* Progress */}
      <div className="w-full h-1.5 bg-white/10 rounded-full mb-5">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>

      <p className="text-white font-medium mb-5">{questions[current].q}</p>

      <div className="space-y-3">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
            className={`w-full text-left p-4 rounded-xl text-sm transition ${
              selected === null
                ? "bg-white/5 border border-white/10 hover:border-blue-500/40 text-slate-300"
                : selected === i
                ? opt.score === 2
                  ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300"
                  : "bg-red-500/20 border border-red-500/30 text-red-300"
                : "bg-white/5 border border-white/10 text-slate-500"
            }`}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {selected !== null && (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-slate-300 bg-white/5 border border-white/10 rounded-xl p-3">
            {questions[current].options[selected].feedback}
          </p>
          <button onClick={next} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
            {current < questions.length - 1 ? "ข้อถัดไป →" : "ดูผลลัพธ์"}
          </button>
        </div>
      )}
    </div>
  );
}
