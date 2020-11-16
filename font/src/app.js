import React, { Component } from 'react'
import Admin from './admin'

class App extends Component {
    render() {
        return (
            <Admin>
                {this.props.children}
            </Admin>
        )
    }
}

export default App
