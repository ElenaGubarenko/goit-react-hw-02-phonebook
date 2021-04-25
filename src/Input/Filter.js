import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <input
        onChange={this.props.filterContactsByName}
        value={this.props.value}
        name={this.props.name}
        required
      />
    );
  }
}

Filter.propTypes = {
  filterContactsByName: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Filter;
