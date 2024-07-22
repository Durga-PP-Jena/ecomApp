import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Product from '../utils/Product'
import { product } from '../utils/Data'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'

const SearchScreen = () => {
  return (
    <ScrollView style={{
     flex:1,
     backgroundColor:"white",
     paddingHorizontal:widthPercentageToDP(6),
     paddingTop:widthPercentageToDP(7)
    }}>
            <StatusBar style="auto" />

     <Text style={styles.headerText}>Explore More</Text>
     <Product data = {product}/>
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
     headerText:{
          fontSize:widthPercentageToDP(6),
          color:"black",
          fontWeight:"bold",
          
     }
})