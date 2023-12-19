import { useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    
    useEffect(() =>{
        async function getSingleUser () {
            try {          
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const jsonUser = await response.json()
                setContact(jsonUser);
            } catch (error) {
                console.error(error)
            }
            
        }
        getSingleUser()
        
    }, [])

    console.log(contact)
    return(
        <>
        {contact ? (
            <ContactDetails contact={contact} setSelectedContactId={setSelectedContactId}/>  
        ) :(
              <div>loading...</div>        
        )}
    </>
    );

}
