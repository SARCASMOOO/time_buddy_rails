import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'fr', text: 'Feature Request', value: 'feature' },
    { key: 'i', text: 'Issue', value: 'issue' },
    { key: 'o', text: 'Other', value: 'other' },
]

class Feedback extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <h2>Feedback</h2>
                <p>Connect with us! Have an idea for a new feature you would like to see? Have an issue or something else. Let us know! :)</p>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select
                        fluid
                        label='Reason'
                        options={options}
                        placeholder='Reason'
                    />
                </Form.Group>

                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Form.Input fluid label='Email' placeholder='example@gmail.com' />

                <Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default Feedback