import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../../config/firebase';
import { getDocs, collection, addDoc, getDoc, doc, deleteDoc } from 'firebase/firestore';

const initialState = {
	doctors: [],
	status: 'idle'
};

const doctorsCollectionRef = collection( store, 'doctors' );

export const getDoctors = createAsyncThunk( 'doctor/getDoctors', async () =>
{
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

export const addDoctor = createAsyncThunk( 'doctor/addDoctor', async ( { name: newName, rank: newRank, image: newImage } ) =>
{
	try
	{
		const docId = await addDoc( doctorsCollectionRef, { newName, newRank, newImage } );
		const docRef = doc( store, 'doctors', docId.id );
		const doctor = await getDoc( docRef );
		return { ...doctor.data(), id: docId.id };
	} catch ( error )
	{
		console.error( error );
	}
} )

export const deleteDoctor = createAsyncThunk( 'doctor/deleteDoctor', async ( id ) =>
{
	const docRef = doc( store, 'doctors', id );
	await deleteDoc( docRef );
	return id;
} )

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
			} )
			.addCase( addDoctor.fulfilled, ( state, action ) =>
			{
				state.status = 'Success';
				state.doctors = state.doctors.concat( action.payload );
			} )
			.addCase( deleteDoctor.pending, ( state, action ) =>
			{
				state.status = 'Loading';
				// const doctor = state.doctor.doctors.find( ( doctor ) => doctor.id === action.payload );
				console.log( 'Loading' );
			} )
			.addCase( deleteDoctor.fulfilled, ( state, action ) =>
			{
				state.status = 'Success';
				const doctors = state.doctors.filter( doctor => doctor.id !== action.payload );
				state.doctors = [ ...doctors ];
			} )
	}
} );
export const selectAllDoctors = ( state ) => state.doctor.doctors;
export default doctorSlice.reducer;