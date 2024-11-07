import React from "react";


export const ContactCard = (props) => {
    return (
        <div className="card mb-3 mx-auto" style={{maxWidth:"540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/200" + "?u=" + props.name} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}