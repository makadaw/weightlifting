import { IPRWeigts } from "./types";
import { IExercise } from "./exercises";

function kgFromPercentWeight({
  weights,
  exc,
  percent
}: {
  weights: IPRWeigts;
  exc: IExercise;
  percent: number;
}): number {
  if (exc.type === "clean") {
    return Math.floor((weights.clean / 100) * percent);
  } else if (exc.type === "snatch") {
    return Math.floor((weights.snatch / 100) * percent);
  }
  return 0;
}

export { kgFromPercentWeight };
