import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/actions';
import { ContactList, ContactItem, Button } from '../styles';

const ContactListComponent = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleEdit = (contact) => {
    const newName = prompt('Novo nome:', contact.name);
    const newEmail = prompt('Novo e-mail:', contact.email);
    const newPhone = prompt('Novo telefone:', contact.phone);

    if (newName && newEmail && newPhone) {
      dispatch(editContact({ ...contact, name: newName, email: newEmail, phone: newPhone }));
    }
  };

  return (
    <ContactList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <span>{contact.name} - {contact.email} - {contact.phone}</span>
          <div>
            <Button onClick={() => handleEdit(contact)}>Editar</Button>
            <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
          </div>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactListComponent;
