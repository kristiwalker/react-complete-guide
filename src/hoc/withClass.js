/* jshint esversion: 6 */

import React from 'react';

// FUNCTIONAL COMPONENT EXAMPLE
// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// FUNCTION THAT RETURNS FUNCTIONAL COMPONENT EXAMPLE
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClass;
