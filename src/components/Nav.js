import React from "react";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand">GoGo Gadgets - Employee Directory</p>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search By Last Name" />
                        <button onClick={() => props.filterName} className="btn btn-outline-primary">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Nav;