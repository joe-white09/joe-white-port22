import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1 className="section">Contact Me</h1>
            <div>
                <p>Contact Form is not fully finished, please contact by Email or Phone</p>
                    <ul>
                        <li>Email: <a href="mailto:joe_white09@yahoo.com">joe_white09@yahoo.com</a></li>
                        <li>Phone: <a href="tel:17314414211">1-731-441-4211</a></li>
                    </ul>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="container">
                    <div>
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label><br/>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </section>
    )
};

export default ContactForm;