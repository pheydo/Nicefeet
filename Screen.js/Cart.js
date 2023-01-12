import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { RunningDATA } from "../Component.js/RunningDATA";

const { height, width } = Dimensions.get("window")


const Cart = ({ navigation }) => {
  const RunShoe = ({ item, }) => (

    <View>
        <TouchableOpacity   
        onPress={()=>navigation.navigate("Productdetails",{...item})}
        >
        <View 
    style={{ backgroundColor:"white",height:160,width:160, marginHorizontal:10,marginVertical:22, borderRadius:20,}}
    >
      <Image
        source={item.image}
        style={{
          height: 150,
          width: 150,
          alignSelf: "center",
        }}
        resizeMode={"contain"}
      />
       <View    style={{ margin:height*0.013 }}>
<Text style={{fontSize:15}}>{item.title}</Text>
<Text style={{fontWeight:"bold"}}>{item.title1}</Text>

    </View>
    </View>
        </TouchableOpacity>
  
   
    </View>
  );
  return (
    <SafeAreaView style={{ backgroundColor: "#FADA5E", flex: 1, }}>

   
     
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 15,
          marginVertical: 15,
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>My Cart </Text>

        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
<View style={{justifyContent:"center"}}>
<FlatList data={RunningDATA} renderItem={RunShoe} numColumns={2} keyExtractor={(i,index)=>index.toString()}  />

</View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});

