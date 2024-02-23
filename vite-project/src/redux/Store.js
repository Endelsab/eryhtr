import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./useSlice";


const Store = configureStore({
	reducer: {
		data: dataReducer,
	},
	
});

export default Store;