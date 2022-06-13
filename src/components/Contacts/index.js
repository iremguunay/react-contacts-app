import { useState, useEffect } from "react";

import './styles.css'

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "İrem", phone_number: "5051234566" },
    { fullname: "Ayşe", phone_number: "5059874566" },
    { fullname: "Mehmet", phone_number: "5059875166" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id='container'>
        <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
