import React, {useContext, useState} from 'react';
import { createStoreHook} from 'react-redux';

export const UserContext = React.createContext(null);

export const UserProvider = props => {
    const [user, setUser] = useState(null);
    return <UserContext.Provider value={[user, setUser]}{...props}></UserContext.Provider>
};
