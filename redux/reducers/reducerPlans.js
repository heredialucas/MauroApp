import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: {},
  plan: {},
  exercises: [],
};

export const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    actionSetNamePlan: (state, action) => {
      state.plan = { ...state.plan, name: action.payload };
    },
    actionSetDayPlan: (state, action) => {
      state.plan = { ...state.plan, days: action.payload};
      console.log(state.plan);
    },
    actionSetExercises: (state, action) => {
      state.exercises = [...state.exercises, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionSetNamePlan, actionSetExercises, actionSetDayPlan } =
  planSlice.actions;

export default planSlice.reducer;
