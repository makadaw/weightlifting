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
              reps: "8",
              rounds: 4
            }
          ]
        },
        {
          excercise: [
            excerciseById("muscle-snatch"),
            excerciseById("overhead")
          ],
          rounds: [
            {
              weight: 30,
              reps: "4",
              rounds: 2
            },
            {
              weight: 40,
              reps: "4",
              rounds: 3
            }
          ]
        },
        {
          excercise: [
            excerciseById("snatch-pull"),
            excerciseById("hang-snatch")
          ],
          rounds: [
            {
              weight: 50,
              reps: "1+2",
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
        },
        {
          excercise: [excerciseById("front-squat"), excerciseById("jerk")],
          rounds: [
            {
              weight: 50,
              reps: "2+2",
              rounds: 2
            },
            {
              weight: 60,
              reps: "2+2",
              rounds: 2
            },
            {
              weight: 70,
              reps: "2+2",
              rounds: 3
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
              rounds: 3,
              reps: 6
            }
          ]
        },
        {
          excercise: [excerciseById("thruster")],
          rounds: [
            {
              weight: 40,
              rounds: 2,
              reps: 5
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
              weight: 0,
              reps: "6",
              rounds: 2
            },
            {
              weight: 10,
              reps: "5",
              rounds: 2
            }
          ]
        },
        {
          excercise: [excerciseById("hang-clean")],
          rounds: [
            {
              weight: 50,
              reps: "3",
              rounds: 2
            },
            {
              weight: 60,
              reps: "3",
              rounds: 1
            },
            {
              weight: 70,
              reps: "3",
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("push-press")],
          rounds: [
            {
              weight: 50,
              reps: "3",
              rounds: 2
            },
            {
              weight: 60,
              reps: "3",
              rounds: 3
            }
          ]
        },
        {
          excercise: [excerciseById("clean-pull")],
          rounds: [
            {
              weight: 60,
              reps: "1",
              rounds: 3
            },
            {
              weight: 70,
              reps: "3",
              rounds: 3
            },
            {
              weight: 80,
              reps: "3",
              rounds: 2
            },
            {
              weight: 85,
              reps: "3",
              rounds: 1
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
          excercise: [excerciseById("hang-snatch")],
          rounds: [
            {
              weight: 40,
              rounds: 3,
              reps: 5
            }
          ]
        },
        {
          excercise: [excerciseById("clean-jerk")],
          rounds: [
            {
              weight: 40,
              rounds: 2,
              reps: "2+2"
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
              rounds: 3,
              reps: 8
            }
          ]
        },
        {
          excercise: [excerciseById("power-snatch")],
          rounds: [
            {
              weight: 40,
              rounds: 2,
              reps: 3
            },
            {
              weight: 60,
              rounds: 2,
              reps: 2
            },
            {
              weight: 70,
              rounds: 4,
              reps: 2
            }
          ],
          checkWeight: true
        },
        {
          excercise: [
            excerciseById("snatch-pull"),
            excerciseById("hang-snatch-pull")
          ],
          rounds: [
            {
              weight: 60,
              rounds: 1,
              reps: "1+2"
            },
            {
              weight: 70,
              rounds: 2,
              reps: "1+2"
            },
            {
              weight: 80,
              rounds: 1,
              reps: "1+2"
            },
            {
              weight: 85,
              rounds: 4,
              reps: "1+2"
            }
          ]
        },
        {
          excercise: [excerciseById("back-squat")],
          rounds: [
            {
              weight: 50,
              rounds: 1,
              reps: 4
            },
            {
              weight: 60,
              rounds: 2,
              reps: 4
            },
            {
              weight: 70,
              rounds: 1,
              reps: 4
            },
            {
              weight: 75,
              rounds: 1,
              reps: 4
            },
            {
              weight: 80,
              rounds: 4,
              reps: 4
            }
          ]
        }
      ]
    }
  ]
};

export default week;
