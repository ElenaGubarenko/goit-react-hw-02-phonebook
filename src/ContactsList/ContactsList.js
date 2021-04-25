import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => {
          return (
            <li key={uuidv4()}>
              {contact.name}: {contact.number}{' '}
              <button
                onClick={() => this.props.onClick(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
