import React from 'react'
import {Card, Button} from "semantic-ui-react";
import axios from 'axios';

class Apps extends React.Component {
    render() {
        return (
            <div>
            <Card fluid color={'blue'}>
                <Card.Content header='School Timetable' />
                <Card.Content description={"Plan your semester with our timetable app. Select your school and manage multiple time sheets all in one place."} />
                <Card.Content extra>
                    <Button primary floated='right' onClick={ ()=> {
                        const url = window.location.origin + '/app/';
                        window.location.replace(url);
                    }
                    }>Start</Button>
                </Card.Content>
            </Card>
            </div>
        );
    }
}

export default Apps;