"use client";
import { useState } from "react";

export default function LeverageSimulator() {
  const [capital, setCapital] = useState(1000);
  const [leverage, setLeverage] = useState(100);
  const [pipsMove, setPipsMove] = useState(50);

  const tradingPower = capital * leverage;
  const lotSize = tradingPower / 100000;
  const pipValue = lotSize * 10;
  const profitLoss = pipValue * pipsMove;
  const percentChange = (profitLoss / capital) * 100;
  const isBlown = profitLoss <= -capital;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">⚡ Leverage Simulator</h3>
      <p className="text-sm text-slate-400 mb-5">ดูผลกระทบของ Leverage ต่อพอร์ต</p>

      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">ทุน</span>
            <span className="text-white font-mono">${capital.toLocaleString()}</span>
          </div>
          <input type="range" min={100} max={10000} step={100} value={capital} onChange={(e) => setCapital(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Leverage</span>
            <span className="text-white font-mono">1:{leverage}</span>
          </div>
          <input type="range" min={1} max={500} step={1} value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} className="w-full accent-blue-500" />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1:1 (ปลอดภัย)</span>
            <span>1:100</span>
            <span>1:500 (อันตราย)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">ราคาวิ่งสวน</span>
            <span className="text-white font-mono">{pipsMove} pip</span>
          </div>
          <input type="range" min={10} max={200} step={5} value={pipsMove} onChange={(e) => setPipsMove(Number(e.target.value))} className="w-full accent-blue-500" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500">กำลังซื้อ</p>
          <p className="text-sm font-bold text-blue-400">${tradingPower.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
          <p className="text-xs text-slate-500">Lot Size</p>
          <p className="text-sm font-bold text-blue-400">{lotSize.toFixed(2)}</p>
        </div>
      </div>

      {/* Result */}
      <div className={`rounded-xl p-4 text-center ${isBlown ? "bg-red-500/20 border-2 border-red-500/50" : "bg-red-500/10 border border-red-500/20"}`}>
        {isBlown ? (
          <>
            <p className="text-2xl font-black text-red-400 mb-1">💥 MARGIN CALL</p>
            <p className="text-sm text-red-300">ล้างพอร์ต! ทุนหมด ${capital}</p>
          </>
        ) : (
          <>
            <p className="text-xs text-slate-500 mb-1">ถ้าราคาวิ่งสวน {pipsMove} pip</p>
            <p className="text-2xl font-black text-red-400">-${Math.abs(profitLoss).toFixed(2)}</p>
            <p className="text-sm text-red-300 mt-1">ขาดทุน {Math.abs(percentChange).toFixed(1)}% ของทุน</p>
          </>
        )}
      </div>

      {/* Warning */}
      {leverage > 100 && (
        <p className="text-xs text-yellow-400 mt-3 text-center">
          ⚠️ Leverage สูงกว่า 1:100 มีความเสี่ยงสูงมาก ไม่แนะนำสำหรับมือใหม่
        </p>
      )}
    </div>
  );
}
