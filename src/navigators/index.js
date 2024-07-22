import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './authNavigator'
import MainNavigator from './mainNavigator'

const Stack = createStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="auth" component={AuthNavigator} />
    <Stack.Screen name="main" component={MainNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
)
}

export default AppNavigator

const styles = StyleSheet.create({})