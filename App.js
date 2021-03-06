import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Screens/Login';
import Welcome from './Screens/Welcome';
import LoginDetails from './Screens/LoginDetails';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import ProductDetails from './Screens/ProductDetails';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const Stack = createNativeStackNavigator();
export default function App() {
 
  return ( 
    
   
      <NavigationContainer>  
       <Stack.Navigator
        
           
           
          screenOptions={{headerShown:false}}>
            
            <Stack.Screen name="Welcome" component={Welcome } />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginDetails" component={LoginDetails }/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Cart" component={Cart } />
        
          
            
            
           
           
         
             
           
          
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </NavigationContainer>
     

  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 
