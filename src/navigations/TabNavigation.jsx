import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/homescreen/HomeScreen'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Profile' component={HomeScreen}/>
      <Tab.Screen name='Shelf' component={HomeScreen}/>
      <Tab.Screen name='Shuttle' component={HomeScreen}/>
      <Tab.Screen name='Map' component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation