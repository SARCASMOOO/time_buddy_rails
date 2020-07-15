import React, {Component} from 'react'
import SelectSchool from "./SelectSchool";

class TimeTableApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: true,
        }
    }

    render() {
        let view = null;

        if(this.state.school) {
            view = (
                <h1>School</h1>
            );
        } else {
            view = (
                <SelectSchool />
            );
        }

        return view;
    }
}

export default TimeTableApp;