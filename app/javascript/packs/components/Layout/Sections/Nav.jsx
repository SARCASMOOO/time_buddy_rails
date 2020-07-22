import React, { Component, useRef } from 'react'
import {Menu, Grid, Icon, Sidebar} from 'semantic-ui-react'



export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {};
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

        //const items = ["apps", "feedback", "contact", "right", "instagram"];
        //const itemsList = items.map(item => <MenuItem key={""}></MenuItem>);

        return (
            <div style={{marginTop: '-30px'}}>
                <Grid columns='equal'>
                    <Grid.Column>
                        <Menu inverted className='DirtyBlue'>
                            <Menu.Item
                                name='apps'
                                active={activeItem === 'apps'}
                                onClick={this.handleItemClick}
                            >
                                APPS
                            </Menu.Item>

                            <Menu.Item
                                name='feedback'
                                active={activeItem === 'feedback'}
                                onClick={this.handleItemClick}
                            >
                                FEEDBACK
                            </Menu.Item>

                            <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                            >
                                CONTACT
                            </Menu.Item>

                            <Menu.Item
                                position='right'
                                name='instagram'
                                active={activeItem === 'instagram'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='instagram' />
                            </Menu.Item>

                            <Menu.Item
                                name='twitter'
                                onClick={this.handleItemClick}
                            >
                                <Icon name='twitter' />
                            </Menu.Item>

                            <Menu.Item
                                name='facebook'
                                onClick={this.handleItemClick}
                            >
                                <Icon name='facebook f' />
                            </Menu.Item>

                            <Menu.Item
                                name='profile'
                                active={activeItem === 'profile'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='user' />
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
