import { createSlice, PayloadAction } from "redux-starter-kit";
import gangProgram from "./gang8";
import { IProgram } from "./types";

interface State {
  programs: IProgram[]
  selected?: IProgram;
}

const initialState: State = {
  programs: [gangProgram]
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
