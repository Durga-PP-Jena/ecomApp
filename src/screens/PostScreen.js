import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { icon } from '../utils/Icon'
import PostInput from '../utils/PostInput'
import InputButton from '../utils/InputButton'
import SelectCategory from '../utils/SelectCategory'

const PostScreen = () => {
     const [selectCategory,setSelectCategory]=useState("Select Category")
     useEffect(()=>{
          
     },[selectCategory])
  return (
    <View style={{
     flex:1,
     backgroundColor:"white",
     paddingTop:widthPercentageToDP(10),
     paddingHorizontal:widthPercentageToDP(5)
    }}>
     <Text style={styles.headerText}>Add new post</Text>
     <Text style={styles.text}>Create New Post & Start Selling</Text>
     <View style={styles.imageSection}>
          <TouchableOpacity style={styles.imagecontainer}>
 <Image source={icon.plus}style={styles.cameraIcon}/>
          </TouchableOpacity>
     </View>

     <View>
          <PostInput
          placeholder="Title"
          />
          <PostInput
          style={styles.newContainer}
          placeholder="Description"
          />
          <PostInput
          placeholder="price"
          />
          <PostInput
          placeholder="Adress"
          />
          <SelectCategory
          label={selectCategory}
          setSelectCategory={setSelectCategory}
          />
          <InputButton
          label="submit"
          />
     </View>
     </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
     headerText:{
          fontSize:widthPercentageToDP(6),
          color:"black",
          fontWeight:"bold",
     },
     text:{
          fontSize:widthPercentageToDP(4),
          color:"gray",
          fontWeight:"bold"
     },
     imageSection:{
          flexDirection:"row",
          alignItems:"center",
          gap:10
     },
     cameraIcon:{
          width:widthPercentageToDP(5),
          height:widthPercentageToDP(5),
          tintColor:"gray"
     },
     imagecontainer:{
          width:widthPercentageToDP(15),
          height:widthPercentageToDP(15),
          borderRadius:widthPercentageToDP(3),
          backgroundColor:"#f4f2f3",
          justifyContent:"center",
          alignItems:"center",
          marginVertical:10
     },
     newContainer:{
          height:widthPercentageToDP(20)
     }

})