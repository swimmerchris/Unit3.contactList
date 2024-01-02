

export default function ContactRow ({setSelectedContactId, contact} ) {
    return (
        <tr onClick={() =>{
            setSelectedContactId(contact.id);
        }} className="row">
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    ); 
}