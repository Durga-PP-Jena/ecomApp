import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { icon } from './Icon'
import { useNavigation } from '@react-navigation/native'

const BackTopHeader = ({label}) => {
     const navigation = useNavigation()
  return (
    <View style={styles.backContainer}>
     <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Image  source={icon.back} style={styles.backIcon}/>
     </TouchableOpacity>
       <Text style={styles.text}>{label}</Text>
    </View>
  )
}

export default BackTopHeader

const styles = StyleSheet.create({
     backContainer:{
          width:widthPercentageToDP(100),
          height:widthPercentageToDP(15),
          marginTop:widthPercentageToDP(10),
          flexDirection:"row",
          gap:widthPercentageToDP(4),
          alignItems:"center",
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
     backIcon:{
          width:widthPercentageToDP(7),
          height:widthPercentageToDP(7),
          marginLeft:widthPercentageToDP(5),
          tintColor:"gray"
     },
     text:{
          fontSize:widthPercentageToDP(5),
          color:"#dacce7"
     }
})