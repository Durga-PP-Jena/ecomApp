import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { icon } from "./Icon";
import { data } from "./Data";
import { ScrollView } from "react-native-gesture-handler";

const SelectCategory = ({ setSelectCategory,label }) => {
  const [show, setShow] = useState(false);
  return (
    <View style={[styles.inputBox]}>
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity onPress={() => setShow(!show)}>
        {show ? (
          <Image source={icon.up} style={styles.iconStyle} />
        ) : (
          <Image source={icon.down} style={styles.iconStyle} />
        )}
      </TouchableOpacity>
      {show ? (
        <ScrollView style={styles.categorySection}>
          {data.map((item) => {
            return (
              <TouchableOpacity 
              onPress={()=>{
               setShow(false)
               setSelectCategory(item.name)
              }}
              key={item.id} style={styles.wrapper}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({
  inputBox: {
    width: wp(85),
    height: wp(14),
    borderWidth: wp(0.4),
    borderColor: "#9DA1A5",
    borderRadius: wp(2),
    alignSelf: "center",
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop:wp(10)
    marginTop: wp(8),
  },
  text: {
    fontSize: widthPercentageToDP(4),
    color: "#dacce7",
  },
  iconStyle: {
    width: widthPercentageToDP(5),
    height: widthPercentageToDP(5),
    tintColor: "gray",
  },
  categorySection: {
    width: widthPercentageToDP(85),
    backgroundColor: "white",
    backgroundColor: "#B9CACD",
    //     borderWidth: widthPercentageToDP(0.6),
    borderColor: "gray",
    height: widthPercentageToDP(60),
    position: "absolute",
    alignSelf: "center",
    bottom: widthPercentageToDP(15),
    zIndex: 10,
  },
  wrapper: {
    width: "100%",
    height: 50,
    borderBottomWidth: widthPercentageToDP(0.2),
    borderBlockColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
