import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Complete from './Screens/Complete';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Complete" component={Complete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
