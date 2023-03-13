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
				console.log( action.payload );
			} );
	}
} );

export default doctorSlice.reducer;