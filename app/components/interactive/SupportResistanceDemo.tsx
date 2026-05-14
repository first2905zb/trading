"use client";
import { useState } from "react";

const scenarios = [
  {
    name: "Bounce จากแนวรับ",
    description: "ราคาลงมาแตะแนวรับแล้วดีดกลับขึ้น",
    action: "Buy",
    entry: "ที่แนวรับ + Confirmation",
    sl: "ใต้แนวรับ 10-20 pip",
    tp: "แนวต้านถัดไป",
  },
  {
    name: "Reject จากแนวต้าน",
    description: "ราคาขึ้นไปชนแนวต้านแล้วถูกกดลง",
    action: "Sell",
    entry: "ที่แนวต้าน + Confirmation",
    sl: "เหนือแนวต้าน 10-20 pip",
    tp: "แนวรับถัดไป",
  },
  {
    name: "Break แนวต้าน",
    description: "ราคาทะลุแนวต้านขึ้นไป → แนวต้านเก่ากลายเป็นแนวรับใหม่",
    action: "Buy",
    entry: "รอ Pullback กลับมาที่แนวต้านเก่า",
    sl: "ใต้แนวต้านเก่า",
    tp: "แนวต้านถัดไป",
  },
  {
    name: "Break แนวรับ",
    description: "ราคาหลุดแนวรับลงไป → แนวรับเก่ากลายเป็นแนวต้านใหม่",
    action: "Sell",
    entry: "รอ Pullback กลับมาที่แนวรับเก่า",
    sl: "เหนือแนวรับเก่า",
    tp: "แนวรับถัดไป",
  },
];

export default function SupportResistanceDemo() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">📈 Support & Resistance Scenarios</h3>
      <p className="text-sm text-slate-400 mb-5">เลือก Scenario เพื่อดูวิธีเทรด</p>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {scenarios.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-xs py-2 px-3 rounded-lg font-medium transition text-left ${active === i ? "bg-blue-600 text-white" : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"}`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Scenario Detail */}
      <div className="space-y-3">
        <p className="text-sm text-slate-300">{scenarios[active].description}</p>

        <div className="grid grid-cols-2 gap-3">
          <div className={`rounded-xl p-3 ${scenarios[active].action === "Buy" ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
            <p className="text-xs text-slate-500">Action</p>
            <p className={`font-bold ${scenarios[active].action === "Buy" ? "text-emerald-400" : "text-red-400"}`}>
              {scenarios[active].action === "Buy" ? "🟢" : "🔴"} {scenarios[active].action}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
            <p className="text-xs text-slate-500">Entry</p>
            <p className="text-sm text-slate-200">{scenarios[active].entry}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
            <p className="text-xs text-slate-500">Stop Loss</p>
            <p className="text-sm text-red-300">{scenarios[active].sl}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
            <p className="text-xs text-slate-500">Take Profit</p>
            <p className="text-sm text-emerald-300">{scenarios[active].tp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
