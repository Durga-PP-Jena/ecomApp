import { StyleSheet, Text, TouchableOpacity, View,Image  } from 'react-native'
import React from 'react'
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Product = ({data}) => {
  return (
    <View style={styles.wrapper}>
     {
          data.map((item)=>{
               return <TouchableOpacity 
               style={styles.cardContainer}
               key={item.id}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.priceText}>₹ {item.price}.00</Text>
                    <View style={styles.categoriesSection}>
                         <Text style={{
                              color:"#1bcced"
                         }}>{item.categories}</Text>
                    </View>
               </TouchableOpacity>
          })
     }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
     wrapper:{
          flexDirection:"row",
          flexWrap:"wrap",
          gap:14,
          marginTop:wp(3),
          marginBottom:100
     },
     cardContainer:{
          width:wp(42),
          height:wp(70),
          borderRadius:wp(3),
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.3,
          shadowRadius: 2.22,
          elevation: 5,
     },
     image:{
          width:wp(38),
          height:wp(40),
          borderRadius:wp(3),
          alignSelf:"center",
          marginTop:wp(2)
     },
     titleText:{
          fontSize:wp(4),
          color:"black",
          fontWeight:"bold",
          paddingLeft:wp(2)
     },
     priceText:{
          fontSize:wp(4),
          color:"#13abd0",
          fontWeight:"bold",
          paddingLeft:wp(2)
     },
     categoriesSection:{
          paddingHorizontal:wp(5),
          paddingVertical:wp(1),
          backgroundColor:"#c1ebf3",
          borderWidth:wp(0.2),
          borderColor:"#27bff1",
          position:"absolute",
          bottom:5,
          left:wp(3)
     }
})