import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  }

    render() {
    const { contacts, filter } = this.state;
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

