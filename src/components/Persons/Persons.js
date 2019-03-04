/* jshint esversion: 6 */
import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent { // PureComponent implements shouldComponentUpdate with a complete props check
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // must return true or false, usually with a conditional
    //
    //     // this works because it's checking to see if it's pointing to the same thing. Must update the pointer (not the value) for it to know there was a change.
    //     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, i) => {
            return (
                <Person
                    click={() => this.props.clicked(i)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    }
}

const persons = (props) => {
}

export default Persons;
