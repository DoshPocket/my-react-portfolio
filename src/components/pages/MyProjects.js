import React from 'react';
import { Card, Icon, Button, Container, Header, Segment } from 'semantic-ui-react'



const projectData = [
    {
        image: 'Images/HiveMind-homepage.png',
        title: 'HiveMind',
        description: 'A mental health community application to connect mental health advocates in a place where they can share tips and get daily inspiration to remain mindful of their own mental health.',
        link: 'https://hivemind-ken.herokuapp.com/'
    },
    {
        image: 'Images/romantic-date-planner.png',
        title: 'Romantic Date Planner',
        description: 'This application assists avid daters to save time in planning successful dates. Once a random activity is chosen, the user is presented with a search engine connected to an API relevant to the activity they can use to search for a specific date acitivty and save in to their "upcoming dates" list.',
        link: 'https://doshpocket.github.io/romantic-date-planner/',
        repo: 'https://github.com/DoshPocket/romantic-date-planner'
    },
    {
        image: 'Images/jate.png',
        title: 'Text Editor',
        description: "A useful full-stack Node.js Express text editor which utilizes service worker to save user input after reload and upon reinitialization. The text editor is downloadable as a progressive web application to the client's local machine.",
        link: 'https://dashboard.heroku.com/apps/text-editor-ken'
    },
    {
        image: 'Images/note-taker.png',
        title: 'Note Taker',
        description: 'This note taker application allows the user to add new notes with a title and body and save to a list of deletable notes. When a particular note is clicked on, it is displayed again on the right side.',
        link: 'https://note-taker-1984.herokuapp.com/'
    },
    {
        image: 'Images/employee-tracker.png',
        title: 'Employee Tracker',
        description: 'A CLI application to organize, update, and navigate employee and department data of a company. Designed to be clear and intuitive with Node.js, Inquirer, and MySQL.',
        link: 'https://drive.google.com/file/d/1eRfyAiRAcI02TXMhNAoJTkRco1ojO0G0/view'
    },
    {
        image: 'Images/social.png',
        title: 'Social Network API',
        description: 'A social network api that utilizes MongooseDB to provide the user with functional and modularized routes that allow for full CRUD operations for new users, thoughts, reactions and the ability to add and remove friends from their personal networks.',
        link: 'https://drive.google.com/drive/folders/1y_jzougDH6SMNIHVEvjXlSECkmdi8aab?usp=sharing'
    },
]

const extra = (link, repo) => (
    <a href={link} target="_blank">
       <Button basic attached='bottom' color='violet' content='View Project'/>
    </a>  
  )

const MyProjects = () => {
 return (
    <Container>
        <Segment basic textAlign='center'>
            <Header color='violet' as='h1'>
                <Header.Content><Icon name='cubes'/>My Projects</Header.Content>
            </Header>
        </Segment>
     <>
        {projectData.map((project, i) => (
            <Card fluid
            key={i}
            image={project.image}
            header={project.title}
            description={project.description}
            extra={extra(project.link, project.repo)}
        />
        ))}
     </>
     </Container>
 )
}

export default MyProjects;