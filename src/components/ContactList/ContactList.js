import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}:</p>
          <p className={s.text}>{number}</p>
          <button onClick={() => onDeleteContact(id)} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
