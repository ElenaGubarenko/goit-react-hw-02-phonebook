import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles.FilterDiv}>
        <p className={styles.FindTitle}>Find contacts by name</p>
        <input
          onChange={this.props.filterContactsByName}
          value={this.props.value}
          name={this.props.name}
          required
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filterContactsByName: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Filter;
