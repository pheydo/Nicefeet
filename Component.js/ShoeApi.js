// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     ActivityIndicator,
//     TouchableOpacity,
//   } from "react-native";
//   import React, { useEffect, useState } from "react";
//   import axios from "axios";
  
//   const ShoeApi = () => {
//     const [allShoesFetched, setAllShoesFetched] = useState([]);
//     const [loading, setloading] = useState(false);
  
//     useEffect(() => {
//       FetchShoes();
//     }, []);
  
//     const FetchShoes = async () => {
//       // get data from rapid api
//       // create a function that get data from the back end
//       //
  
//       setloading(true);
//       const options = {
//         method: "GET",
//         url: "https://shoes-collections.p.rapidapi.com/shoes",
//         headers: {
//           "X-RapidAPI-Key": "2a6c819b1fmsha59cbc36c6353cdp102a54jsn60f4a8fc8578",
//           "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//         },
//       };
  
//       try {
//         const res = await axios(
//           "https://shoes-collections.p.rapidapi.com/shoes",
//           options
//         );
//         console.log((res.data), "huyguuhhu");
//       setAllShoesFetched(res.data);
  
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setloading(false);
//       }
//     };
  
//     if (loading) {
//       return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//           <ActivityIndicator size={"large"} color={"blue"} />
//         </View>
//       );
//     }
  
//     return (
//       <View style={styles.V1}>
//         <FlatList
//           data={allShoesFetched}
//           renderItem={({ item, index }) => (
//             <TouchableOpacity
//               style={{ marginBottom: 20, alignItems: "center" }}
  
//                 // onPress={()=>navigation.navigate("Home",{...item})}
//             >
//               <Image
//                 source={{ uri: item?.image }}
//               // source={{uri: }}
//                 style={{ width: 200, height: 200 }}
//               />
//               <Text style={{ color: "red", fontSize: 20 }}>{item?.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
//   };
  
//   export default ShoeApi;
  
//   const styles = StyleSheet.create({
//     V1: {
//       flex: 1,
//     },
//   });
  