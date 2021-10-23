import React from 'react';

const InfoContext = React.createContext({
    firstName: '',
    lastName: '',
    role: '',
});

export default InfoContext;