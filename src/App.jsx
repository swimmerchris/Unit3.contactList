import {useState} from 'react'
import ContactList  from "./components/ContactList.jsx"
import SelectedContact from './components/SelectedContact.jsx';
import './App.css'

function App() {
  const [selectContactId, setSelectedContactId ] = useState(null);

  return (
    <>
      {selectContactId ? (
        <SelectedContact selectedContactId={selectContactId} setSelectedContactId={setSelectedContactId}/>
      )  :  (
      <ContactList setSelectedContactId={setSelectedContactId}/>
      )} 
    </>
  );
}

export default App
