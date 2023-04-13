import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  
  render() {
    const { name } = this.state;
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm name={name}/>

  <h2>Contacts</h2>
 
</div>
  );
};
}
