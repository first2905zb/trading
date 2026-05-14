"use client";
import { useState } from "react";

const pairs = [
  { symbol: "EUR/USD", name: "Euro / US Dollar", spread: "0.6-1.5 pip", type: "Major", volatility: "ปานกลาง", bestTime: "London & NY Session", note: "คู่เงินที่มีสภาพคล่องสูงที่สุด เหมาะกับมือใหม่" },
  { symbol: "GBP/USD", name: "British Pound / US Dollar", spread: "1-2 pip", type: "Major", volatility: "สูง", bestTime: "London Session", note: "วิ่งแรง เหมาะกับคนชอบ Volatility" },
  { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", spread: "0.7-1.5 pip", type: "Major", volatility: "ปานกลาง", bestTime: "Asian & NY Session", note: "Pip คำนวณต่างจากคู่อื่น (0.01)" },
  { symbol: "XAU/USD", name: "Gold / US Dollar", spread: "2-5 pip", type: "Commodity", volatility: "สูงมาก", bestTime: "NY Session", note: "วิ่งแรงมาก ต้องมี Risk Management ดี" },
  { symbol: "USD/THB", name: "US Dollar / Thai Baht", spread: "10-50 pip", type: "Exotic", volatility: "ต่ำ", bestTime: "Asian Session", note: "Spread สูง ไม่เหมาะกับ Scalping" },
];

export default function CurrencyPairExplorer() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">💱 Currency Pair Explorer</h3>
      <p className="text-sm text-slate-400 mb-5">คลิกเพื่อดูข้อมูลแต่ละคู่เงิน</p>

      {/* Pair Buttons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {pairs.map((pair, i) => (
          <button
            key={pair.symbol}
            onClick={() => setSelected(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${selected === i ? "bg-blue-600 text-white" : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"}`}
          >
            {pair.symbol}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-white">{pairs[selected].symbol}</h4>
          <span className={`text-xs px-2 py-0.5 rounded-full ${pairs[selected].type === "Major" ? "bg-emerald-500/20 text-emerald-300" : pairs[selected].type === "Exotic" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"}`}>
            {pairs[selected].type}
          </span>
        </div>
        <p className="text-sm text-slate-400">{pairs[selected].name}</p>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white/5 rounded-lg p-2">
            <p className="text-xs text-slate-500">Spread</p>
            <p className="text-sm font-medium text-slate-200">{pairs[selected].spread}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <p className="text-xs text-slate-500">Volatility</p>
            <p className="text-sm font-medium text-slate-200">{pairs[selected].volatility}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <p className="text-xs text-slate-500">Best Time</p>
            <p className="text-sm font-medium text-slate-200">{pairs[selected].bestTime}</p>
          </div>
        </div>

        <p className="text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
          💡 {pairs[selected].note}
        </p>
      </div>
    </div>
  );
}
