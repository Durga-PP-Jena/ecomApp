import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { icon } from "../utils/Icon";
import ImageCarosel from "../utils/ImageCarosel";
import ProductCategories from "../utils/ProductCategories";
import { data, product } from "../utils/Data";
import Product from "../utils/Product";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: wp(5),
        paddingTop: wp(10),
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <View style={styles.userSection}>
          <Text style={styles.text}>G</Text>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userText}>Game Play</Text>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Image source={icon.search} style={styles.searchIcon} />
        <TextInput placeholder="Search" />
      </View>
      <View
        style={
          {
            // marginTop:wp(5)
          }
        }
      >
        <ImageCarosel />
        <Text style={styles.userText}>Categories</Text>
        <ProductCategories data={data} />
      </View>
      <View>
      <Text style={styles.userText}>Latest Item</Text>
        <Product data ={product}/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  userSection: {
    width: wp(16),
    height: wp(16),
    backgroundColor: "#052e38",
    borderRadius: wp(16),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: wp(10),
    color: "white",
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: wp(5),
    color: "gray",
    fontWeight: "bold",
  },
  userText: {
    fontSize: wp(5),
    color: "black",
    fontWeight: "bold",
  },
  inputSection: {
    width: wp(90),
    height: wp(10),
    borderWidth: wp(0.2),
    borderColor: "#27bff1",
    backgroundColor: "#f5f8f9",
    borderRadius: wp(5),
    alignSelf: "center",
    // justifyContent: "center",
    paddingLeft: wp(5),
    marginTop: wp(2),
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  searchIcon: {
    width: wp(6),
    height: wp(6),
    tintColor: "#dacce7",
  },
});
