import {configureStore} from '@reduxjs/toolkit';
import doctorSlice from '../features/doctor/doctorSlice.js';

export const store = configureStore({
	reducer: {
	doctors: doctorSlice,
	}
});


