import React from 'react';
import { Image, Segment, Container, Header } from 'semantic-ui-react'

const Resume = () => {
 return (
 <>
 <a href="Docs/kenneth-resume.pdf" download="Kenneth MacLean - Full Stack Resume">
  <Image size={'large'} src={process.env.PUBLIC_URL+"Images/kenneth-resume.png"} alt="Kenneth MacLean Resume"/>
</a>

<Header as='h2' textAlign='center'>Technical Skills</Header>

<Segment textAlign='justified'>
Languages: SQL, HTML, CSS, Javascript, React
Web Development: Bootstrap, Tailwind, Semantic UI, jQuery, React, Node.js, Express, MongoDB, Graphql, Inquirer, Jest
Dev-op Tools: GitHub, Git, Heroku
</Segment>

 </>
 )
}


export default Resume;
