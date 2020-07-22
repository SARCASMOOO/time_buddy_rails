import React from 'react'
import {Form, Icon, Header, Button} from "semantic-ui-react";

function Footer(){
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
    }

    const styleGroup = {
        display: 'flex',
        flexDirection: 'column',
    }

    const styleGroupCopyRight = {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
    }

    const formStyle = {
        paddingBottom: '20px'
    }
        return (
            <footer className='DirtyBlue'>
            <Form widths='equal' stretch inline style={formStyle}>
                <Form style={style}>
                    <Form.Group style={styleGroup}>
                        <Header as='h3'>Connect with us!</Header>
                        <p>
                            Have any suggestions or comments?
                            <br/>
                            Please send an email and let us know! <br/><br/>
                            <b>admin@timebuddy.ca</b>
                        </p>
                        <div style={style}>
                            <Icon name='instagram' size='large'/>
                            <Icon name='twitter' size='large'/>
                            <Icon name='facebook f' size='large'/>
                        </div>
                    </Form.Group>

                    <Form.Group style={styleGroup}>
                        <Header as='h3'>Timebuddy</Header>
                        <p>Timebuddy is a productivity tool <br/>
                            to help save you time. Focus on what matters to you <br/>
                            and leave the rest for us :) </p>
                    </Form.Group>

                    <Form.Group style={styleGroup}>
                        <Header as='h3'>Subscribe to Timebuddy via Email</Header>
                        <p>
                            Get notified first when new features come available.
                        </p>
                        <Form.Field inline>
                            <label>Email</label>
                            <input placeholder='example@gmail.com' />
                            <Button type='submit'>Submit</Button>
                        </Form.Field>
                    </Form.Group>


                    <Form.Group style={styleGroupCopyRight}>
                        <p>Timebuddy©</p>
                    </Form.Group>
                </Form>
            </Form>
            </footer>
        );
}

export default Footer;