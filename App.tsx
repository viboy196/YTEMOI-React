import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import RegiterForm from './screens/RegiterForm';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();
{/* <Login /> */ }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}

      >
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen name='RegiterForm' component={RegiterForm} />

        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

