import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Complete from '../screens/Complete';

const Stack = createStackNavigator();

const AppNavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Complete" component={Complete} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigations

const styles = StyleSheet.create({})