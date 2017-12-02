import React, { Component } from 'react';

// global css rules (everything like *.global.scss or *.global.css is treated as global stylesheet. See webpack config)
import './App.global.scss';
// local css rules for current component (any other scss or css file is considered as local, css modules are used in this case)
import classes from './App.scss'

// import <Label> component from semantic-ui react package. Docs are here: https://react.semantic-ui.com
import { Label } from 'semantic-ui-react';

class App extends Component {
    render() {
        return (
            // Use semantic-ui <Label> react component for styling label background borders and so on,
            // and global / local classes for text color styling inside of <Label> component
            <div style={ { margin: "10px" } }>
                <Label>
                    <span className="colored-text">Hello</span> <span className={ classes["colored-text"] }>world</span>!
                </Label>
            </div>
        );
    }
}

export default App;