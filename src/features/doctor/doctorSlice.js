import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const initialState = {
	doctors: []
};

export const getDoctors = createAsyncThunk( 'doctors/getDoctors', async () =>
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
	name: 'doctors',
	initialState,
	reducers: {},
	extraReducers ( builder )
	{
		builder
			.addCase( getDoctors.fulfilled, ( state, action ) =>
			{
				const loadedContent = action.payload.map( ( doctor ) =>
				{
					const newDoctor = { ...doctor, id: doctor.id };
					return newDoctor;
				} );
				console.log( loadedContent );
				state.doctors = state.doctors.concat( loadedContent )
			} );
	}
} );

export default doctorSlice.reducer;