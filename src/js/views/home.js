import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext.js";
import { ContactCard } from "../component/card.js";


export const Home = () => {


//el Context lo importamos en la linea 5
	const {actions, store} = useContext(Context); //"descuartizamos" el objeto y sacamos solamente el action y el store


	return (
	<div className="text-center mt-5">
		<h1>Contact list</h1>
	{/* funcion map desde el home para mostrar los nombres de los contactos
	en el store es donde estan guardados los contacts */}

		{
			store.contacts.map((item, index)=>{
				return (
					<ContactCard key={index} name= {item.name}/>
				)
			})
		}
	</div>
)
};
