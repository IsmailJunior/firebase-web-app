import {configureStore} from '@reduxjs/toolkit';
import doctorReducer from '../features/doctor/doctorSlice.js';

export const store = configureStore({
	reducer: {
		doctors: doctorReducer,
	}
});


