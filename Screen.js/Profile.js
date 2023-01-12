import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const listTab = [{ mandem: "pink" }, { mandem: "blue" }, { mandem: "black" }, { mandem: "huop" }];

export default function Profile() {
  const [mandem, setmandem] = useState("ALL");

  const setmandemFilter = (mandem) => {
    setmandem(mandem);
  };


  const Nikepurpose=({item})=>(



    <View style={{justifyContent:"center"}}>

      <TouchableOpacity
      style={[styles.devine, mandem === item.mandem && styles.devineActive]}
      onPress={() => setmandemFilter(item.mandem)}
      >
        <Text>{item.mandem}</Text>
      </TouchableOpacity>
    </View>
  )


 

  

  return (
    <View style={styles.container}>
      <View styles={styles.listTab}>
       <FlatList
       horizontal
       data={listTab}
       renderItem={Nikepurpose}
       />
      </View>
<FlatList





/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  listTab: {
    flexDirection: "row",
    alignSelf: "center",
  },

  devine: {
    justifyContent: "center",
    flexDirection:"row",
    borderWidth:0.5,
    padding: 10,
    width:100
  },

  devineActive:{
backgroundColor:"green"
  }
});
