import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
  plan: {},
  exercises: [],
  days: [],
};

export const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    actionSetNamePlan: (state, action) => {
      state.plan = { ...state.plan, name: action.payload };
    },
    actionSetDayPlan: (state, action) => {
      state.days = [...state.days, action.payload];
    },
    actionSetExercises: (state, action) => {
      state.exercises = [...state.exercises, action.payload];
    },
    actionSetPlan: (state, action) => {
      state.plans = [...state.plans, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionSetNamePlan, actionSetExercises, actionSetDayPlan,actionSetPlan } =
  planSlice.actions;

export default planSlice.reducer;
