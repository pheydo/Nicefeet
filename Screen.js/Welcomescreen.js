import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Navigation from "../Component.js/Navigation";

const Welcomescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#EFBD09", "#C5FF7B"]}
        start={{ x: 0.1, y: 0.6 }}
        style={styles.background}
      >
        <Image
          source={require("../assets/nexuz.png")}
          resizeMode={"contain"}
          style={[styles.imagenexuz, { top: "10%" }]}
        />
        <Image
          source={require("../assets/nexuz.png")}
          resizeMode={"contain"}
          style={[styles.imagenexuz, { top: "25%" }]}
        />
        <Image
          source={require("../assets/nexuz.png")}
          resizeMode={"contain"}
          style={[styles.imagenexuz, { top: "40%" }]}
        />
        <Image
          source={require("../assets/nexuz.png")}
          resizeMode={"contain"}
          style={[styles.imagenexuz, { top: "55%" }]}
        />

        <Image
          source={require("../assets/welcomeshoe.png")}
          style={{
            height: 300,
            width: 300,
            alignSelf: "center",
            alignItems: "center",
            top: 200,
          }}
        />
        <Image
          source={require("../assets/sf.png")}
          resizeMode={"stretch"}
          style={{
            height: 50,
            width: 270,
            alignSelf: "center",
            alignItems: "center",
            top: 220,
          }}
        />
        <Image
         
          source={require("../assets/finger.png")}
          resizeMode={"stretch"}
          style={{
            height: 20,
            width: 200,
            alignSelf: "center",
            alignItems: "center",
            top:240,
           
          }}
        
        />

        <View>

          <TouchableOpacity 
          onPress={() => navigation.navigate("Tabnavigation")}
          style={[styles.opacity, styles.elevation]}
          
          >
            <Text style={{alignSelf:"center",color:"white",fontWeight:"bold",fontSize:20}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  imagenexuz: {
    width: "80%",
    height: 100,
    position: "absolute",
    left: "10%",
  },


  opacity:{

height:70,
width:170,
backgroundColor:"black",
alignSelf:"center",
top:260,
borderRadius:50,
justifyContent:"center"


  },
  elevation:{

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
  }
});
