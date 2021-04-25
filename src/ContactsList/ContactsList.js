import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

class ContactsList extends Component {
  render() {
    return (
      <ul className={styles.ContactsList}>
        {this.props.contacts.map(contact => {
          return (
            <li className={styles.ContactListItem} key={uuidv4()}>
              {contact.name}: {contact.number}{' '}
              <button
                className={styles.Delete}
                onClick={() => this.props.deleteContact(contact.id)}
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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};

export default ContactsList;
