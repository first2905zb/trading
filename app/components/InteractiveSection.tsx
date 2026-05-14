"use client";
import dynamic from "next/dynamic";

const CandlestickDemo = dynamic(() => import("./interactive/CandlestickDemo"));
const PipCalculator = dynamic(() => import("./interactive/PipCalculator"));
const RiskRewardSimulator = dynamic(() => import("./interactive/RiskRewardSimulator"));
const LeverageSimulator = dynamic(() => import("./interactive/LeverageSimulator"));
const CurrencyPairExplorer = dynamic(() => import("./interactive/CurrencyPairExplorer"));
const PositionSizeCalculator = dynamic(() => import("./interactive/PositionSizeCalculator"));
const SupportResistanceDemo = dynamic(() => import("./interactive/SupportResistanceDemo"));
const MindsetQuiz = dynamic(() => import("./interactive/MindsetQuiz"));

const interactiveMap: Record<string, React.ComponentType[]> = {
  "what-is-forex": [CurrencyPairExplorer],
  "currency-pair": [CurrencyPairExplorer],
  "pip-and-lot": [PipCalculator],
  "leverage": [LeverageSimulator],
  "buy-and-sell": [PipCalculator],
  "stop-loss": [PipCalculator, RiskRewardSimulator],
  "risk-reward": [RiskRewardSimulator],
  "position-sizing": [PositionSizeCalculator],
  "candlestick": [CandlestickDemo],
  "support-resistance": [SupportResistanceDemo],
  "smart-money-concept": [SupportResistanceDemo, CandlestickDemo],
  "order-block": [CandlestickDemo],
  "trading-psychology": [MindsetQuiz],
  "trader-mindset": [MindsetQuiz],
  "fomo": [MindsetQuiz],
  "discipline": [MindsetQuiz],
  "patience": [MindsetQuiz],
  "loss-acceptance": [MindsetQuiz],
  "trading-routine": [MindsetQuiz],
};

export default function InteractiveSection({ slug }: { slug: string }) {
  const components = interactiveMap[slug];
  if (!components || components.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-5">🎮 ลองเล่นดู</h2>
      <div className="space-y-6">
        {components.map((Component, i) => (
          <Component key={i} />
        ))}
      </div>
    </section>
  );
}
