"use client";
import { useState } from "react";

export default function PipCalculator() {
  const [lot, setLot] = useState(0.1);
  const [pips, setPips] = useState(50);
  const [direction, setDirection] = useState<"profit" | "loss">("profit");

  const pipValue = lot * 10; // USD per pip for standard pairs
  const result = pipValue * pips;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">🧮 Pip Calculator</h3>
      <p className="text-sm text-slate-400 mb-5">ลองปรับค่าเพื่อดูกำไร/ขาดทุน</p>

      <div className="space-y-4">
        {/* Lot Size */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Lot Size</span>
            <span className="text-white font-mono">{lot.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.01}
            max={1}
            step={0.01}
            value={lot}
            onChange={(e) => setLot(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>0.01 (Micro)</span>
            <span>0.1 (Mini)</span>
            <span>1.0 (Standard)</span>
          </div>
        </div>

        {/* Pips */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">จำนวน Pip</span>
            <span className="text-white font-mono">{pips} pip</span>
          </div>
          <input
            type="range"
            min={1}
            max={200}
            step={1}
            value={pips}
            onChange={(e) => setPips(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Direction */}
        <div className="flex gap-2">
          <button
            onClick={() => setDirection("profit")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${direction === "profit" ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300" : "bg-white/5 border border-white/10 text-slate-400"}`}
          >
            กำไร ↑
          </button>
          <button
            onClick={() => setDirection("loss")}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${direction === "loss" ? "bg-red-500/20 border border-red-500/30 text-red-300" : "bg-white/5 border border-white/10 text-slate-400"}`}
          >
            ขาดทุน ↓
          </button>
        </div>

        {/* Result */}
        <div className={`rounded-xl p-4 text-center ${direction === "profit" ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
          <p className="text-sm text-slate-400 mb-1">ผลลัพธ์</p>
          <p className={`text-3xl font-black ${direction === "profit" ? "text-emerald-400" : "text-red-400"}`}>
            {direction === "profit" ? "+" : "-"}${result.toFixed(2)}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Pip Value = ${pipValue.toFixed(2)}/pip × {pips} pip
          </p>
        </div>
      </div>
    </div>
  );
}
