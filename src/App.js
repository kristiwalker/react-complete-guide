/* jshint esversion: 6 */
import './App.css';
import Person from './Person/Person';

/* CLASS COMPONENT EXAMPLE */

// import React, {Component} from 'react';

// class App extends Component {
//     state = {
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stepanie', age: 26 }
//         ],
//         otherState: 'some other value'
//     };
//
//     switchNameHandler = () => {
//         // DONT' DO THIS: this.state.persons[0].name = 'Maximilian';
//         this.setState({ persons: [
//             { name: 'Maximilian', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stepanie', age: 27 }
//         ] })
//     }
//
//     render() {
//         return (<div className="App">
//             <h1>Hi, I'm a React app</h1>
//             <p>This is really working!</p>
//             <button onClick={this.switchNameHandler}>Switch Name</button>
//             <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//             <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//             <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//         </div>);
//
//         // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is a React app'));
//     }
// }

// export default App;

/* FUNCTIONAL COMPONENT EXAMPLE */

import React, {useState} from 'react';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stepanie', age: 26 }
        ]
    });

    const switchNameHandler = () => {
        // DONT' DO THIS: this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stepanie', age: 27 }
            ]
        })
    }

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    return (<div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>);
}

export default app;
