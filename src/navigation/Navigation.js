// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

///////////////redux
import {Provider} from 'react-redux';
import {Store} from '../redux/store';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//////////////////stack nav///////////
import StackNav from './StackNav/StackNav';

const Navigation = ({isAuthenticated}) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
