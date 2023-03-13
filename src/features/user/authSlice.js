import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const initialState = {
	status: 'idle'
};

export const signUp = createAsyncThunk( 'auth/signUp', async ( { email, password } ) =>
{
	try
	{
		await createUserWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.error( error.message );
	}
} );

export const signIn = createAsyncThunk( 'auth/signIn', async ( { email, password } ) =>
{
	try
	{
		await signInWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.error( error.message );
	}
} );
export const logOut = createAsyncThunk( 'auth/logOut', async () =>
{
	try
	{
		await signOut( auth );
	} catch ( error )
	{
		console.error( error.message );
	}
} );
export const signInGoogle = createAsyncThunk( 'auth/signInGoogle', async () =>
{
	try
	{
		await signInWithPopup( auth, googleProvider );
	} catch ( error )
	{
		console.error( error.message );
	}
} );

const authSlice = createSlice( {
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers ( builder )
	{
		builder.addCase( signUp.pending, ( state, action ) =>
		{
			state.status = 'Loading';
		} )
			.addCase( signUp.rejected, ( state, action ) =>
			{
				state.status = 'Failed';
			} )
			.addCase( signUp.fulfilled, ( state, action ) =>
			{
				state.status = 'idle';
			} )
			.addCase( signIn.rejected, ( state, action ) =>
			{
				state.status = 'Failed';
			} )
			.addCase( signIn.pending, ( state, action ) =>
			{
				state.status = 'Laoding';
			} )
			.addCase( signIn.fulfilled, ( state, action ) =>
			{
				state.status = 'idle';
			} )
			.addCase( logOut.pending, ( state, action ) =>
			{
				state.status = 'Loading';
			} )
			.addCase( logOut.fulfilled, ( state, action ) =>
			{
				state.status = 'idle';
			} )
			.addCase( signInGoogle.pending, ( state, action ) =>
			{
				state.status = 'Loading';
			} )
			.addCase( signInGoogle.rejected, ( state, action ) =>
			{
				state.status = 'Failed';
			} )
			.addCase( signInGoogle, ( state, action ) =>
			{
				state.status = 'idle';
			} );
	}
} );

export const selectStatus = ( state ) => state.status;
export default authSlice.reducer;