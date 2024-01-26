import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Coolors from "../../utils/Coolors";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
          >
            Sign Up
          </Text>
          <Image
            source={require("../../../assets/signup.png")}
            style={{ objectFit: "contain", alignSelf: "center" }}
          />
          <TextInput style={styles.textInput} placeholder="First name" />
          <TextInput style={styles.textInput} placeholder="Last name" />
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            keyboardType="email-address"
            autoComplete="email"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            keyboardType="visible-password"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm password"
            keyboardType="visible-password"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={{ textAlign: "center", color: Coolors.WHITE }}>
              Register
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Already have an account?{" "}
            <Text style={{ color: Coolors.PRIMARY }} onPress={()=> navigation.navigate("Login")}>Log In</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
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

export default RegisterScreen;
