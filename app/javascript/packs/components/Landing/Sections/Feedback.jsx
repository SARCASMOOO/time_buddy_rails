import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import axios from "axios";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";


const options = [
    {key: 'fr', text: 'Feature Request', value: 'feature'},
    {key: 'i', text: 'Issue', value: 'issue'},
    {key: 'o', text: 'Other', value: 'other'},
]

class Feedback extends Component {
    state = {
        errors: {},
        error: true
    }
    acceptForm = React.createRef();
    aboutField = React.createRef();
    selectReason = React.createRef();
    lastname = React.createRef();
    firstname = React.createRef();
    emailField = React.createRef();

    handleChange = (e, {value}) => this.setState({value})

    checkEmail = () => {
        const email = this.emailField.value;
        console.log(this.emailField);
        return !!email;
    }
    componentDidMount() {
        this.setState({
            'acceptForm': this.acceptForm,
            'aboutField': this.aboutField,
            'selectReason': this.selectReason,
            'lastname': this.lastname,
            'firstname': this.firstname,
            'emailField': this.emailField
        });
    }

    render() {
        const {value} = this.state;
        const messages = [];
        let error = false;

        if (Object.keys(this.state.errors).length > 0) {
            error = true;
            const errorsKeys = Object.keys(this.state.errors);
            let i;
            for (i = 0; i < errorsKeys.length; i++) {
                messages.push(<Message
                    error
                    key={'error' + i}
                    header='Error'
                    content={this.state.errors[errorsKeys[i]]}
                />);
            }
        }

        return (
            <Form error={error}>
                <h2>Feedback</h2>
                <p>Connect with us! Have an idea for a new feature you would like to see? Have an issue or something
                    else. Let us know! :)</p>

                {(messages.length > 0) ? messages : null}

                <Form.Group widths='equal'>
                    <Form.Input ref={this.state.firstname} fluid label='First name' placeholder='First name'/>
                    <Form.Input ref={this.state.lastname} fluid label='Last name' placeholder='Last name'/>
                    <Form.Select
                        fluid
                        label='Reason'
                        options={options}
                        placeholder='Reason'
                        ref={this.selectReason}
                    />
                </Form.Group>

                <Form.TextArea ref={this.state.aboutField} label='About' placeholder='Tell us more about you...'/>
                <Form.Input ref={this.state.emailField} fluid label='Email' placeholder='example@gmail.com'/>

                <Form.Group>
                    <Form.Checkbox ref={this.state.acceptForm} label='I agree to the Terms and Conditions'/>
                    <Form.Button
                        onClick={
                            () => {
                                if (this.checkEmail()) {
                                    // axios({
                                    //     method: 'post',
                                    //     url: '/feedback',
                                    //     data: {
                                    //         firstName: 'Finn',
                                    //         lastName: 'Williams',
                                    //         reason: 'reason',
                                    //         about: 'this is the about message',
                                    //         email: 'email'
                                    //     }
                                    // });
                                    console.log('Test');
                                } else {

                                    let errors = {};
                                    errors['InvalidEmail'] = 'Please make sure you use a valid email address';
                                    this.setState({errors: errors});
                                }
                            }
                        }
                    >Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default Feedback