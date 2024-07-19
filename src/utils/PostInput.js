import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const PostInput = ({placeholder,style}) => {
  return (
    <View style={[styles.inputBox,style]}>
     <TextInput
     placeholder={placeholder}
     placeholderTextColor="#dacce7"
     />
    </View>
  )
}

export default PostInput

const styles = StyleSheet.create({
     inputBox:{
          width:wp(85),
          height:wp(14),
          borderWidth:wp(0.4),
          borderColor:"#9DA1A5",
          borderRadius:wp(2),
          alignSelf:'center',
          justifyContent:"center",
          paddingLeft:wp(5),
          // marginTop:wp(10)
          marginTop:wp(8)
     }
})