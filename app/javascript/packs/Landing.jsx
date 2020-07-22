import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './components/Landing/Landing';

const Landing = props => {
    return (
        <Layout layoutName='timeApp'>
            <main>
                <LandingPage />
            </main>
        </Layout>
    );
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Landing/>, document.body.appendChild(document.createElement('div')),);
})
