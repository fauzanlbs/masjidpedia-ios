import React from "react";
import { View, Text, Image } from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes
// } from "@react-native-community/google-signin";

function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginTop: 10 }}> ──────── Daftar dengan ────────</Text>
      <Image
        style={{ height: 50, width: 50, marginTop: 5, borderRadius: 5 }}
        source={require("../../assets/google_logo.png")}
      />
    </View>
  );
}

export default Register;
