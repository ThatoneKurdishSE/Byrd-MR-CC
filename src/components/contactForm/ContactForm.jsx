import {useState} from 'react';
import styled from 'styled-components';

function ContactForm() {
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    };


//--------Styles--------//
    const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        width: 200px;
        margin-top: 5%;
        margin-left: 40%;
        padding: 50px;
        border: none;
        text-align: flex-start;
    `;

    const StyledLabel = styled.label`
        padding: 10px;
        font-size: small;
        font-family: 'Archivo', sans-serif;
    `;
    
    const StyledInput = styled.input`
        border: transparent;
        padding: 10px;
        font-size: medium;
        font-family: 'Archivo', sans-serif;
    `;

    const StyledSubmitButton = styled.button`
        border: transparent;
        color: white;
        background-color: orange;
        padding: 8px;
        text-align: start;
        font-family: 'Archivo', sans-serif;
    `;

    const ArrowIcon = styled.div`
        border-right:3px solid #aaa;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 150px;
    `;

    const ConfirmationMessage = styled.h4`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 42px;
        font-size: 20px;
        font-family: Archivo;
    `;

    //TODO
    //Figure out how to apply autoFocus on multiple input tags
    //Currently when applied to more than one, it laggs and automatically switches to a different input box

    return(
        <div>
            <StyledForm onSubmit={handleSubmit} data-cy='contact-form'>
                <StyledLabel >FULL NAME</StyledLabel>
                <StyledInput type='text' data-cy='name' autoFocus value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter your full name'/>
                <StyledLabel>EMAIL</StyledLabel>
                <StyledInput type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
                <StyledLabel>MESSAGE</StyledLabel>
                <StyledInput type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='What are your plans?'/>
                <StyledSubmitButton type='submit' data-cy='submit-button'>SEND MESSAGE</StyledSubmitButton>
            </StyledForm>
            {submitted ? <ConfirmationMessage data-cy='confirmation-message'>We got your message. Thank you for taking the time to contact us!</ConfirmationMessage> : null}
        </div>
    );
};

export default ContactForm;