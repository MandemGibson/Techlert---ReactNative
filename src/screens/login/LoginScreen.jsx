import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Coolors from "../../utils/Coolors";
import { useNavigation } from "@react-navigation/native";
// import CheckBox from "@react-native-community/checkbox";

const LoginScreen = () => {
  // const [toggleCheck, setToggleCheck] = useState(false)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={style.container}>
      <View style={{ marginHorizontal: 10, }}>
        <View style={style.imageContainer}>
          <Image
            source={require("../../../assets/Security.png")}
            style={{ width: 180, height: 180, alignSelf:"center" }}
          />
        </View>
        <TextInput style={style.textInput} placeholder="Email Address" keyboardType="email-address" autoComplete="email"/>
        <TextInput style={style.textInput} placeholder="Password" keyboardType="visible-password"/>
        <View style={{width: "auto"}}>
            <Text
              style={{
                color: Coolors.PRIMARY,
                textDecorationLine: "underline",
                marginBottom: 20,
              }}
            >
              Reset Password?
            </Text>
        </View>

        <View>
          <Text>Remember me next time</Text>
          {/* <CheckBox disabled={false} value={toggleCheck} /> */}
        </View>
        <TouchableOpacity style={style.button} onPress={()=>navigation.navigate("Tabs")}>
          <Text style={{ textAlign: "center", color: Coolors.WHITE }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign:"center", marginTop: 20}}>
          Don't have an account yet? <Text style={{color: Coolors.PRIMARY}} onPress={()=>navigation.navigate("Register")}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
},
  imageContainer: {},
  textInput: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Coolors.PRIMARY,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default LoginScreen;
