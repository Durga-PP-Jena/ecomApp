import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const InputButton = ({label}) => {
  return (
    <TouchableOpacity style={styles.btnContianer}>
      <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default InputButton;

const styles = StyleSheet.create({
     btnContianer:{
          width:wp(90),
          height:wp(12),
          backgroundColor:"#7910d9",
          borderRadius:wp(3),
          alignSelf:'center',
          justifyContent:"center",
          alignItems:"center",
          marginTop:wp(10)
     },
     labelText:{
          fontSize:wp(5),
          color:"white",
          
     }
});
