import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const doctorAdapter = createEntityAdapter( {
	selectId: ( doctor ) => doctor._id,
	sortComparer: ( a, b ) => a.name.localeCompare( b.name ),
} );

const initialState = doctorAdapter.getInitialState( {
	status: 'idle',
	error: null
} );

export const fetchDoctors = createAsyncThunk( 'doctors/fetchDoctors', async () =>
{
	try
	{
		const response = await axios.get( '/doctor/show-doctors' );
		return response.data;
	} catch ( error )
	{
		return error.message;
	}
} );

export const addDoctor = createAsyncThunk( 'doctors/addDoctor', async ( initialDoctor ) =>
{
	try
	{
		const response = await axios.post( '/doctor/create-doctor', initialDoctor );
		return response.data;
	} catch ( error )
	{
		return error.message;
	}

} );

export const deleteDoctor = createAsyncThunk( 'doctors/deleteDoctor', async ( initialDoctor ) =>
{
	const { id } = initialDoctor;
	try
	{
		const response = await axios.delete( `/doctor/delete/${ id }` );
		if ( response?.status === 200 ) return initialDoctor;
		return `${ response?.status }: ${ response?.statusText }`;
	} catch ( error )
	{
		return error.message;
	}

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
				doctorAdapter.upsertMany( state, loaddedContent );
			} )
			.addCase( fetchDoctors.rejected, ( state, action ) =>
			{
				state.status = 'failed';
				state.error = action.error.message;
			} )
			.addCase( addDoctor.fulfilled, ( state, action ) =>
			{
				doctorAdapter.addOne( state, action.payload );
			} )
			.addCase( deleteDoctor.fulfilled, ( state, action ) =>
			{
				const { id } = action.payload;
				doctorAdapter.removeOne( state, id );
			} )
	}
});
export const {
	selectById: selectDoctorById,
	selectIds: selectDoctorsIds,
	selectAll: selectAllDoctors, } = doctorAdapter.getSelectors( state => state.doctors );

export const getDoctorsStatus = ( state ) => state.doctors.status;
export const getDoctorsError = ( state ) => state.doctors.error;

export default doctorSlice.reducer;
