import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';
import React from 'react';

import css from './contactList.module.css';

const Contacts = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(contact => {
    return (
      <ul className={css.list} key={contact.id}>
        <li className={css.contact} key={contact.id}>
          {contact.name} - {contact.number}
          <button
            className={css.delButton}
            onClick={() => {
              dispatch(remove(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};

export default Contacts;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
