/* jshint esversion: 6 */

// This is a stateless component because it has no internal state management

import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    return (<div className="Person">
        <p onClick={props.click}>I'm {props.name}
            and I am {props.age}
            years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>)
};

export default person;
