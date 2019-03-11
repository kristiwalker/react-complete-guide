/* jshint esversion: 6 */
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux/Aux';

// These are stateful components because they use a state (no matter if it's the useState hook or a class-based approach with the state property)

/* CLASS COMPONENT EXAMPLE */

import React, {Component} from 'react';

class App extends Component {
    // This is the old, complex way of writing state. Now a state property in a class includes all of this info for us.
        constructor(props) {
            super(props);
            console.log('[App.js] constructor');

            this.state = {
                persons: [
                    {
                        id: '1',
                        name: 'Max',
                        age: 28
                    }, {
                        id: '2',
                        name: 'Manu',
                        age: 29
                    }, {
                        id: '3',
                        name: 'Stepanie',
                        age: 26
                    }
                ],
                otherState: 'some other value',
                showCockpit: true,
                changeCounter: 0
            };
        }

    // state = {
    //     persons: [
    //         {
    //             id: '1',
    //             name: 'Max',
    //             age: 28
    //         }, {
    //             id: '2',
    //             name: 'Manu',
    //             age: 29
    //         }, {
    //             id: '3',
    //             name: 'Stepanie',
    //             age: 26
    //         }
    //     ],
    //     otherState: 'some other value'
    // };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        // has to return something
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    deletePersonHandler = (personIndex) => {
        // slice copies the array and returns it to your variable as a new one that doesn't overrite the woritingal array
        // const persons = this.state.persons.slice();

        // you should always update state in an immutable fashion (not mutating the original, but making a copy!)
        // es6 spreads out the objects from your old array to the new array as a copy
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // spread the object properties into a new object rather than mutating the original person array reference
        // this is just an object with peroperties for the person that had the matching id
        const person = {
            ...this.state.persons[personIndex]
        };

        // update name of the person that had the matching id
        person.name = event.target.value;

        // spread the persons state array objects into a new array
        const persons = [...this.state.persons];
        // get object by index that corresponds to the id parameter
        persons[personIndex] = person;

        // set states of persons, copies unchanged objects and updates changed object
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {
        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
            );
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false})
                }}>
                Remove Cockpit
                </button>

                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle} // need this to access its props only because this is inside a class instead of functional component
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}/>
                ) : null}
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
