import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";

function Table(props) {
    const sortDown = <FontAwesomeIcon icon={faSortAmountDown} />

    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Employee Username</th>
                        <th scope="col">Employee Age <button onClick={() => props.sortAge()}>{sortDown}</button></th>
                        <th scope="col">Image</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.username}</th>
                        <th scope="row">{props.age}</th>
                        <td><img src={props.photo} alt="employee"></img></td>
                        <td>{props.firstname}</td>
                        <td>{props.lastname}</td>
                        <td>{props.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;