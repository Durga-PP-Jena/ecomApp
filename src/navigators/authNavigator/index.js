import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/LoginScreen'
const Stack = createStackNavigator()
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})