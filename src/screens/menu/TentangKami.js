import React from "react";
import { View, Text } from "react-native";

function TentangKami() {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginTop: 10,
          marginBottom: 10
        }}
      />
      <Text style={{ fontFamily: "Bahnschrift", fontWeight: "bold" }}>
        MASJIDPEDIA
      </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginTop: 10,
          marginBottom: 10
        }}
      />
      <Text style={{ fontFamily: "Bahnschrift" }}>
        Menjadikan Masjidnya ma'mur bersama jama'ah di era Digital ini. {"\n"}{" "}
        {"\n"}
        Aplikasi MASJIDPEDIA adalah suatu SOLUSI DIGITAL dalam menjawab
        kebutuhan umat Islam di era Digital saat ini. {"\n"} {"\n"}
        Kebutuhan Media Digital Informasi yang berkaitan dengan Masjid sebagai
        salah satu tonggak pengembangan kesejahteraan ummat dalam hal agama,
        ekonomi dan sosial. InsyaAllah akan didapati di aplikasi MASJIDPEDIA
        ini. {"\n"} {"\n"}
      </Text>
    </View>
  );
}

export default TentangKami;
