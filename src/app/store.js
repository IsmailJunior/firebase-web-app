import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/user/authSlice';
import doctorSlice from '../features/doctor/doctorSlice';
export const store = configureStore({
	reducer: {
		doctors: doctorSlice,
		auth: authSlice,
	}
});


