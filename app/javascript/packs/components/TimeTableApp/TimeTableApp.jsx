import React, {Component} from 'react'
import SelectSchool from "./SelectSchool";
import TimeTable from "./TimeTable";
import {Grid} from "semantic-ui-react";
import CourseList from "./CourseList";

class TimeTableApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: true,
        }
    }

    render() {
        let view;
        const rowStyle = {
            height: '20%',
        };

        if (this.state.school) {
            view = (
                <Grid.Row>
                    <Grid.Column width={12}>
                        <TimeTable/>
                    </Grid.Column>
                    <Grid.Column  width={4}>
                        <CourseList />
                    </Grid.Column>
                </Grid.Row>
            );
        } else {
            view = (
                <Grid.Row>
                    <SelectSchool
                        onclick={() => {
                            this.setState({school: true});
                        }}/>
                </Grid.Row>
            );
        }

        return (
            <Grid padded style={rowStyle}>
                {view}
            </Grid>
        );
    }
}

export default TimeTableApp;