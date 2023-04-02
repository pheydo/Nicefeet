import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Platform, Dimensions
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../Component.js/DATA";
const { height, width } = Dimensions.get("window")

const Niketypes = [
  { Niketype: "casual" },
  { Niketype: "coporate" },
  { Niketype: "Gymn" },
  { Niketype: "Running" },
];
export default function Nike({ navigation }) {
  const [Niketype, setNiketype] = useState("ALL");

  const setNiketypeFilter = (Niketype) => {
    setNiketype(Niketype);
  };

  const Nikepurpose = ({ item }) => (
    <View style={{ justifyContent: "center" }}>
      <TouchableOpacity
        style={[
          styles.purpose,
          Niketype === item.Niketype && styles.devineActive,
        ]}
        onPress={() => setNiketypeFilter(item.Niketype)}
      >
        <Text>{item.Niketype}</Text>
      </TouchableOpacity>
    </View>
  );

  const nike = ({ item }) => (
    <View
      style={{
        height: Platform.OS === 'ios' ? 180 : 150,
        marginHorizontal: 15,
        marginVertical: Platform.OS === 'ios' ? 20 : 0,
        width: 250,
        flexDirection: "row",
        backgroundColor: "#F0FFF0",
        borderRadius: 15,
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginLeft: 20, justifyContent:"center" }}>
        <Text >Nike</Text>
        <Text>Free Metcon</Text>
        <Text>$1.2</Text>
      </View>

      <View style={{justifyContent:"center"}}>
        <Image
          source={item.image}
          style={{ height: 160, width: 150 }}
          resizeMode={"stretch"}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.myComponent}>
      <View style={styles.card1}>
        <View style={{ padding: 10 }}>
          <Image
            style={styles.image1}
            resizeMode={"stretch"}
            source={require("../assets/JustdoitwithNike.png")}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "black",
              height: 30,
              width: 100,
              borderRadius: 50,
              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.image2}
            resizeMode={"stretch"}
            source={require("../assets/nike1.png")}
          />
        </View>
      </View>
      <View>
        <View>
          <FlatList horizontal data={Niketypes} renderItem={Nikepurpose} />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Running</Text>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Running")}
            style={{
              backgroundColor: "black",
              height: 30,
              width: 100,
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              see more
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList data={DATA} horizontal renderItem={nike} />
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Latest</Text>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              height: 30,
              width: 100,
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              see more
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList data={DATA} horizontal renderItem={nike} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  myComponent: {
    width: Dimensions.get('window').width * 1, // Set the width to 80% of the screen width
    height: Platform.OS === 'ios' ? 200 : 150, // Set the height to 100 on iOS and 80 on Android
    
  },
  card1: {
    marginTop:Platform.OS === 'ios' ? 60 : 40,
    height: 180,
    width:width*0.9,
    backgroundColor: "#28282B",
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "center",
  },
  image1: { height: 60, marginTop: Platform.OS === 'ios' ? 20 : 30, width: 150 },
  image2: { height: 250, width: 170, alignSelf: "center" },
  purpose: {
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
    borderWidth: 2,
    left: 10,
    marginRight: 10,
    marginTop: 20,
  },
  purposetext: {
    fontSize: 15,
    fontWeight: "bold",
  },

  devineActive: {
    backgroundColor: "#F0FFF0",
  },
});
