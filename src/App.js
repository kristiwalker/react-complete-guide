/* jshint esversion: 6 */
import './App.css';
import Person from './Person/Person';

// These are stateful components because they use a state (no matter if it's the useState hook or a class-based approach with the state property)

/* CLASS COMPONENT EXAMPLE */

import React, {Component} from 'react';

class App extends Component {
    state = {
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
        otherState: 'some other value'
    };

    // switchNameHandler = (newName) => {
    //     // DONT' DO THIS: this.state.persons[0].name = 'Maximilian';
    //     this.setState({
    //         persons: [
    //             {
    //                 name: newName,
    //                 age: 28
    //             }, {
    //                 name: 'Manu',
    //                 age: 29
    //             }, {
    //                 name: 'Stepanie',
    //                 age: 27
    //             }
    //         ]
    //     })
    // }

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
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, i) => {
                        return <Person
                            click={() => this.deletePersonHandler(i)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            // this function below gets executed upon the onChange event (in Person.js)
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }

            return (<div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is really working!</p>

                {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}

                <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>

                {persons}
                </div>);
        }
    }

    export default App;

    /* FUNCTIONAL COMPONENT EXAMPLE */
    //
    // import React, {useState} from 'react';
    //
    // const app = props => {
    //     const [personsState, setPersonsState] = useState({
    //         persons: [
    //             { name: 'Max', age: 28 },
    //             { name: 'Manu', age: 29 },
    //             { name: 'Stepanie', age: 26 }
    //         ]
    //     });
    //
    //     const switchNameHandler = () => {
    //          DONT' DO THIS: this.staxte.persons[0].name = 'Maximilian';
    //         setPersonsState({
    //             persons: [
    //                 { name: 'Maximilian', age: 28 },
    //                 { name: 'Manu', age: 29 },
    //                 { name: 'Stepanie', age: 27 }
    //             ]
    //         })
    //     }
    //
    //     const [otherState, setOtherState] = useState('some other value');
    //
    //     console.log(personsState, otherState);
    //
    //     return (<div className="App">
    //         <h1>Hi, I'm a React app</h1>
    //         <p>This is really working!</p>
    //         <button onClick={switchNameHandler}>Switch Name</button>
    //         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
    //         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
    //         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    //     </div>);
    // }
    //
    // export default app;
