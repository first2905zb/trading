"use client";
import { useState } from "react";

export default function PositionSizeCalculator() {
  const [capital, setCapital] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(2);
  const [slPips, setSlPips] = useState(30);

  const riskAmount = capital * (riskPercent / 100);
  const pipValue = 10; // $10 per pip per standard lot
  const lotSize = riskAmount / (slPips * pipValue);
  const maxLoss = riskAmount;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">📐 Position Size Calculator</h3>
      <p className="text-sm text-slate-400 mb-5">คำนวณ Lot Size ที่เหมาะสมกับทุนและความเสี่ยง</p>

      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">ทุน (Account Balance)</span>
            <span className="text-white font-mono">${capital.toLocaleString()}</span>
          </div>
          <input type="range" min={100} max={50000} step={100} value={capital} onChange={(e) => setCapital(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">ความเสี่ยง (%)</span>
            <span className={`font-mono ${riskPercent > 3 ? "text-red-400" : riskPercent > 2 ? "text-yellow-400" : "text-emerald-400"}`}>{riskPercent}%</span>
          </div>
          <input type="range" min={0.5} max={10} step={0.5} value={riskPercent} onChange={(e) => setRiskPercent(Number(e.target.value))} className="w-full accent-blue-500" />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-emerald-400">0.5% (ปลอดภัย)</span>
            <span className="text-yellow-400">2% (แนะนำ)</span>
            <span className="text-red-400">10% (อันตราย)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Stop Loss (pip)</span>
            <span className="text-white font-mono">{slPips} pip</span>
          </div>
          <input type="range" min={5} max={100} step={5} value={slPips} onChange={(e) => setSlPips(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>
      </div>

      {/* Result */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 text-center">
        <p className="text-sm text-slate-400 mb-2">Lot Size ที่ควรใช้</p>
        <p className="text-4xl font-black text-blue-400">{lotSize.toFixed(2)}</p>
        <p className="text-xs text-slate-500 mt-2">
          ขาดทุนสูงสุด = ${maxLoss.toFixed(2)} ({riskPercent}% ของทุน)
        </p>
      </div>

      {/* Formula */}
      <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-3">
        <p className="text-xs text-slate-500 font-mono text-center">
          Lot = (${capital} × {riskPercent}%) ÷ ({slPips} pip × $10) = {lotSize.toFixed(2)}
        </p>
      </div>

      {riskPercent > 3 && (
        <p className="text-xs text-red-400 mt-3 text-center">
          ⚠️ เสี่ยงเกิน 3% ต่อออเดอร์ ถ้าแพ้ 5 ครั้งติดจะเสียทุน {(riskPercent * 5).toFixed(0)}%
        </p>
      )}
    </div>
  );
}
