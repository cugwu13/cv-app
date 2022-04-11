import React, { Component } from 'react';
import Header from './components/header';
import General from './components/general';
import Education from './components/education';
import Work from './components/work';
import './styles/style.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="content-container">
                <Header />
                <General />
                <Education />
                <Work />
            </div>
        );
    }
}

export default App;
