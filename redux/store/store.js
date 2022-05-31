import { configureStore } from '@reduxjs/toolkit';
import plans from '../reducers/reducerPlans';

export const store = configureStore({
    reducer: {
        Plans: plans
    }
});