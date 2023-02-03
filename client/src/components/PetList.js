import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default props => {

    return (
        <>
        <h2>Pet Shelter!</h2>
        <h5>Estas mascotas están en busca de un hogar</h5>
        <Link to={'/create'}>
            <button style={{marginBottom:"10px"}}>Agrega una mascota a la lista</button>
        </Link>
        <table style={{margin: "0 auto", border: "1px solid black", borderCollapse: "collapse", width: "66%"}}>
            <thead>
                <tr>
                    <th style={{border: "1px solid black", width: "30%"}}>Name</th>
                    <th style={{border: "1px solid black", width: "40%"}}>Type</th>
                    <th style={{border: "1px solid black", width: "30%"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.pets.map((pet, index)=>{
                    return (
                        <tr key={index}>
                            <td style={{border: "1px solid black"}}>
                                {pet.name}
                            </td>
                            <td style={{border: "1px solid black"}}>{pet.type}</td>
                            <td style={{border: "1px solid black"}}>
                                <Link to={`/pet/${pet._id}`}>
                                    <button style={{marginRight:"5px"}}>Detalles</button>
                                </Link>
                                <Link to={`/pet/edit/${pet._id}`}>
                                    <button>Editar</button>
                                </Link>
                                
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
    };
    

