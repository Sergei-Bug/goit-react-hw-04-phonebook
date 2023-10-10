import { Component } from 'react';

import { Wrapper, Title, Button } from './App.styled';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';
import ListItem from './ListContact/ListItem';
import DeliteBtn from './DeliteBtn/DeliteBtn';
import Modal from './Modal/Modal';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    if (localStorage.getItem('contactsArray')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contactsArray') || []),
      });
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        'contactsArray',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  toggleModal = () => {
    //переключення модалки
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  deliteAllContacts = () => {
    this.setState({ contacts: [] }); //видалення всіх контактів при натисненні на кнопку
  };

  handlerAddContact = newContact => {
    // з ContactForm приймаємо данні про новий контакт
    if (this.state.contacts !== '') {
      if (
        this.state.contacts.some(el =>
          el.name.toLowerCase().includes(newContact.name.toLowerCase())
        )
      ) {
        // якщо масив має така ім'я виводимо повідомлення
        alert(`${newContact.name} is alredy in contacs`);
        return;
      }
    }
    this.setState(prevState => ({
      // від поточного стану
      contacts: [...prevState.contacts, newContact], //розпилюємо в новий масив поточний стан + додаємо новий контакт
    }));

    this.toggleModal(); //закриття модалки після додавання контакту
  };
  handleInputChange = e => {
    const name = e.target.name; // динамічне визначення назви поля
    this.setState({ [name]: e.currentTarget.value }); // інтуп залежить від state.name, при введенні прослуховуємо подію + записуємо нове значення в state
  };
  // фільтрація
  handleDeleteContact = contactId => {
    //приймаємо ід елементу на який клікнули
    this.setState(prevState => ({
      //пед попереднього стану
      contacts: prevState.contacts.filter(contact => contact.id !== contactId), // викидуємо елемент ід якого співпадає, фільтрований масив відображається
    }));
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Button type="button" onClick={this.toggleModal}>
          Add contact
        </Button>
        <Title>Contact</Title>
        <Filter
          value={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <ListContact>
          <ListItem
            data={this.state.contacts}
            filter={this.state.filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        </ListContact>
        <DeliteBtn
          delite={this.deliteAllContacts}
          aria-label="button for delite a contact"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactForm
              onSubmit={this.handlerAddContact}
              onClose={this.toggleModal}
            />
          </Modal>
        )}
      </Wrapper>
    );
  }
}
export default App;
