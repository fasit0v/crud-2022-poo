import React , { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import databaseContext from "./context"
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function FirestoreContext (props){
    const {children} = props
    const [clients, setClients] = useState ([]);
    const clientsCollection = collection (db, "misClientes")

    const getClients = async () => {
        const snap = await getDocs(clientsCollection)
        const lstUsers = []
        snap.forEach((e)=>{
          lstUsers.push({...e.data(),id: e.id})
        })
        setClients(lstUsers)
    }
    const deleteClients = async (id) => {
    const clientsDoc = doc(db, "products", id)
    await deleteDoc (clientsDoc)
    getClients()
    }
  return (
    <databaseContext.Provider value={{getClients,lstClients:clients,deleteClients}}>{children}</databaseContext.Provider>
  )
}