import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        { Name: 'John',
          Phone: '0244945255',
          Location: 'Accra'}
      ],
    };
  }
  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contact: [...this.state.contact, newContact],
    });
  };

  handleDeleteContact = (contactsId) => {
    const newArr = this.state.contact.filter((contacts) => {
      return contacts.id !== contactsId;
    });
    this.setState({ contact: newArr });
  };
  handleEditContact=(updatedContacts)=>{
  this.setState({
    contact: this.state.contact.map((contacts) =>
    contacts.id === updatedContacts.id ? updatedContacts : contacts 
    ),
  });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3"><ContactForm 
            addContact={this.handleAddContact} 
            /></div>
            <div className="col">
            <h1>All Contacts</h1>
            <ContactsList 
            contact={this.state.contact} 
            handleDeleteContact={this.handleDeleteContact}
            handleEditContact={this.handleEditContact}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
