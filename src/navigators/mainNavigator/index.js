import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen'
import SearchScreen from '../../screens/SearchScreen'
import PostScreen from '../../screens/PostScreen'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="post" component={PostScreen} />
     <Stack.Screen name="search" component={SearchScreen} />
     <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})