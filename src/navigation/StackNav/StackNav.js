import * as React from 'react';
import {View, Text} from 'react-native';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens

////////////////////bottomtab
import BottomTab from '../BottomTab/BottomTab';

//////////////////dashboard////////////////
import MapScreen from '../../screens/StackScreens/AddEvents/MapScreen';

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />

  
    </Stack.Navigator>
  );
}

export default StackNav;
