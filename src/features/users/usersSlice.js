import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
	{ id: nanoid(), name: 'ismail' },
	{ id: nanoid(), name: 'ali' },
	{ id: nanoid(), name: 'ibrahim' },
];

const usersSlice = createSlice( {
	name: 'users',
	initialState,
	reducers: {}
} );

export const selectAllUsers = ( state ) => state.users;
export default usersSlice.reducer;