import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import Introduction from './LandingPage/Introduction'
import Apps from './LandingPage/Apps'
import Feedback from './LandingPage/Feedback'

class Main extends React.Component {
    render() {
        const appsStyle = {
            display: 'flex',
        };

        return (
                <Grid columns={2} container>

                <Grid.Row stretched>
                    <Grid.Column>
                        <Introduction/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row stretched>
                    <h1>Apps</h1>
                    <div style={appsStyle}>
                        <Apps title='School Timetable'/>
                        <Apps title='School Timetable'/>
                        <Apps title='School Timetable'/>
                    </div>
                </Grid.Row>

                <Grid.Row stretched centered>
                    <Grid.Column>
                        <Feedback/>
                    </ Grid.Column>
                </Grid.Row>

                </Grid>
        );
    }
}

export default Main