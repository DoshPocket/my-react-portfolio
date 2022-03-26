import React from 'react';
import { Container, Header, Divider, Segment, Image } from 'semantic-ui-react'

const AboutMe = () => {
 return (
     <>
        <Container>
            <Container textAlign='center'>
                <Segment basic textAlign='center'>
                    <Header color='violet' as='h1'>
                        <Header.Content>About Me</Header.Content>
                    </Header>
                </Segment>
            </Container>

            <Image bordered circular size="small" src={process.env.PUBLIC_URL+"Images/kenneth-profile.jpeg"} alt="Kenneth MacLean"/>

            <Divider />

            <Segment basic textAlign='justified'>
            <p style={{fontSize: 20}}>
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