import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import TimeTableApp from './containers/TimeTableApp';

const Landing = props => {
    return (
        <Layout layoutName='timeApp'>
            <main>
                <TimeTableApp />
            </main>
        </Layout>
    );
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Landing/>, document.body.appendChild(document.createElement('div')),);
})
