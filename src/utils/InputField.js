import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TextInput } from 'react-native-gesture-handler'

const InputField = ({placeholder,secureTextEntry}) => {
  return (
    <View style={styles.inputBox}>
     <TextInput
     placeholder={placeholder}
     secureTextEntry={secureTextEntry}
     placeholderTextColor="#dacce7"
     />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
     inputBox:{
          width:wp(90),
          height:wp(12),
          borderWidth:wp(0.2),
          borderColor:"#27bff1",
          backgroundColor:"#f5f8f9",
          borderRadius:wp(5),
          alignSelf:'center',
          justifyContent:"center",
          paddingLeft:wp(5),
          marginTop:wp(10)
          
     }
})