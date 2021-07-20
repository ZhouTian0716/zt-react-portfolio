import { useState } from 'react'
import "./Contact.scss"
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [textArea, setTextArea] = useState('');
    const [message, setMessage] = useState('Please complete form');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'textArea') {
            setTextArea(inputValue);
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!userName) {
            setMessage('User name required!');
            return;
        };
        if (!validateEmail(email)) {
            setMessage('Email is not valid!');
            return;
        };
        if (!textArea) {
            setMessage('Message required!');
            return;
        };
          
        setMessage('Message Sended!');
        return;
      };
    

    return (
        <form className="contact">
            <h1>Contact</h1>
            <h3>{message}</h3>
            <h3>Name:</h3>
            <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
            />
            <h3>Email address:</h3>
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <h3>Message:</h3>
            <textarea
                value={textArea}
                name="textArea"
                onChange={handleInputChange}
                type="text"
                placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}
