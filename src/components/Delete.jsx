import React, { useContext } from 'react'
import context from '../context/context'

function Delete() {
    const {deleteClients, clients} = useContext(context)
    
  return (
    <>
    <button onClick={() => {deleteClients(clients.id)}} className="btn btn-danger"> Borrar </button>
    </>
  )
}

export default Delete