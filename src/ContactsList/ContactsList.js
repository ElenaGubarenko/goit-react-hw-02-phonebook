import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

class ContactsList extends Component {
  render() {
    // console.log(this.props);
    // this.props.state.contacts.map(contact => console.log(contact));
    return (
      <ul>
        {this.props.contacts.map(contact => {
          return (
            <li key={uuidv4()}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
