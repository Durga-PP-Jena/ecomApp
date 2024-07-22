import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen'
import CustomTab from './CustomTab'
import SearchScreen from '../../screens/SearchScreen'
import PostScreen from '../../screens/PostScreen'
import ProfileScreen from '../../utils/ProfileScreen'

const Bottom = createBottomTabNavigator()
const BottomNavigator = () => {
  return (
     <Bottom.Navigator
     initialRouteName="home"
     tabBar={props => <CustomTab {...props} />}
     screenOptions={{
       headerShown: false,
       lazy: true,
     }}>

          <Bottom.Screen name="home" component={HomeScreen} />
          <Bottom.Screen name="search" component={SearchScreen} />
          <Bottom.Screen name="post" component={PostScreen} />
          <Bottom.Screen name="profile" component={ProfileScreen} />
     </Bottom.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})