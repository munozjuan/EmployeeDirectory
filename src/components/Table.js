import React from "react";

function Table(props) {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="firstName" onClick={props.sortColumn}>First Name</button></th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="lastName" onClick={props.sortColumn}>Last Name</button></th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="email" onClick={props.sortColumn}>E-mail</button></th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="city" onClick={props.sortColumn}>City</button></th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="state" onClick={props.sortColumn}>State</button></th>
                        <th scope="col" className="text-center"><button className="badge badge-pill badge-info" name="country" onClick={props.sortColumn}>Country</button></th>

                    </tr>
                </thead>
                <tbody>



                    {props.results.map(result => (
                        <tr key={result.login.uuid}>
                            <td><img alt="employee" src={result.picture.thumbnail}></img></td>
                            <td className="text-center">{result.name.first}</td>
                            <td className="text-center">{result.name.last}</td>
                            <td className="text-center">{result.email}</td>
                            <td className="text-center">{result.location.city}</td>
                            <td className="text-center">{result.location.state}</td>
                            <td className="text-center">{result.location.country}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Table;
