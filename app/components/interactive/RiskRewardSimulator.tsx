"use client";
import { useState } from "react";

export default function RiskRewardSimulator() {
  const [riskPerTrade, setRiskPerTrade] = useState(10);
  const [rrRatio, setRrRatio] = useState(3);
  const [winRate, setWinRate] = useState(40);
  const [results, setResults] = useState<("W" | "L")[]>([]);

  const simulate = () => {
    const trades: ("W" | "L")[] = [];
    for (let i = 0; i < 10; i++) {
      trades.push(Math.random() * 100 < winRate ? "W" : "L");
    }
    setResults(trades);
  };

  const wins = results.filter((r) => r === "W").length;
  const losses = results.filter((r) => r === "L").length;
  const totalProfit = wins * (riskPerTrade * rrRatio) - losses * riskPerTrade;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">📊 Risk:Reward Simulator</h3>
      <p className="text-sm text-slate-400 mb-5">จำลอง 10 ออเดอร์เพื่อดูผลลัพธ์ของ RR Ratio</p>

      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">เสี่ยงต่อออเดอร์</span>
            <span className="text-white font-mono">${riskPerTrade}</span>
          </div>
          <input type="range" min={5} max={100} step={5} value={riskPerTrade} onChange={(e) => setRiskPerTrade(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Risk:Reward</span>
            <span className="text-white font-mono">1:{rrRatio}</span>
          </div>
          <input type="range" min={1} max={5} step={0.5} value={rrRatio} onChange={(e) => setRrRatio(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Win Rate</span>
            <span className="text-white font-mono">{winRate}%</span>
          </div>
          <input type="range" min={20} max={80} step={5} value={winRate} onChange={(e) => setWinRate(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>
      </div>

      <button
        onClick={simulate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition mb-4"
      >
        🎲 จำลอง 10 ออเดอร์
      </button>

      {results.length > 0 && (
        <div className="space-y-3 animate-[fadeIn_0.3s_ease-in]">
          {/* Trade Results */}
          <div className="flex gap-1.5 justify-center">
            {results.map((r, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${r === "W" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {r}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
              <p className="text-emerald-400 font-bold">{wins} ชนะ</p>
              <p className="text-xs text-slate-500">+${(wins * riskPerTrade * rrRatio).toFixed(0)}</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
              <p className="text-red-400 font-bold">{losses} แพ้</p>
              <p className="text-xs text-slate-500">-${(losses * riskPerTrade).toFixed(0)}</p>
            </div>
            <div className={`rounded-xl p-3 ${totalProfit >= 0 ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
              <p className={`font-bold ${totalProfit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {totalProfit >= 0 ? "+" : ""}${totalProfit.toFixed(0)}
              </p>
              <p className="text-xs text-slate-500">สุทธิ</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
