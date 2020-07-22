import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import TimeTableApp from './containers/TimeTableApp';
import LandingPage from './components/Landing/Landing';
import {Container} from 'semantic-ui-react';

const App = props => {
    return (
        <Layout layoutName='timeApp'>
            <main>
                <LandingPage />
            </main>
        </Layout>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App/>, document.body.appendChild(document.createElement('div')),);
})
