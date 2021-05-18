import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navTheme } from '../StyleSheet';
import LoggedInScreen from './LoggedInScreen';
import LoggedOutScreen from './LoggedOutScreen';

const Navigation = () => {

    const [user, setUser] = useState(true);

    return (
        <NavigationContainer theme={navTheme}>
            {user ? <LoggedInScreen /> : <LoggedOutScreen />}
        </NavigationContainer>
    );
}

export default Navigation;