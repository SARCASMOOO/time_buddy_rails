// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'
import Main from "./components/Main";
import TimeTableApp from './components/TimeTableApp/TimeTableApp'

class App extends React.Component {
  render() {
      return this.props.children;
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App>
          <Layout />
      </App>,
    document.body.appendChild(document.createElement('div')),
  )
})
