import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Productdetail = ({ route, navigation }) => {
  const itemfromerunning = route.params;
  return (
    <SafeAreaView>
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

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          {itemfromerunning.title}
        </Text>

        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={{ fontSize: 20, marginHorizontal: 5 }}>Size</Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <Text style={{ alignSelf: "center" }}>39</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ alignSelf: "center" }}>40</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ alignSelf: "center" }}>42</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ alignSelf: "center" }}>43</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ alignSelf: "center" }}>44</Text>
            
          </TouchableOpacity>

          <Button>
            <Image/>
          </Button>

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#F7F8DC",
              borderRadius: 7,
              marginLeft: 5,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center" }}>45</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Image
            source={itemfromerunning.image}
            style={{
              height: 400,
              width: 300,
              alignSelf: "center",
              marginRight: 20,
            }}
            resizeMode={"contain"}
          />
        </View>
      </View>

      <ImageBackground
        source={require("../assets/Ellipse1.png")}
        style={{ height: 300, marginTop: -50 }}
        resizeMode={"stretch"}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <View>
            <Text>$4658</Text>
          </View>

          <View>
            <Text>instock</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Text style={{ alignSelf: "center", marginVertical: 15 }}>
            {" "}
            loren ipsium,Synopsis is a medicine of loren loren ipsium,Synopsis
            is a medicine of loren loren ipsium,Synopsis is a medicine of loren
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              borderRadius: 50,
              height: 40,
              width: 40,
              marginHorizontal: 10,
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 50,
              height: 40,
              width: 40,
              marginHorizontal: 10,
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              height: 40,
              width: 40,
              marginHorizontal: 10,
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 50,
              height: 40,
              width: 40,
              marginHorizontal: 10,
            }}
          ></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={{
              backgroundColor: "black",
              borderRadius: 50,
              height: 50,
              width: 300,
              marginVertical: 10,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Productdetail;

const styles = StyleSheet.create({});
