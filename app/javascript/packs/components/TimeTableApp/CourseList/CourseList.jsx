import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'inbox',
            courses: props.courses
        }
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(props) {

        console.log(props);
        const { activeItem } = this.state
        let course;
        const courses = [];
        let i = 0;
        for(course of this.state.courses) {
            courses.push(
                <Menu.Item
                    name='inbox'
                    active={activeItem === 'inbox'}
                    onClick={this.handleItemClick}
                    key={'course'+ i}
                >
                    {course}
                </Menu.Item>
            );
            i++;
        }
        return (
            <Menu vertical>
                {courses}
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
            </Menu>
        )
    }
}

export default CourseList;