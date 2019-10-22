const list = {
  clean: {
    name: "Clean",
    type: "clean"
  },
  snatch: {
    name: "Snatch",
    type: "snatch"
  },
  "good-mornings": {
    name: "Good mornings"
  },
  hyperextension: {
    name: "Hyperextension"
  },
  "muscle-snatch": {
    name: "Muscle snatch",
    type: "snatch"
  },
  overhead: {
    name: "Overhead",
    type: "snatch"
  },
  "snatch-pull": {
    name: "Snatch pull",
    type: "snatch"
  },
  "hang-snatch": {
    name: "Hang snatch",
    type: "snatch"
  },
  "front-squat": {
    name: "Front squat",
    type: "clean"
  },
  jerk: {
    name: "Jerk",
    type: "clean"
  },
  "hang-clean": {
    name: "Hang clean",
    type: "clean"
  },
  "push-press": {
    name: "Push press",
    type: "clean"
  },
  "clean-pull": {
    name: "Clean pull",
    type: "clean"
  },
  "power-snatch": {
    name: "Power snatch",
    type: "snatch"
  },
  "hang-snatch-pull": {
    name: "Hang snatch pull",
    type: "snatch"
  },
  "back-squat": {
    name: "Back squat",
    type: "clean"
  },
  "snatch-from-deficit": {
    name: "Snatch from deficit",
    type: "snatch"
  },
  "clean-jerk": {
    name: "Clean & Jerk",
    type: "clean"
  },
  "muscle-clean": {
    name: "Muscle clean",
    type: "clean"
  },
  jumps: {
    name: "Jumps"
  },
  thruster: {
    name: "thruster",
    type: "clean"
  }
};

export type ExerciseType = "clean" | "snatch";
export interface IExercise {
  name: String;
  type?: ExerciseType;
}

type Key = keyof typeof list;
export function excerciseById(name: Key): IExercise {
  return list[name] as IExercise;
}
