

export default function ContactDetails ({contact, setSelectedContactId}) {
    return (
    <div>
        <h1>{contact.name}</h1>
        <hr />
        <p>Username: {contact.username}</p>
        <hr />
        <p>{contact.name} works at {contact.company.name} who's company slogan is {contact.company.catchPhrase} and there mission is to {contact.company.bs}</p>
        <hr />
        <address>
            Visit {contact.name} at:<br />
            {contact.address.street}<br />
            {contact.address.suite}, {contact.address.city}<br />
            {contact.address.zipcode}
        </address>
        <hr />
        <p>
            Contact {contact.name} at {contact.email} <br />
            Website: <a href={contact.website}>{contact.website}</a>
        </p>
        <p></p>
        <button onClick={() => {setSelectedContactId(null)}}>Back to Contacts</button>
    </div>
    )
}