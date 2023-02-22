import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SPLASH">

        <Stack.Screen name="SPLASH" component={SplashScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="HOME" component={Home} options={{
          title: 'CALCULATOR',
          headerBackVisible: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

