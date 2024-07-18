import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const ProductCategories = ({data}) => {
  return (
    <View style={styles.wrapper}>
     {data.map((item)=>{
          return <TouchableOpacity 
          
          style={styles.container}
           key={item.id}>
               <Image source={item.image} style={styles.image} />
               <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
     })}
    </View>
  )
}

export default ProductCategories

const styles = StyleSheet.create({
     wrapper:{
          flexDirection:"row",
          flexWrap:"wrap",
          gap:10
     },
     container:{
          width:widthPercentageToDP(20),
          paddingVertical:widthPercentageToDP(3),
          borderWidth:widthPercentageToDP(0.2),
          borderColor:"#27bff1",
          backgroundColor:"#f5f8f9",
          borderRadius:widthPercentageToDP(2),
          alignSelf:'center',
          justifyContent:"center",
          alignItems:"center",
          marginTop:10,
     },
     image:{
          width:widthPercentageToDP(6),
          height:widthPercentageToDP(6),
     },
     text:{
          fontSize:widthPercentageToDP(3.5),
          color:"#c1c1c1"
     }
})