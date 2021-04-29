import React from "react";
// import employees from "../employees.json";

function Jumbo() {
    return (
        <div>
            <div className="jumbotron">
                <h3 className="display-4">Welcome to your employee directory!</h3>
                <p className="lead">Below you will find basic information about the hard workers that make your company go.  You can sort by age below, or filter/search by last name above.</p>
                <hr className="my-4"></hr>
            </div>
        </div>
    )
}

export default Jumbo;