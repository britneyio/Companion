import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//pages
import Chatbot from './chatbot';
import Journal from './journal';
import Hotline from './hotline';
import Blog from './blog';
import Home from './home';
import SignUp from './signUp';
import Journalentry from './journalentry';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
    
        <Stack.Screen
        name="Sign Up"
        component={SignUp}
        />
      <Stack.Screen 
          name="Chatbot" 
          component={Chatbot} 
        />

      <Stack.Screen 
          name="Home" 
          component={Home} 
        />

        <Stack.Screen
          name="Journal"
          component={Journal}
          
        />
       

        <Stack.Screen 
          name="Hotline" 
          component={Hotline} 
        />

        <Stack.Screen 
          name="Blog" 
          component={Blog} 
        />

      <Stack.Screen
      name="Journalentry"
      component={Journalentry}
/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};





export default App;
 