import { Dimensions } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Ar from './screens/AppleAr';
import Details from './screens/Details';
import Kursi from './screens/Kursi';

const responsive = Dimensions.get('window').width

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false,
        animation : 'fade',
      }}>
        <Stack.Screen name='Welcome' component={Home}/>
        <Stack.Screen name='Ar' component={Ar}/>
        <Stack.Screen name='Detail' component={Details} />
        <Stack.Screen name='Kursi' component={Kursi} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


