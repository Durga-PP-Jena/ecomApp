import { KeyboardAvoidingView, StyleSheet, Text, View,TouchableOpacity,Image } from "react-native";
import React from "react";
import InputField from "../utils/InputField";
import { widthPercentageToDP } from "react-native-responsive-screen";
import InputButton from "../utils/InputButton";
import { icon } from "../utils/Icon";
const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.headerText}>Login</Text>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          marginTop: widthPercentageToDP(60),
        }}
      >
        <InputField placeholder="Email" />
        <InputField placeholder="passWord" secureTextEntry={true} />
        <InputButton label="login" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: widthPercentageToDP(5),
          }}
        >
          <Text style={{ color: "gray" }}>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#1394ed" }}>Please Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnsection}>
          <TouchableOpacity>
          <Image source={icon.google} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={icon.facebook} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: widthPercentageToDP(8),
    color: "gray",
    fontWeight: "600",
    marginTop: widthPercentageToDP(30),
  },
  btnsection:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:widthPercentageToDP(7),
    marginTop:widthPercentageToDP(12)
  },
  icon:{
    width:widthPercentageToDP(12),
    height:widthPercentageToDP(12)
  }
});
