/* jshint esversion: 6 */
import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        // this runs code when the component is mounted
        console.log('[Cockpit.js] useEffect');
        // http request... (or whatever)
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);

        toggleBtnRef.current.click();

        return () => { // this run codes when the component is unmounted
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []); // use empty array to tell it to only run once, otherwise something like [props.persons] to tell it to only run when a certain prop updates

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    }); // no array argument passed means it runs every update cycle

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);
