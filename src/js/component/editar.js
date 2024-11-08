import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const Editar = ({id}) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});


    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input onChange={(event) => setNewContact({ ...newContact, name: event.target.value })} value={newContact.name || ""} type="text" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input onChange={(event) => setNewContact({ ...newContact, email: event.target.value })} value={newContact.email || ""} type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input onChange={(event) => setNewContact({ ...newContact, phone: event.target.value })} value={newContact.phone || ""} type="text" className="form-control" placeholder="Enter phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input onChange={(event) => setNewContact({ ...newContact, address: event.target.value })} value={newContact.address || ""} type="text" className="form-control" placeholder="Enter address" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick= {()=> actions.editContact(newContact, id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editar;