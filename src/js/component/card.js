import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const ContactCard = ({ id, phone, email, address, nombre,edit }) => {
    const { actions } = useContext(Context);

    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/200" + "?u=" + nombre} className="img-fluid rounded-circle" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{nombre}</h5>                          
                            <div>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => edit()}>
                                <i className="fa-solid fa-pencil"></i>
                            </button>

                            <button className="border-0 bg-light" onClick={() => actions.deleteContact(id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <p><i className="fa-solid fa-location-dot"></i> {address}</p>
                            <p><i className="fa-solid fa-phone"></i> {phone}</p>
                            <p><i className="fa-regular fa-envelope"></i> {email}</p>
                         
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    );
};
