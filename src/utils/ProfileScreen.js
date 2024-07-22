import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { icon } from "./Icon";
import { StatusBar } from "expo-status-bar";

const ProfileScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: wp(5),
        paddingTop: wp(10),
      }}
    >
            <StatusBar style="auto" />

      <View style={styles.userImage}>
        <Text style={styles.userText}>G</Text>
      </View>
      <Text style={styles.nameText}>Game Play</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.cardContainer}>
          <Image source={icon.myProduct} style={styles.icon} />
          <Text style={styles.text}>my products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <Image source={icon.explore} style={styles.icon} />
          <Text style={styles.text}>explores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <Image source={icon.myIcon} style={styles.icon} />
          <Text style={styles.text}>Durga Web</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.cardContainer,{
          width:wp(90)
      }]}>
      <Image source={icon.logout} style={styles.icon} />
          <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    backgroundColor: "#052e38",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: wp(10),
  },
  userText: {
    fontSize: wp(14),
    color: "white",
    fontWeight: "bold",
  },
  nameText: {
    fontSize: wp(6),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap:wp(3),
    paddingVertical:wp(5)
  },
  cardContainer:{
     width:wp(28),
     height:wp(28),
     backgroundColor:"#f5f8f9",
     borderWidth:wp(0.1),
     borderColor:"#27bff1",
     justifyContent:'center',
     alignItems:"center"
  },
  icon:{
     width:wp(10),
     height:wp(10),
  },
  text:{
     fontSize:wp(4),
     color:"black",
     fontWeight:"600"
  }
});
