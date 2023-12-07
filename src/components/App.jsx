import { useSelector } from 'react-redux';

import ContactList from './contactList/contactList';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';

import style from './App.module.css';

const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={style.form}>
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter></Filter>
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default App;
