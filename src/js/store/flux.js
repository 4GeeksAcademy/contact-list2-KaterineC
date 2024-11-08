const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Ejecutamos el action que va a llenar esos contactos con los amigos

			getContact: async () => {

				const resp = await fetch("https://playground.4geeks.com/contact/agendas/drastone");
				if (!resp.ok){
					const actions= getActions()
					await actions.createAgenda()
					return 
				}
				const data = await resp.json();
				console.log(data);
				//lo que vamos a actualizar, llamamos ese objeto
				setStore({ contacts: data.contacts });
			},

			//creamos contacto
			createContact: async (newContact) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/drastone/contacts", {
						method: "POST",
						headers: myHeaders,
						body: JSON.stringify(newContact),
					});
					if (resp.ok) {
						await getActions().getContact();
					} else {
						console.error("Error en la creación del contacto:");
					}
				} catch (error) {
					console.error("Error de conexión:", error);
				}
			},
			createAgenda: async () => {
				try {					
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/drastone', {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
					if (resp.status == 201) {
						await getActions().getContact()
					}
				} catch (error) {
					console.log(error);
					return false
				}

			},

			deleteContact: async (contact_id) => {
				const resp = await fetch("https://playground.4geeks.com/contact/agendas/drastone/contacts/" + contact_id, {
					method: "DELETE"
				});
				console.log(resp)
				if (resp.ok) {
					await getActions().getContact(); 
				} else {
					console.log("Error al eliminar contacto");
				}
			},

			editContact: async (newContact, id) => {			
		
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/drastone/contacts/" + id , {
						method: "PUT",
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify(newContact),
					});
					if (resp.ok) {
						await getActions().getContact();
					} else {
						console.error("Error en la modificación del contacto:");
					}
				} catch (error) {
					console.error("Error de conexión:", error);
				}
			},


		}

	};
};


export default getState;
