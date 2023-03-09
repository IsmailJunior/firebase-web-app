import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	doctors: [],
	status: 'idle',
	error: null
}

export const fetchDoctors = createAsyncThunk( 'doctors/fetchDoctors', async () =>
{
	const response = await axios.get( '/doctor/show-doctors' );
	return [ ...response.data ];
} )

const doctorSlice = createSlice( {
	name: 'doctors',
	initialState,
	reducers: {},
	extraReducers ( bulider )
	{
		bulider
			.addCase( fetchDoctors.pending, ( state, action ) =>
			{
				state.status = 'loading';
			} )
			.addCase( fetchDoctors.fulfilled, ( state, action ) =>
			{
				state.status = 'succeeded';
				const loaddedContent = action.payload.map( ( doctor ) =>
				{
					return doctor;
				} );
				state.doctors = state.doctors.concat( loaddedContent );
			} )
			.addCase( fetchDoctors.rejected, ( state, action ) =>
			{
				state.status = 'failed';
				state.error = action.error.message;
			} )
	}
});

export const selectAllDoctors = ( state ) => state.doctors.doctors;
export const getDoctorsStatus = ( state ) => state.doctors.status;
export const getDoctorsError = ( state ) => state.doctors.error;
export default doctorSlice.reducer;
