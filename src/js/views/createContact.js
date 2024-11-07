import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const CreateContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});


    return (
        <div className="container mx-5">
            <h1>Add a new contact</h1>
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
            <div className="d-flex flex-column">
                <button onClick={async () => {
                    await actions.createContact(newContact)
                    navigate("/")
                }} type="button" className="btn btn-primary">Save</button>

                <Link to="/">
                    or get back to contacts
                </Link>
            </div>
        </div>
    )
}