import React, { Component } from 'react';
import '../styles/ContactPage.css';

class ContactPage extends Component {
  state = {
    value: '',
    isEmpty: true,
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      value: '',
      isEmpty: true,
    });
  };

  handleChange = ev => {
    if (ev.target.value.length > 0) {
      this.setState({
        value: ev.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: ev.target.value,
        isEmpty: true,
      });
    }
  };

  render() {
    return (
      <div className='contact'>
        <form onSubmit={this.handleSubmit}>
          <h4>Contact Us!</h4>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Enter your comments..'></textarea>
          <button>Send</button>
        </form>
        {/* {!this.state.isEmpty
          ? alert('Do you really want to leave this page?')
          : null} */}
      </div>
    );
  }
}

export default ContactPage;
