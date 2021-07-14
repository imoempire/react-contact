import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state={
                    Name: '',
                    Phone: '',
                    Location: '',
                    
                }
    };
    handleChange=(e)=>{
     this.setState({[e.target.name] : e.target.value})
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            Name: '',
            Phone: '',
            Location: '',
        })
    }
    render() {
        return (
            <>
     <Form onSubmit={this.handleSubmit} style={{color: 'white' }}>
         <Form.Group controlId="formBasicName">
         <Form.Label htmlFor="name">Name</Form.Label>
         <Form.Control type="text" name="Name" htmlFor="Name"
         placeholder="Name" className="input"
         onChange={this.handleChange} 
         value={this.state.Name} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicNumber">
          <Form.Label htmlFor="Number">Phone</Form.Label>
         <Form.Control type="number" name="Phone" htmlFor="Phone"
         className="input"
         placeholder="Phone"
         onChange={this.handleChange} 
         value={this.state.Phone} 
         />
         </Form.Group>
         <Form.Group controlId="formBasicLocation">
             <Form.Label htmlFor="Location">Location</Form.Label>
         <Form.Control type="text" name="Location" htmlFor="Location" 
         className="input"
         placeholder="Location" 
         onChange={this.handleChange} 
         value={this.state.Location} 
         />
         </Form.Group>
            <Button variant="primary" type="submit">Add To Contact</Button>
     </Form>
            </>
        )
    }
}
