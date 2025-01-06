import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contactsData from './data/contacts.json';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');

    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = ({ name, number }) => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const searchContacts = searchValue => {
    setSearch(searchValue);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <div className="upper-container">
        <div className="container">
          <ContactForm onAdd={addContact} />
          <SearchBox search={search} onChange={searchContacts} />
        </div>
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
};

export default App;
