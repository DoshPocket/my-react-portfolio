import React from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react'

const AboutMe = () => {
 return (
     <>
        <Container>
            <Container textAlign='center'>
                <b>About Me</b>
            </Container>
            <Divider />

            <img src={process.env.PUBLIC_URL+"Images/kenneth-profile.jpeg"} alt="Kenneth MacLean"/>

            <Segment textAlign='justified'>
            <p>
            I am a coding student, currently studying in a three month full-time full stack boot camp at the University of Toronto.

            I taught English as a Second Language in Japan for six years and then moved back to Canada and worked in the financial sector for seven years.

            When I’m not melting my brain with new coding concepts, I love playing board games or guitar and spending time with my dog, Pixel.
            </p>
            </Segment>
        </Container>
    </>
 )
}


export default AboutMe;