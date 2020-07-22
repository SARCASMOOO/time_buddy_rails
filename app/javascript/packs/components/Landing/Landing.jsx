import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import Introduction from './Sections/Introduction'
import Apps from './Sections/Apps'
import Feedback from './Sections/Feedback'

class Landing extends React.Component {
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

export default Landing