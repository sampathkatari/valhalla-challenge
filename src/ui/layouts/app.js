import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="left-content">
                        <Sidebar />
                    </div>
                    <div className="right-content">
                        {this.props.children}
                    </div>
                </div> 
            </div>
        )
    }
}

export default App;