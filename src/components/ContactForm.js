import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import { Input, Button } from '../styles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    id: Date.now(),
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(contact));
    setContact({
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Nome"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={contact.phone}
        onChange={handleChange}
        required
      />
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default ContactForm;
