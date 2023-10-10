import { useState } from 'react';
import FillAlert from './FillAlert';
import { ButtonClose } from './FillAlert.styled';
import PropTypes from 'prop-types';

import { Input, Label, Button, Form, Title } from '../App.styled';
import { nanoid } from 'nanoid';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

function ContactForm({ onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const name = e.target.name;
    console.log(name);
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const handlerClickAdd = event => {
    event.preventDefault();

    if (!name || !number) {
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    onSubmit(newContact);

    setName('');
    setNumber('');
  };

  return (
    <>
      <Title style={{ paddingLeft: '50px', marginBottom: '0' }}>
        Add a new contact
      </Title>
      <Form>
        <Label>
          Name
          <Input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            onChange={handleInputChange}
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        {!name || !number ? <FillAlert /> : null}
        <Button
          type="submit"
          onClick={handlerClickAdd}
          disabled={!name || !number}
          aria-label="Add a contact"
        >
          Add
        </Button>
        <ButtonClose aria-label="icon close" onClick={onClose}>
          <CloseIcon width="10px" height="10px" />
        </ButtonClose>
      </Form>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};
