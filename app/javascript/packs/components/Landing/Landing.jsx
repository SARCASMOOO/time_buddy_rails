import React from 'react'
import {Container, Grid} from 'semantic-ui-react'
import Introduction from './Sections/Introduction'
import Apps from './Sections/Apps'
import Feedback from './Sections/Feedback'

class Landing extends React.Component {
    scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    myRef = React.createRef();

    render() {
        const appsStyle = {
            display: 'flex'
        };

        const paddingStyle = {
            paddingBottom: '1vh',
            paddingTop: '1vh'
        };

        return (
                <Grid columns={2} container>

                <Grid.Row stretched className='margineStyle' >
                    <Grid.Column>
                        <Introduction/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row stretched className='margineStyle' ref={this.myRef}>
                    <Grid.Row stretched>
                        <div style={paddingStyle}>
                            <h1>Apps</h1>
                        </div>
                        <div style={appsStyle}>
                            <Apps title='School Timetable'/>
                        </div>
                    </ Grid.Row >

                </Grid.Row>

                <Grid.Row stretched centered className='margineStyle'>
                    <Grid.Column>
                        <Feedback/>
                    </ Grid.Column>
                </Grid.Row>

                </Grid>
        );
    }
}

export default Landing