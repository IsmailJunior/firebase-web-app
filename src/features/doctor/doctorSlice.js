import {createSlice, nanoid} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = [
	{id: nanoid(), name: 'Dr. Hamdi', rank: 'junior'}, 
	{id: nanoid(), name: 'Dr. Ibrahim', rank: 'senior'}
]

const doctorSlice = createSlice({

	name: 'doctors',
	initialState,
	reducers: {
		getDoctors: {
			reducer (state, action) {
				axios({
					method: 'GET',
					url: '/doctor/show-doctors',
				}).then((res) => {
						console.log(res.data);
					})
			}
		}		
	}
});

export const {getDoctors} = doctorSlice.actions;

export default doctorSlice.reducer;
