import { useState, useEffect } from 'react';

import { Wrapper, Title, Button } from './App.styled';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';
import ListItem from './ListContact/ListItem';
import DeliteBtn from './DeliteBtn/DeliteBtn';
import Modal from './Modal/Modal';
import ContactForm from './ContactForm/ContactForm';

const initContact = () => {
  if (localStorage.getItem('contactsArray')) {
    return JSON.parse(localStorage.getItem('contactsArray'));
  }
  return [];
};

export function App() {
  const [contacts, setContacts] = useState(initContact);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contactsArray', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => setShowModal(modal => !modal);
  const deliteAllContacts = () => setContacts([]);

  const handlerAddContact = newContact => {
    if (
      contacts.some(el =>
        el.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      alert(`${newContact.name} is alredy in contacs`);
      return;
    }
    setContacts(cont => [...cont, newContact]);

    toggleModal();
  };

  const handleInputChange = e => setFilter(e.target.value);

  const handleDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Button type="button" onClick={toggleModal}>
        Add contact
      </Button>
      <Title>Contact</Title>
      <Filter value={filter} handleInputChange={handleInputChange} />
      <ListContact>
        <ListItem
          data={contacts}
          filter={filter}
          handleDeleteContact={handleDeleteContact}
        />
      </ListContact>
      <DeliteBtn
        delite={deliteAllContacts}
        aria-label="button for delite a contact"
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={handlerAddContact} onClose={toggleModal} />
        </Modal>
      )}
    </Wrapper>
  );
}
