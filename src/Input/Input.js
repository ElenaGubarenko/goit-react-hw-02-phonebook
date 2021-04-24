import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

class Input extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        id={this.props.id}
        value={this.props.value}
        type={this.props.type}
        name={this.props.name}
        pattern={this.props.pattern}
        title={this.props.title}
        required
      />
    );
  }
}

export default Input;
