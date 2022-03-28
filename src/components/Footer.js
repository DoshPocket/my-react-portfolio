import React from 'react'
import { Container, Grid, Icon, Segment} from 'semantic-ui-react'


const Footer = () => {
    return (
        <>
    <Container className='footer'>
        <Grid verticalAlign='middle' columns={4} centered>
            <Grid.Row verticalAlign='bottom'>
                <Grid.Column>
                <div className="ui horizontal divider">
                    Find Me
                </div>
                <Segment basic textAlign='center'>
                <a href="https://github.com/DoshPocket" target="_blank"><Icon name='github' size='huge' color='black' /></a>
                <a href="https://www.linkedin.com/in/kenmaclean7742/" target="_blank"><Icon name='linkedin' size='huge' color='black' /></a>
                <a href="https://stackoverflow.com/users/17743122/doshpocket?tab=profile" target="_blank"><Icon name='stack overflow' size='huge' color='black' /></a>
                </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</>
 )
}

export default Footer;