import { IWeek } from "../types";
import { excerciseById } from "../exercises";

const week: IWeek = {
  days: [
    // Day 1
    {
      exercises: [
        {
          excercise: [excerciseById("power-snatch")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 2,
              rounds: 2
            },
            {
              weight: 70,
              reps: 2,
              rounds: 4
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 50,
              reps: "1+1",
              rounds: 2
            },
            {
              weight: 60,
              reps: "1+1",
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("front-squat")],
          rounds: [
            {
              weight: 50,
              reps: 4,
              rounds: 1
            },
            {
              weight: 60,
              reps: 4,
              rounds: 2
            },
            {
              weight: 70,
              reps: 4,
              rounds: 1
            },
            {
              weight: 75,
              reps: 4,
              rounds: 1
            },
            {
              weight: 80,
              reps: 4,
              rounds: 4
            }
          ]
        }
      ]
    },
    // Day 2
    {
      supplementary: true,
      exercises: [
        {
          excercise: [excerciseById("hyperextension")],
          rounds: [
            {
              weight: "20kg",
              reps: 6,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 30,
              reps: 2,
              rounds: 4
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 30,
              reps: "1+1",
              rounds: 4
            }
          ]
        }
      ]
    },
    // Day 3
    {
      exercises: [
        {
          excercise: [excerciseById("hang-snatch")],
          rounds: [
            {
              weight: 50,
              reps: 2,
              rounds: 2
            },
            {
              weight: 60,
              reps: 2,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 50,
              reps: "1+1",
              rounds: 2
            },
            {
              weight: 60,
              reps: "1+1",
              rounds: 1
            },
            {
              weight: 70,
              reps: "1+1",
              rounds: 2
            }
          ]
        }
      ]
    },
    // Day 4
    {
      supplementary: true,
      exercises: [
        {
          excercise: [excerciseById("hyperextension")],
          rounds: [
            {
              weight: "20kg",
              reps: 6,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("hang-snatch")],
          rounds: [
            {
              weight: 30,
              reps: 2,
              rounds: 4
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 30,
              reps: "1+1",
              rounds: 4
            }
          ]
        }
      ]
    },
    // Day 5
    {
      exercises: [
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 2,
              rounds: 2
            },
            {
              weight: 70,
              reps: 2,
              rounds: 4
            },
            {
              weight: "Find max",
              reps: 1,
              rounds: 1
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 50,
              reps: "1+2",
              rounds: 2
            },
            {
              weight: 60,
              reps: "1+2",
              rounds: 3
            },
            {
              weight: 70,
              reps: "1+2",
              rounds: 3
            },
            {
              weight: "Find max",
              reps: "1+1",
              rounds: 1
            }
          ]
        }
      ]
    }
  ]
};

export default week;
