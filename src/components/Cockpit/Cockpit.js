/* jshint esversion: 6 */
import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request... (or whatever)
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, []); // use empty array to tell it to only run once, otherwise something like [props.persons] to tell it to only run when a certain prop updates

    // useEffect();

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
        </div>
    );
}

export default cockpit;
