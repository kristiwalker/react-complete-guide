/* jshint esversion: 6 */

import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;
