import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import InputField from "../utils/InputField";
import { widthPercentageToDP } from "react-native-responsive-screen";
import InputButton from "../utils/InputButton";
const SignupScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.headerText}>signup</Text>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          marginTop: widthPercentageToDP(30),
        }}
      >
        <InputField placeholder="firstName" />
        <InputField placeholder="lastName" />
        <InputField placeholder="Email" />
        <InputField placeholder="passWord" secureTextEntry={true} />
        <InputButton label="register" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: widthPercentageToDP(5),
          }}
        >
          <Text style={{ color: "gray" }}>Already Have an Account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#1394ed" }}>Please Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: widthPercentageToDP(8),
    color: "black",
    fontWeight: "600",
    marginTop: widthPercentageToDP(30),
  },
});
