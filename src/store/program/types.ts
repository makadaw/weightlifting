import { IExercise } from "./exercises";

// Store types
export interface IExcercisePercentRound {
  weight: String | Number;
  reps: String | Number;
  rounds: Number;
}

export interface IExcercisePercent {
  excercise: IExercise[];
  rounds: IExcercisePercentRound[];
  checkWeight?: Boolean;
}

export interface IDay {
  supplementary?: Boolean;
  exercises: IExcercisePercent[];
  description?: String;
}

export interface IWeek {
  days: IDay[];
  description?: String;
}

export interface IProgram {
  name: String;
  description?: String;
  url?: String;
  weeks: IWeek[];
}

export interface IPRWeigts {
  snatch: number;
  clean: number;
}
