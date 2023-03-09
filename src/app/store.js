import {configureStore} from '@reduxjs/toolkit';
import doctorReducer from '../features/doctor/doctorSlice.js';
import usersReducer from '../features/users/usersSlice.js';

export const store = configureStore({
	reducer: {
		doctors: doctorReducer,
		users: usersReducer
	}
});


