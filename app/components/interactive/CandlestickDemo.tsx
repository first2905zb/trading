"use client";
import { useState } from "react";

const candles = [
  { open: 1.085, high: 1.092, low: 1.083, close: 1.09, label: "Bullish Engulfing" },
  { open: 1.09, high: 1.091, low: 1.082, close: 1.083, label: "Bearish" },
  { open: 1.083, high: 1.088, low: 1.08, close: 1.087, label: "Hammer" },
  { open: 1.087, high: 1.095, low: 1.086, close: 1.094, label: "Bullish Marubozu" },
  { open: 1.094, high: 1.096, low: 1.089, close: 1.09, label: "Shooting Star" },
];

export default function CandlestickDemo() {
  const [selected, setSelected] = useState<number | null>(null);

  const priceToY = (price: number) => {
    const min = 1.078;
    const max = 1.098;
    return 180 - ((price - min) / (max - min)) * 160;
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">🕯️ Interactive Candlestick Chart</h3>
      <p className="text-sm text-slate-400 mb-4">คลิกที่แท่งเทียนเพื่อดูข้อมูล</p>

      <div className="flex items-end justify-center gap-4 h-52 mb-4">
        {candles.map((c, i) => {
          const isBullish = c.close > c.open;
          const bodyTop = priceToY(Math.max(c.open, c.close));
          const bodyBottom = priceToY(Math.min(c.open, c.close));
          const bodyHeight = bodyBottom - bodyTop;
          const wickTop = priceToY(c.high);
          const wickBottom = priceToY(c.low);

          return (
            <div
              key={i}
              className={`relative cursor-pointer transition-all duration-300 ${selected === i ? "scale-110" : "hover:scale-105"}`}
              style={{ height: "200px", width: "36px" }}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              {/* Wick */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[2px]"
                style={{
                  top: `${wickTop}px`,
                  height: `${wickBottom - wickTop}px`,
                  background: isBullish ? "#22c55e" : "#ef4444",
                }}
              />
              {/* Body */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-6 rounded-sm transition-all ${selected === i ? "ring-2 ring-white/50" : ""}`}
                style={{
                  top: `${bodyTop}px`,
                  height: `${Math.max(bodyHeight, 4)}px`,
                  background: isBullish ? "#22c55e" : "#ef4444",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Info Panel */}
      {selected !== null && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 animate-[fadeIn_0.2s_ease-in]">
          <p className="text-sm font-bold text-white mb-2">{candles[selected].label}</p>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="text-center">
              <p className="text-slate-500">Open</p>
              <p className="text-slate-200 font-mono">{candles[selected].open.toFixed(4)}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-500">High</p>
              <p className="text-emerald-400 font-mono">{candles[selected].high.toFixed(4)}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-500">Low</p>
              <p className="text-red-400 font-mono">{candles[selected].low.toFixed(4)}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-500">Close</p>
              <p className="text-slate-200 font-mono">{candles[selected].close.toFixed(4)}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {candles[selected].close > candles[selected].open
              ? "✅ แท่งเขียว (Bullish) — แรงซื้อชนะ"
              : "🔴 แท่งแดง (Bearish) — แรงขายชนะ"}
          </p>
        </div>
      )}
    </div>
  );
}
