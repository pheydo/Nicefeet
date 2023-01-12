import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../Component.js/DATA";
import { useFonts } from "expo-font";
import { StatusBar } from 'react-native'

const Home = ({ navigation }) => {
  const [onChangeText, setonChangeText] = useState(false);

  const nike = ({ item }) => (
    <View
      style={{
        height: 180,
        marginHorizontal: 15,
        width: 250,
        flexDirection: "row",
        backgroundColor: "#F5DB7B",
        borderRadius: 15,
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <Text>Nike</Text>
        <Text>Free Metcon</Text>
        <Text>$1.2</Text>
      </View>

      <View style={{}}>
        <Image
          source={item.image}
          style={{ height: 160, width: 150 }}
          resizeMode={"stretch"}
        />
      </View>
    </View>
  );

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/Fonts/Inter-Black.otf"),
    "Inter-BlackItalic": require("../assets/Fonts/Inter-BlackItalic.otf"),
    "Inter-SemiBoldItalic":require("../assets/Fonts/Inter-SemiBoldItalic.otf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent " translucent = {true}/>

      <ScrollView>
        <View style={styles.search}>
          <Text style={styles.nicefeet}>Nice Feet</Text>
          <TextInput
            style={styles.input2}
            onChangeText={setonChangeText}
            value={onChangeText}
            keyboardType=""
            placeholder="Search brands and categores"
          />

          <View style={{ flexDirection: "row", margin: 5 }}>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categories}>men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categories}>woman</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categories}>Kids</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categories}>Unisex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categories}>Others</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={[styles.brandss,styles.shadowimage]}
            source={require("../assets/image419.png")}
          />
        </View>

        
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal:8,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Select a brand
          </Text>

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
        <View style={{marginHorizontal:8,}}>
          <View style={styles.brand}>
            <View style={styles.brands}>
              <TouchableOpacity onPress={() => navigation.navigate("nike")}>
                <Text style={styles.brandname}>Nike</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.brands}>
              <Text style={styles.brandname}>Adidas</Text>
            </View>
          </View>

          <View style={styles.brand}>
            <View style={styles.brands}>
              <Text style={styles.brandname}>Puma</Text>
            </View>
            <View style={styles.brands}>
              <Text style={styles.brandname}>Crocs</Text>
            </View>
          </View>

          <View style={styles.brand}>
            <View style={styles.brands}>
              <Text style={styles.brandname}>Reebok</Text>
            </View>
            <View style={styles.brands}>
              <Text style={styles.brandname}>Sckechers</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal:8
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            what's popular
          </Text>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  brand: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
  },
  brands: {
    height: 60,
    width: 160,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
  },
  brandname: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  popular: {
    height: 170,
    width: 200,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input2: {
    height: 50,
    width: 320,
    margin: 5,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
  },

  brandss: {
    height: 150,
    width: 330,
    alignSelf: "center",
    padding: 20,
    borderRadius: 20,
  },
  search: {
    backgroundColor: "#F5DB7B",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  category: { marginHorizontal: 17, flexDirection: "row" },
  nicefeet: {
    alignSelf: "center",
    margin: 5,
    fontSize: 30,
    fontFamily: "Inter-BlackItalic",
  },
  categories:{fontFamily:"Inter-SemiBoldItalic",fontSize:13},

  shadowimage:{shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
  elevation: 5,}
});
