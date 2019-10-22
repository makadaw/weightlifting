import { createSlice, PayloadAction } from "redux-starter-kit";
import gangProgram from "./gang8";
import { IWeek } from "./types";

interface State {
  weeks: IWeek[];
  selected?: IWeek;
}

const initialState: State = {
  weeks: gangProgram
};

interface IGetWeek {
  id: Number;
}

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    loadWeek(state, action: PayloadAction<IGetWeek>) {
      // state.week = action.payload.id
    }
  }
});

export const { loadWeek } = programSlice.actions;
export default programSlice.reducer;
