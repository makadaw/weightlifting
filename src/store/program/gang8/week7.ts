import { IWeek } from "../types";
import { excerciseById } from "../exercises";

const week: IWeek = {
  days: [
    // Day 1
    {
      exercises: [
        {
          excercise: [excerciseById("hyperextension")],
          rounds: [
            {
              weight: "20 kg",
              reps: 6,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 3
            },
            {
              weight: 60,
              reps: 3,
              rounds: 1
            },
            {
              weight: 70,
              reps: 2,
              rounds: 2
            },
            {
              weight: 75,
              reps: 2,
              rounds: 1
            },
            {
              weight: 80,
              reps: 1,
              rounds: 2
            },
            {
              weight: 85,
              reps: 1,
              rounds: 2
            },
            {
              weight: 90,
              reps: 1,
              rounds: 2
            },
            {
              weight: 95,
              reps: 1,
              rounds: 1
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 30,
              reps: "2+2",
              rounds: 2
            },
            {
              weight: 40,
              reps: "2+2",
              rounds: 4
            }
          ]
        },
        {
          excercise: [excerciseById("front-squat")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 3,
              rounds: 1
            },
            {
              weight: 70,
              reps: 3,
              rounds: 2
            },
            {
              weight: 85,
              reps: 2,
              rounds: 2
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
          excercise: [excerciseById("good-mornings")],
          rounds: [
            {
              weight: "x",
              reps: 4,
              rounds: 2
            },
            {
              weight: "x+10kg",
              reps: 4,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 40,
              reps: 2,
              rounds: 5
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 40,
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
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 3,
              rounds: 1
            },
            {
              weight: 65,
              reps: 2,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("clean")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 3,
              rounds: 2
            },
            {
              weight: 70,
              reps: 2,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("clean-pull")],
          rounds: [
            {
              weight: 60,
              reps: 3,
              rounds: 1
            },
            {
              weight: 70,
              reps: 3,
              rounds: 1
            },
            {
              weight: 80,
              reps: 3,
              rounds: 1
            },
            {
              weight: 90,
              reps: 2,
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
              reps: 5,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 40,
              reps: 2,
              rounds: 4
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 40,
              reps: "1+1",
              rounds: 5
            }
          ]
        }
      ]
    },
    // Day 5
    {
      exercises: [
        {
          excercise: [excerciseById("hyperextension")],
          rounds: [
            {
              weight: "20kg",
              reps: 6,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("hang-snatch")],
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
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 60,
              reps: "1+1",
              rounds: 2
            },
            {
              weight: 70,
              reps: "1+1",
              rounds: 2
            },
            {
              weight: 75,
              reps: "1+1",
              rounds: 1
            },
            {
              weight: 80,
              reps: "1+1",
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("back-squat")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 3,
              rounds: 1
            },
            {
              weight: 70,
              reps: 2,
              rounds: 2
            },
            {
              weight: 85,
              reps: 1,
              rounds: 2
            }
          ]
        }
      ]
    }
  ]
};

export default week;
