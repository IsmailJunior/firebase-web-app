import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
	{id: nanoid(), name: 'Dr. Hamdi', rank: 'junior'}, 
	{id: nanoid(), name: 'Dr. Ibrahim', rank: 'senior'}
]

const doctorSlice = createSlice({

	name: 'doctors',
	initialState,
});


export default doctorSlice.reducer;
