// import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <form onSubmit={this.props.addContact} className={styles.ContactForm}>
        <h1>Phonebook</h1>
        <div className={styles.InputsDiv}>
          <label className={styles.LabelContactForm}>
            Name{' '}
            <input
              className={styles.Input}
              onChange={this.props.handleChangeInState}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            />
          </label>
          <label className={styles.LabelContactForm}>
            Number
            <input
              className={styles.Input}
              onChange={this.props.handleChangeInState}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default ContactForm;
