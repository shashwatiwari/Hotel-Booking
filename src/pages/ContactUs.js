import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic here to handle form submission, like sending an email.
        console.log('Form submitted with data:', this.state);
    };

    render() {
        return (
            <div className="contact-form">
                <h2>Contact <span style={{ color: '#af9a7d' }} >Us</span></h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button className="button-C" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
