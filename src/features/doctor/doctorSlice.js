import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = []

const doctorSlice = createSlice( {
	name: 'doctors',
	initialState,
	reducers: {
		addDoctor: {
			reducer ( state, action )
			{
				state.unshift( action.payload );
			},
			prepare ( name, rank )
			{
				return {
					payload: {
						id: nanoid(),
						name,
						rank
					}
				};
			}
		}
	}
});

export const selectAllDoctors = ( state ) => state.doctors;
export const { addDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
