import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/Information/InformationSlice";

export const store = configureStore({
    reducer: {
        information: informationReducer
    }
})