import { createContext, useRef, useState } from "react";
import axios from "axios";

 const DoctorContext = createContext( null );

export const DoctorContextProvider = ( { children } ) =>
{
	const [ isPostingComplete, setIsPostingComplete ] = useState( false );
	const [ reload, setReload ] = useState();
	const [doctors, setDoctors] = useState([])
	const nameRef = useRef( "" );
	const rankRef = useRef( "" );
	const imageRef = useRef( "" );
	const createDoctor = (e) =>
	{
		e.preventDefault();
		axios( {
		method: "POST",
		url: "/doctor/create-doctor",
			withCredentials: true,
			data: {
				name: nameRef.current.value,
				rank: rankRef.current.value,
				image: imageRef.current.value
		}
	} ).then( ( res ) =>
	{
		console.log( res.data );
		nameRef.current.value = null;
		rankRef.current.value = null;
		setIsPostingComplete(true)
	})
	}
	const getDoctors = () =>
	{
		axios( {
			method: "GET",
			url: "/doctor/show-doctors",
			withCredentials: true
		} ).then( ( res ) =>
		{
			setDoctors(  res.data );
			console.log(res.data)
		})
	}

	const deleteDoctor = (id) =>
	{
		axios( {
			method: "DELETE",
			url: `/doctor/delete/${ id }`,
			withCredentials: true
		} ).then( ( res ) =>
		{
			console.log( res.data );
			setReload(!reload)
		})
	}

	const context = {
		createDoctor,
		getDoctors,
		deleteDoctor,
		doctors,
		nameRef,
		rankRef,
		imageRef,
		setIsPostingComplete,
		isPostingComplete,
		setReload,
		reload
	}
	return (
		<DoctorContext.Provider value={context}>
			{children}
		</DoctorContext.Provider>
	)
};

export default DoctorContext;