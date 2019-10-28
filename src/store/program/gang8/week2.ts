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
              reps: 10,
              rounds: 3
            }
          ]
        },
        {
          excercise: [
            excerciseById("clean"),
            excerciseById("front-squat"),
            excerciseById("jerk")
          ],
          rounds: [
            {
              weight: 50,
              reps: "2+2+2",
              rounds: 2
            },
            {
              weight: 60,
              reps: "2+1+2",
              rounds: 2
            },
            {
              weight: 70,
              reps: "2+1+2",
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
              rounds: 3
            },
            {
              weight: 85,
              reps: 3,
              rounds: 1
            },
            {
              weight: 90,
              reps: 2,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("front-squat")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 1
            },
            {
              weight: 60,
              reps: 3,
              rounds: 2
            },
            {
              weight: 70,
              reps: 3,
              rounds: 2
            },
            {
              weight: 80,
              reps: 3,
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
          excercise: [excerciseById("hyperextension")],
          rounds: [
            {
              weight: "20kg",
              reps: 8,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("muscle-snatch")],
          rounds: [
            {
              weight: 40,
              reps: 4,
              rounds: 5
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 40,
              reps: "2+2",
              rounds: 5
            }
          ]
        }
      ]
    },
    // Day 3
    {
      exercises: [
        {
          excercise: [excerciseById("good-mornings")],
          rounds: [
            {
              weight: "Xkg",
              reps: 6,
              rounds: 2
            },
            {
              weight: "+10kg",
              reps: 6,
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("snatch-from-deficit")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 2
            },
            {
              weight: 60,
              reps: 3,
              rounds: 5
            }
          ]
        },
        {
          excercise: [excerciseById("snatch-pull")],
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
              rounds: 3
            },
            {
              weight: 90,
              reps: 2,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("front-squat")],
          rounds: [
            {
              weight: 50,
              reps: "2+2",
              rounds: 2
            },
            {
              weight: 60,
              reps: "1+2",
              rounds: 2
            },
            {
              weight: 70,
              reps: "1+2",
              rounds: 3
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
              rounds: 3,
              reps: 8
            }
          ]
        },
        {
          excercise: [excerciseById("snatch")],
          rounds: [
            {
              weight: 40,
              rounds: 5,
              reps: 3
            }
          ]
        },
        {
          excercise: [excerciseById("muscle-clean")],
          rounds: [
            {
              weight: 40,
              rounds: 5,
              reps: 4
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
              rounds: 4,
              reps: 8
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
              rounds: 1
            },
            {
              weight: 70,
              reps: 3,
              rounds: 2
            },
            {
              weight: 75,
              reps: 2,
              rounds: 2
            },
            {
              weight: 80,
              reps: 2,
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
              reps: 3,
              rounds: 2
            },
            {
              weight: 70,
              reps: 3,
              rounds: 2
            },
            {
              weight: 75,
              reps: 2,
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("back-squat")],
          rounds: [
            {
              weight: 50,
              reps: 3,
              rounds: 1
            },
            {
              weight: 60,
              reps: 3,
              rounds: 2
            },
            {
              weight: 70,
              reps: 3,
              rounds: 2
            },
            {
              weight: 80,
              reps: 3,
              rounds: 2
            },
            {
              weight: 90,
              reps: 2,
              rounds: 2
            }
          ]
        }
      ]
    }
  ]
};

export default week;
