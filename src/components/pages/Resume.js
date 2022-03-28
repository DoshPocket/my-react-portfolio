import React from 'react';
import { Image, Segment, Container, Header, Icon, Label } from 'semantic-ui-react'
import '../../index.css';

const Resume = () => {
 return (
 <>
<Container textAlign='center'>
    <Segment basic textAlign='center'>
        <Header color='violet' as='h1'>
            <Header.Content><Icon name='code'/>Technical Skills</Header.Content>
        </Header>
    </Segment>
</Container>

<Segment style={{fontSize: 20}} basic textAlign='center'>

<b>Languages:</b> SQL, HTML, CSS, Javascript, React
<div class='ui hidden divider'></div>

<b>Web Development:</b> Bootstrap, Tailwind, Semantic UI, jQuery, React, Node.js, Express, MongoDB, Graphql, Inquirer, Jest
<div class='ui hidden divider'></div>
<b>Dev-op Tools:</b> GitHub, Git, Heroku
</Segment>

<Container textAlign='center'>
    <Segment basic textAlign='center'>
        <Header color='violet' as='h1'>
            <Header.Content><Icon name='file pdf outline'/>Resume</Header.Content>
        </Header>
    </Segment>
</Container>

<Container textAlign='center'>
 <a href="Docs/kenneth-resume.pdf" download="Kenneth MacLean - Full Stack Resume">
  <Image rounded centered size={'large'} label={{ as: 'a', color: 'red', corner: 'left', size: 'large', icon: 'save' }} src="Images/kenneth-resume.png" alt="Kenneth MacLean Resume"/>
</a>
</Container>
 </>
 )
}


export default Resume;
