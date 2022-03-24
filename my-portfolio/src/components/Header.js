import React, { Component, useState, useEffect } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
          <Menu fluid vertical tabular>
            <Menu.Item
              name='AboutMe'
              active={currentPage === 'AboutMe'}
              onClick={()=> setCurrentPage('AboutMe')}
            />
            <Menu.Item
              name='MyProjects'
              active={currentPage === 'MyProjects'}
              onClick={()=> setCurrentPage('MyProjects')}
            />
            <Menu.Item
              name='Resume'
              active={currentPage === 'Resume'}
              onClick={()=> setCurrentPage('Resume')}
            />
            <Menu.Item
              name='Contact'
              active={currentPage === 'Contact'}
              onClick={()=> setCurrentPage('Contact')}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          {/* <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment> */}
          {renderPage()}
        </Grid.Column>
      </Grid>
    )
  }