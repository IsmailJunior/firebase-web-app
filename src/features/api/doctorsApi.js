import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const doctorsApi = createApi( {
	reducerPath: 'api',
	baseQuery: fetchBaseQuery( {
		baseUrl: 'http://localhost:4040/',
	} ),

	tagTypes: [ 'Doctors' ],
	endpoints: ( builder ) => ( {
		getDoctors: builder.query( {
			query: () => '/doctor/show-doctors',
			providesTags: [ 'Doctors' ]
		} ),
		addDoctor: builder.mutation( {
			query: ( doctor ) => ( {
				url: '/doctor/create-doctor',
				method: 'POST',
				body: doctor
			} ),
			invalidatesTags: [ 'Doctors' ]
		} ),
		deleteDoctor: builder.mutation( {
			query: ( { id } ) => ( {
				url: `/doctor/delete/${ id }`,
				method: 'DELETE',
			} ),
			invalidatesTags: [ 'Doctors' ]
		} )
	} )
} );

export const { useGetDoctorsQuery, useDeleteDoctorMutation, useAddDoctorMutation } = doctorsApi;