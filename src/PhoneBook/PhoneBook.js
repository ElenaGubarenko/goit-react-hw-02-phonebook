// import { Component } = require('react');
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Input from '../Input';
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
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

    // const ifThereIsSuchContact = this.state.contacts.filter(contact => {
    //   return contact.name.toLowerCase() === this.state.name.toLowerCase();
    // });

    // if (ifThereIsSuchContact) {
    //   return alert('hello');
    // }
    // console.log(ifThereIsSuchContact);

    this.state.contacts.push(user);
    this.resetInput();
  };

  filterContactsByName = e => {
    // this.handleChangeInState(); спросить, почему тут не получается вызывть этот метод
    // почему при удалении из унпута не восстанавливается список контактов и как это исправить
    // почему ContactForm.js подчеркивает. что там не так?

    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });

    const result = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    if (this.state.filter === '') {
      this.setState({
        contacts: this.state.contacts,
      });
    } else
      this.setState({
        contacts: result,
      });
  };

  render() {
    return (
      <div>
        <ContactForm
          handleChangeInState={this.handleChangeInState}
          addContact={this.addContact}
        />
        <h1>Contacts</h1>
        <p>Find contacts by name</p>
        <Input
          onChange={this.filterContactsByName}
          name="filter"
          value={this.state.filter}
        />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default PhoneBook;
