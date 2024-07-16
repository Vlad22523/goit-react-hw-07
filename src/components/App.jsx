import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("contacts"));
    if (saveData) {
      return saveData;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [find, setFind] = useState("");

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((cont) => cont.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(find.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <SearchBox findContacts={setFind} find={find} />
      <ContactList deleteFunc={deleteContact} listContact={filteredContacts} />
    </div>
  );
}

export default App;
