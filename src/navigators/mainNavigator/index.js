import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigator from '../bottomNavigator'
import ProductDetail from '../../utils/ProductDetail'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="bottomNav" component={BottomNavigator} />
     <Stack.Screen name="productDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})