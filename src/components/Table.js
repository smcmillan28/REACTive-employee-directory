import React from "react";

function Table(props) {
    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Employee #</th>
                        <th scope="col">Image</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td>Sam</td>
                        <td>McMillan</td>
                        <td>smcmillan1991@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;