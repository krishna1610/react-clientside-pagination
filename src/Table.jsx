import React from "react";

const Table = ({data}) => {
    return (<table>
    <thead>
        <tr>
            <th>Country</th>
            <th>Capital</th>
        </tr>
    </thead>
    <tbody>
    {data.map((item, index)=>{
        return <tr key={index}>
            <td>{item.country}</td>
            <td>{item.capital}</td>
        </tr>
    })}
    </tbody>
    </table>)
};

export default Table;
