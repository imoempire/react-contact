import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";

export default class App extends Component {
  
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
