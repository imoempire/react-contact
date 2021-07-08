import React, { Component } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import ContactForm from "./Components/ContactForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          Name: 'James',
          Phone: '0205050991',
          Location: 'Kumasi',
        },
        {
          Name: 'Kirk',
          Phone: '0545050791',
          Location: 'Accra',
        },
      ]
    }
  }
  handleAddContact=(newContact)=>{
    this.setState({
      contact: [...this.state.contact, newContact]
    })
  }
  render() {
    const contact = this.state.contact.map((contact, index) => {
      return (
        <Contact contact={contact} index={index} />
      )
    })
    return (
      <div className="App">
        <ContactForm addContact={this.handleAddContact}/>
        <h1>All Contacts</h1>
        {contact}
      </div>
    );
  }
}
