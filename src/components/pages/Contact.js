import React, { useState, useRef } from 'react';
import { Container, Header, Divider, Segment, Image, Icon, Button, Input, Grid } from 'semantic-ui-react'
import '../../index.css';
import emailjs from '@emailjs/browser';

// Here we import a helper function that will check if the email is valid
import { checkInput, validateEmail } from '../../utils/helpers';

function Form() {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2jvt9sw', 'template_rfh806d', form.current, 'fi6DyF5liZbQqqiaz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (!checkInput(inputValue)) {
      setErrorMessage(
        `A valid ${inputType} is required`
      );
      return;
    }
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setErrorMessage('')
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!checkInput(message)) {
      setErrorMessage(
        `A message is required`
      );
      return;
    }
    alert(`Message sent successfully, ${name}`);
    sendEmail();
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');

  };

  return (
    <Grid>
    <Grid.Row columns={3}>
      <Grid.Column width={16}>
    <div>
      <Container textAlign='center'>
        <Segment basic textAlign='center'>
            <Header color='violet' as='h1'>
                <Header.Content><Icon name='envelope outline'/>Thank you for your interest in contacting me {name}</Header.Content>
            </Header>
        </Segment>
      </Container>
      <div style={{ backgroundImage: "url(Images/bg-1.jpeg), url(Images/bg-2.jpeg)", backgroundSize: 'contain, 65%', backgroundRepeat:'no-repeat', backgroundPosition: 'left, right'}}>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <Input size='huge' icon='at' iconPosition='left'
          value={email}
          name="email"
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
                <Divider hidden />
        <Input size='huge' icon='user circle' iconPosition='left'
          value={name}
          name="name"
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
                <Divider hidden />
        <Input size='huge' icon='comments outline' iconPosition='left'
          value={message}
          name="message"
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <Divider hidden />
        <Button type="submit" color='violet' size='massive' attached="bottom" value='Send' onClick={handleFormSubmit}>Submit</Button>
      </form>
      </div>
      <Divider hidden />
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </Grid.Column>
        </Grid.Row>
      </Grid>
  );
}


export default Form;