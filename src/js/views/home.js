import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext.js";
import { ContactCard } from "../component/card.js";
import Editar from "../component/editar.js";


export const Home = () => {


//el Context lo importamos en la linea 5
	const {actions, store} = useContext(Context); //"descuartizamos" el objeto y sacamos solamente el action y el store

	const [edit, setEdit] = useState({
		showModal:false,
		id: undefined
	})

	return (
	<div className="text-center mt-5">
		<h1>Contact list</h1>

		{
			store.contacts.map((item, index)=>{
				return (
					<ContactCard 
					key={index}
					nombre={item.name}
					id={item.id}
					phone={item.phone}
					email={item.email}
					address={item.address}
					edit={() => setEdit({showModal:true, id:item.id})}
					/>
				)
			})
		}
		<Editar 
		id={edit.id}
		show={edit.showModal}
		onClose={() => setEdit({showModal:false})}
		/>
	</div>
)
};
