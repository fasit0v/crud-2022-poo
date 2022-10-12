import React, { useEffect, useContext } from 'react';
import context from '../context/context';

const Show = () => {
    const {getClients, lstClients} =  useContext(context);
    
    useEffect(() => {
        getClients()
        
    }, []);

    return (
    <div> 
      <h4 className='text-center'> Clients </h4>
      <table className="table table-dark table-hover">
        <thead className="text-center ">
          <tr>
            <th className="text-center">id</th>
            <th className="text-center">name</th>
            <th className="text-center">lastName</th>
            <th className="text-center">address</th>
            <th className="text-center">phoneNumber</th>
            <th className="text-center">email</th>
          </tr>

        </thead>
    <tbody className='text-center'>
      {
        lstClients.map((clients) => (
            <tr key={clients.id}>
            <td>{clients.id}</td>
            <td>{clients.name}</td>
            <td>{clients.lastName}</td>
            <td>{clients.address}</td>
            <td>{clients.phoneNumber}</td>
            <td>{clients.email}</td></tr>
          ))}
    </tbody>
    </table>
    </div>
  )
}

export default Show