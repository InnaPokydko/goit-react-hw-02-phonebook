import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
      }

    render() {
    const {  filter } = this.state;
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.handleSubmit}/>
  <h2>Contacts</h2>
  <Filter value={filter} onChange={this.changeFilter}/>
</div>
  );
};
}

