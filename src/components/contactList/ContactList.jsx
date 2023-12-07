import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Contacts } from 'components/contacts/Contacts';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectGetContacts,
  selectGetFilter,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectGetContacts);
  const filter = useSelector(selectGetFilter);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {isLoading && !error && <p>Loading...</p>}
      {filteredContacts.map(contact => (
        <Contacts key={contact.id} contact={contact} />
      ))}
      <button className={css.delButton} onClick={() => onDelete(contacts.id)}>
        Delete contact
      </button>
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
