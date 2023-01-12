import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React, { useState, useRef, useCallback } from "react";
import CustomBottomSheetModal from "./CustomBottomSheetModal";


const Productdetails = ({ route, navigation }) => {
  const itemfromerunning = route.params;

  const [number, onChangeNumber] = useState(null);
  const [number2, onChangeNumber2] = useState(null);
  const [number1, onChangeNumber1] = useState(null);

  // const [modalVisible, setModalVisible] = useState(false);

  const bottomSheetModalRef = useRef(null);
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/Fonts/Inter-Black.otf"),
    "Inter-BlackItalic": require("../assets/Fonts/Inter-BlackItalic.otf"),
    "Inter-SemiBoldItalic": require("../assets/Fonts/Inter-SemiBoldItalic.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
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

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Inter-SemiBoldItalic",
          }}
        >
          {itemfromerunning.title}
        </Text>

        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 5,
              fontFamily: "Inter-SemiBoldItalic",
            }}
          >
            Size
          </Text>
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
            <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>$4658</Text>
          </View>

          <View>
            <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>instock</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              alignSelf: "center",
              marginHorizontal: 10,
              marginVertical: 15,
              fontFamily: "Inter-SemiBoldItalic",
              
            }}
          >
          
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
          onPress={openModal}
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
              Pay divine
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View>
        <CustomBottomSheetModal modalRef={bottomSheetModalRef} height={"50%"}>
        

          <View>
            <Text style={styles.textinputtext}>card number</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="667  429  0754  567"
              keyboardType="numeric"
            />
          </View>

           
          <View style={styles.cvvandexpiredate}>
            <View>
              <Text style={styles.textinputtext}>Expiration date</Text>
              <TextInput
                style={styles.input1}
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder="MM/YY"
                keyboardType="numeric"
              />
            </View>

            <View>
              <Text style={styles.textinputtext}>Cvv</Text>
              <TextInput
                style={styles.input2}
                onChangeText={onChangeNumber2}
                value={number2}
                placeholder="2235"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.pay}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
               
               
              >
                <Text onPress={closeModal}  style={styles.Payment1}>Pay</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </CustomBottomSheetModal>
      </View>

      {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Payment sucessful</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text  style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View> */}
    </SafeAreaView>
  );
};

export default Productdetails;

const styles = StyleSheet.create({


  
 

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
  cvvandexpiredate: { flexDirection: "row",paddingBottom:15},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    
  },
  input1: {
    height: 40,
    width: 120,
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
