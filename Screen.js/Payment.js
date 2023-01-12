import React, { useState, useRef, useCallback } from "react";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  Text,
  Alert,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Payment = () => {

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/Fonts/Inter-Black.otf"),
    "Inter-BlackItalic": require("../assets/Fonts/Inter-BlackItalic.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>



      <View>


      <Text style={styles.Payment}> order summary</Text>


      <ScrollView>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>


<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{fontWeight:"bold"}}> Color:yellow and black</Text>
</View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
<Image style={{height:100,width:100,}} source={require("../assets/YellowShoe.png")}/>
<View>
<Text style={{marginTop:30}}>nike lolaye</Text>
<Text style={{}}> color:yellow and black</Text>
</View>

</View>
</ScrollView>
     
      </View>
     

     
      

        
      

     

     
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#BDB76B",
  },
  section: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 18,
    borderBottomWidth: 1,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {},

  Payment: { borderBottomWidth: 1, fontFamily: "Inter-Black", fontSize: 20 },
  Payment1: {
    fontFamily: "Inter-Black",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  paywith: { padding: 10 },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 22,
  },
  cvvandexpiredate: { flexDirection: "row" },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  input1: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  input2: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textinputtext: { marginHorizontal: 19 },
  pay: {
    height: 50,
    margin: 15,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    fontFamily: "Inter-BlackItalic",
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 40,
    height: 450,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container1: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
