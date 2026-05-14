import { basicLessons } from "./basic";
import { tradingLessons } from "./trading";
import { technicalLessons } from "./technical";
import { indicatorLessons } from "./indicators";
import { psychologyLessons } from "./psychology";
import { advancedLessons } from "./advanced";
import { tradingviewLessons } from "./tradingview";

export const lessons = [
  ...basicLessons,
  ...tradingLessons,
  ...technicalLessons,
  ...indicatorLessons,
  ...psychologyLessons,
  ...advancedLessons,
  ...tradingviewLessons,
].sort((a, b) => a.order - b.order);
