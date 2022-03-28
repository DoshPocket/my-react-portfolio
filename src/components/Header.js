import React, { useState } from 'react'
import { Grid, Menu, Container } from 'semantic-ui-react'
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../index.css';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'MyProjects') {
      return <MyProjects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
  };

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu  inverted size='massive' fluid vertical>
            <Menu.Item 
              name='Kenneth Maclean'
            />
            <Menu.Item color='violet'
              name='AboutMe'
              active={currentPage === 'AboutMe'}
              onClick={()=> setCurrentPage('AboutMe')}
            />
            <Menu.Item color='violet'
              name='MyProjects'
              active={currentPage === 'MyProjects'}
              onClick={()=> setCurrentPage('MyProjects')}
            />
            <Menu.Item color='violet'
              name='Resume'
              active={currentPage === 'Resume'}
              onClick={()=> setCurrentPage('Resume')}
            />
            <Menu.Item color='violet'
              name='Contact'
              active={currentPage === 'Contact'}
              onClick={()=> setCurrentPage('Contact')}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          {renderPage()}
        </Grid.Column>
        <Container>
          <Footer />
        </Container>
      </Grid>
      
    )
  }