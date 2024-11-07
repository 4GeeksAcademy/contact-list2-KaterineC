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

				const resp = await fetch(process.env.BACKEND_URL + "/agendas/drastone");
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
					const resp = await fetch(process.env.BACKEND_URL + "/agendas/drastone/contacts", {
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
			}

		}

	};
};


export default getState;
