import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import BackTopHeader from './BackTopHeader';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const ProductDetail = ({route}) => {
     const {title,categories,price,image,desc} = route.params;
  return (
    <View style={{
     flex:1,
     backgroundColor:"white"
    }}>
     <StatusBar style="auto" />
  <BackTopHeader
  label="Product Detail"
  />

<Image source={image} style={styles.image}/>
  <View style={{
     paddingHorizontal:widthPercentageToDP(4)
  }}>

     <Text style={styles.titleText}>{title}</Text>
     <Text style={styles.descText}>Description</Text>
     <Text style={styles.desc}>{desc}</Text>
     <View style={styles.priceSection}>
   <Text style={styles.descText}>price:</Text>
   <Text style={styles.desc}>₹ {price}.00</Text>
     </View>
     <View style={styles.categorySection}>
        <Text>{categories}</Text>
     </View>
  </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
     image:{
          width:widthPercentageToDP(100),
          height:widthPercentageToDP(100)
     },
     titleText:{
          fontSize:widthPercentageToDP(6),
          fontWeight:"bold",
          color:"#241D31",
     },
     descText:{
          fontSize:widthPercentageToDP(4.5),
          fontWeight:"bold",
          color:"#636D9D",

     },
     desc:{
          color:"#dacce7",
          paddingVertical:5
     },
     priceSection:{
          flexDirection:"row",
          alignItems:"center",
          gap:3,
     },
     categorySection:{
          width:widthPercentageToDP(30),
          paddingVertical:widthPercentageToDP(1),
          backgroundColor:"#f5f8f9",
          marginVertical:10,
          justifyContent:"center",
          alignItems:"center",
          borderRadius:widthPercentageToDP(3)

     }
})