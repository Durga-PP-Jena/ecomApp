import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icon } from '../../utils/Icon'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

const CustomTab = ({state,navigation}) => {
  const [isSelect,setIsSelect]=useState(false)
     console.log(state.routes)
  return (
     <View style={styles.tabBarStyle}>
     {state.routes.map((route, index) => {
          console.log(route.name)
       const isFocused = state.index === index;
       const onPress = () => {
         const event = navigation.emit({
           type: 'tabPress',
           target: route.key,
           canPreventDefault: true,
         });

         if (!isFocused && !event.defaultPrevented) {
           navigation.navigate(route.name);
         }
       };

       let source = '';
       let routeName = '';

       switch (route.name) {
         case "home":
           source = icon.home;
           routeName = "home";
           if (isFocused) {
             source = icon.home;
           }
           break;

         case "search":
           source = icon.search;
           routeName = "search";
           if (isFocused) {
             source = icon.search;
           }
           break;

         case "post":
           source = icon.post;
           routeName = "post";
           if (isFocused) {
             source = icon.post;
           }
           break;

         case "profile":
           source = icon.profile;
           routeName = "profile";
           if (isFocused) {
             source = icon.profile;
           }
           break;


         default:
           break;
       }

       return source !== '' ? (
         <TouchableOpacity
         key={index}
         onPress={()=>navigation.navigate(routeName)}
           style={styles.wrapper}>
          <Image source={source} style={[styles.icon,{tintColor : isFocused ? "white" : "#082D30"}]} />
           <Text style={[styles.text,{color : isFocused ? "white" : "#082D30"}]}>{route.name}</Text>
         </TouchableOpacity>
       ) : null;
     })}
   </View>
  )
}

export default CustomTab

const styles = StyleSheet.create({
     tabBarStyle:{
          backgroundColor:"#49878F",
          height: heightPercentageToDP(8),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderTopEndRadius: widthPercentageToDP(6),
          borderTopStartRadius: widthPercentageToDP(6),
     },
     icon:{
          width:widthPercentageToDP(7),
          height:widthPercentageToDP(7)
     },
     wrapper:{
          alignItems:"center"
     }
})