import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store/index';
import Home from './screen/home.js';
import Schedule from './screen/schedule.js';

const Stack = createStackNavigator();

function App(){

  return(
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Schedule" component={Schedule}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App