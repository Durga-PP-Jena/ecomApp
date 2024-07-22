import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageSlider from "react-native-image-slider";
import { icon } from "./Icon";
import { widthPercentageToDP } from "react-native-responsive-screen";

// ...
const images = [icon.sale, icon.sale2, icon.sale3, icon.sale4];

const ImageCarosel = () => {
  return (
    <View style={{
     width:widthPercentageToDP(88),
     height:widthPercentageToDP(50),
     marginVertical:10,
    }}>
      <ImageSlider 
      loopBothSides
      autoPlayWithInterval={3000}
      images={images} />
    </View>
  );
};

export default ImageCarosel;

const styles = StyleSheet.create({});
