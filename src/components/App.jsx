import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    this.state.contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value.toLowerCase() });
  };

  filterContactList = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterContactList()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
