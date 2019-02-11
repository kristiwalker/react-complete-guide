/* jshint esversion: 6 */
import './App.css';
import Person from './Person/Person';

 // These are stateful components because they use a state (no matter if it's the useState hook or a class-based approach with the state property)

/* CLASS COMPONENT EXAMPLE */

import React, {Component} from 'react';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stepanie', age: 26 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // DONT' DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({ persons: [
            { name: newName, age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stepanie', age: 27 }
        ] })
    }

    nameChangeHandler = (event) => {
        this.setState({ persons: [
            { name: 'Max', age: 28 },
            { name: event.target.value, age: 29 },
            { name: 'Stepanie', age: 26 }
        ] })
    }

    render() {
        const style = {
                backgroundColor: 'white',
                font: 'inherit',
                border: '1px solid blue',
                padding: '8px',
                cursor: 'pointer'
        };

        return (<div className="App">
            <h1>Hi, I'm a React app</h1>
            <p>This is really working!</p>
            <button
                style={style}
                onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

            {/* this is an easier way to write a switch handler, but react can sometimes re-render things too often this way, so it's not recommended.*/}
            {/* <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
            <Person
                name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person
                name={this.state.persons[1].name} age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangeHandler}>My Hobbies: Racing
            </Person>
            <Person
                name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>);

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is a React app'));
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
//         // DONT' DO THIS: this.staxte.persons[0].name = 'Maximilian';
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
