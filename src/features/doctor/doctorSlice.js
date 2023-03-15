import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store, storage } from '../../config/firebase';
import { getDocs, collection, addDoc, getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';

const initialState = {
	doctors: [],
	status: 'idle',
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
		const docId = await addDoc( doctorsCollectionRef, { newName, newRank, imageUrl: 'temp' } );
		const docRef = doc( store, 'doctors', docId.id, );
		const fileRef = ref( storage, `files/${ docId.id }` );
		await uploadBytes( fileRef, newImage );
		const imageListRef = ref( storage, 'files' );
		const res = await listAll( imageListRef );
		const item = res.items.find( ( item ) => item.name === docId.id );
		const imageUrl = await getDownloadURL( item );
		await updateDoc( docRef, { imageUrl: imageUrl } );
		const doctor = await getDoc( docRef );
		return { ...doctor.data(), id: docId.id };
	} catch ( error )
	{
		console.error( error );
	}
} )

export const deleteDoctor = createAsyncThunk( 'doctor/deleteDoctor', async ( id ) =>
{
	const deleteRef = ref( storage, `files/${ id }` );
	await deleteObject( deleteRef );
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
				console.log( state.doctors )
			} )
			.addCase( addDoctor.fulfilled, ( state, action ) =>
			{
				console.log( action.payload )
				state.status = 'Success';
				state.doctors = state.doctors.concat( action.payload );
			} )
			.addCase( deleteDoctor.pending, ( state, action ) =>
			{
				state.status = 'Loading';
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