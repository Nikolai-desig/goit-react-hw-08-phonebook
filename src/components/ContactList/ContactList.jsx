import React from 'react';
import PropTypes from 'prop-types';
import css from './Contactlist.module.css';
import { ElementContact } from '../ElementContact/ElementCotact';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'services/contactsApi';
import { getStateContacts } from 'redux/contacts/selectors';

export function ContactList() {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.items);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getStateContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {filteredContacts.map(item => (
          <li key={item.id}>
            <ElementContact
              contacts={item}
              onDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

