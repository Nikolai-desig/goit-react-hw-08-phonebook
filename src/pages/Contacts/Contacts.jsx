import ContactForm from 'components/Form/Form';
import  Filter  from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={css.contacts}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}