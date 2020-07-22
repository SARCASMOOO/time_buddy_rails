import React, {Component} from 'react'
// import SelectSchool from "./SelectSchool";
import TimeTable from "../components/TimeTableApp/TimeTable/TimeTable";
import {Grid} from "semantic-ui-react";
import CourseList from "../components/TimeTableApp/CourseList/CourseList";

class TimeTableApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: null,
            views: {
                selectSchool: (
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <TimeTable/>
                        </Grid.Column>
                        <Grid.Column  width={4}>
                            <h1>Courses</h1>
                            <CourseList courses={['course1', 'course2', 'course3', 'course4']}/>
                        </Grid.Column>
                    </Grid.Row>
                ),
                schoolApp: (
                    <Grid.Row>
                        {/*<SelectSchool*/}
                        {/*    onclick={() => {*/}
                        {/*        this.setState({school: true});*/}
                        {/*    }}/>*/}
                    </Grid.Row>
                )
            }
        }
    }

    render() {
        let view;

        if (this.state.school) {
            view = this.state.views['schoolApp'];
        } else {
            view = this.state.views['selectSchool'];
        }

        return (
            <Grid padded className='Green'>
                {view}
            </Grid>
        );
    }
}

export default TimeTableApp;

// .Green
//     .Blue
//     .Brown