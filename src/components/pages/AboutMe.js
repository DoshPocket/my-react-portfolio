import React from 'react';
// import background from "../../../Images/bg-3.jpeg";
import { Container, Header, Divider, Segment, Image, Icon, Reveal } from 'semantic-ui-react'
import '../../index.css';
// import Footer from '../Footer';
document.body.classList.add('bg');


const AboutMe = () => {
 return (
     <>
        <Container>
            <Container textAlign='center'>
                <Segment basic textAlign='center'>
                    <Header color='violet' as='h1'>
                        <Header.Content><Icon name='user circle'/>About Me</Header.Content>
                    </Header>
                </Segment>
            </Container>
                <div style={{ backgroundImage: "url(Images/bg-3.jpeg), url(./Images/bg-4.jpeg)", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'left, right'}}>
                <Image centered bordered circular size="medium" src="Images/kenneth-profile.jpeg" alt="Kenneth MacLean"/>
                </div>
            <Divider />

            <Segment basic textAlign='left'>
                <p style={{fontSize: 20}}>
                    I am a full stack developer with backgrounds in education and finance. I taught ESL in Japan and completed my Canadian Securities Course before my first foray into coding.
                </p>
                    <Image bordered rounded size="tiny" src="Images/pixel-pic.jpeg" alt="Pixel" floated='right' />
                <p style={{fontSize: 20}}>
                    When I’m not melting my brain with new coding concepts, I love playing board games (solo and multi) or guitar and spending time with my dog, Pixel.

                    {/* <Reveal animated='small fade'>
                        <Reveal.Content hidden>
                            <Image bordered rounded size="tiny" src={process.env.PUBLIC_URL+"Images/pixel-pic.jpeg"} alt="Pixel" />
                        </Reveal.Content>
                    </Reveal> */}
                </p>
            </Segment>
        </Container>
        {/* <Container>
        <Footer />
        </Container> */}
    </>
 )
}


export default AboutMe;