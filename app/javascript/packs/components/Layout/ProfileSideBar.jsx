import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class ProfileSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false}
    }

    toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div>
                <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='scale down' width='wide' visible={visible} icon='labeled' vertical inverted animation={'overlay'}
                             direction={'right'}>
                        <Menu.Item name='sign in'>
                            <Icon name='sign in' />
                            Sign In
                        </Menu.Item>
                        <Menu.Item name='sign out'>
                            <Icon name='sign out' />
                            Sign Out
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default ProfileSideBar