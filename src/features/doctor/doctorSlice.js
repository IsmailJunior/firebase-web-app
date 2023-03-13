import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const initialState = {
	doctors: [],
	status: 'idle'
};

export const getDoctors = createAsyncThunk( 'doctor/getDoctors', async () =>
{
	const doctorsCollectionRef = collection( store, 'doctors' );
	try
	{
		const initialData = await getDocs( doctorsCollectionRef );
		const data = initialData.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		return data;
	} catch ( error )
	{
		console.error( error );
	}
} );

const doctorSlice = createSlice( {
	name: 'doctor',
	initialState,
	reducers: {},
	extraReducers ( builder )
	{
		builder
			.addCase( getDoctors.pending, ( state, action ) =>
			{
				state.status = 'Loading';
			} )
			.addCase( getDoctors.fulfilled, ( state, action ) =>
			{
				state.status = 'Success';
				state.doctors = state.doctors.concat( action.payload );
			} );
	}
} );
export const selectAllDoctors = ( state ) => state.doctor.doctors;
export default doctorSlice.reducer;