import React from "react";

export const CreateContact = () => {
    return (
        <div>
            <h1>Add a new contact</h1>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter address" />
            </div>

            <button type="button" class="btn btn-primary">Primary</button>

        </div>
    )
}