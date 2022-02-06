import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//pages
import Chatbot from './chatbot';
import Journal from './journal';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Journal"
          component={Journal}
          
        />
        <Stack.Screen 
        name="Chatbot" 
        component={Chatbot} 
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
 