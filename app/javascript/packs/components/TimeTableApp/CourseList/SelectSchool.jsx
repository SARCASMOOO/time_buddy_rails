import React from 'react'
import {Header, Button, Dropdown} from "semantic-ui-react";


const countryOptions = [
    { key: 'carleton-university-1', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-2', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-3', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-4', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-5', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-6', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-7', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-8', value: 'af', flag: 'af', text: 'Carleton University' },
    { key: 'carleton-university-9', value: 'af', flag: 'af', text: 'Carleton University' }
]

const SelectSchool = (props) => {
    const style = {
        padding: '20%',
    }
    return (<div style={style}>
        <Header size='large'>Select your school.</Header>
        <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={countryOptions}
        />
        <Button primary onClick={props.onclick}>Select</Button>
    </div>);
}

export default SelectSchool;