// import { Component } = require('react');
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Input from '../Input';
import ContactsList from '../ContactsList';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  resetInput = () => {
    this.setState({
      name: '',
    });
  };

  handleChangeInState = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = () => {
    const user = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.setState({
      contacts: [...this.state.contacts, this.state.contacts.push(user)],
    });
    this.resetInput();
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Input
          onChange={this.handleChangeInState}
          id={uuidv4()}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
        <Input
          onChange={this.handleChangeInState}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button onClick={this.addContact}>Add contact</button>
        <h1>Contacts</h1>
        <ContactsList state={this.state} />
      </div>
    );
  }
}

export default PhoneBook;
