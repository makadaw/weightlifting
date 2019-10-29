import { IProgram } from "../types";

import * as week1 from "./week1";
import * as week2 from "./week2";
import * as week3 from "./week3";
import * as week4 from "./week4";
import * as week5 from "./week5";
import * as week6 from "./week6";
import * as week7 from "./week7";
import * as week8 from "./week8";

const gangProgram: IProgram = {
  name: "Gang 8 weeks program",
  description: "TOROKHTIY_GANG TRAINING PROGRAM (8 weeks). More details also here https://www.reddit.com/r/weightlifting/comments/4p6dbs/torokhtiy_gang_training_program_8_weeks/",
  url: "https://www.facebook.com/Torokhtiyo/photos/a.1534401943446315.1073741828.1532539936965849/1787365451483295/",
  weeks: [
    week1.default,
    week2.default,
    week3.default,
    week4.default,
    week5.default,
    week6.default,
    week7.default,
    week8.default
  ]
};

export default gangProgram;
