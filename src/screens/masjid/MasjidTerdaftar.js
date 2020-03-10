import React from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";

function MasjidTerdaftar(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: "gray", alignSelf: "stretch", padding: 7 }}
      >
        <Text style={{ color: "#FFF", fontFamily: "Bahnschrift" }}>
          {" "}
          LIST MASJID TERDAFTAR
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "lightgrey",
          alignSelf: "stretch",
          padding: 7
        }}
      >
        <View style={{ border: 1, borderRadius: 3, justifyContent: "center" }}>
          <TextInput
            style={{
              width: 340,
              height: 40,
              borderRadius: 8,
              backgroundColor: "#fff",
              margin: 5,
              padding: 10,
              textAlign: "left",
              color: "grey"
            }}
            placeholder="Tulis nama kota atau nama masjid ..."
          />
          <Image
            style={{ height: 32, width: 32, position: "absolute", right: 21 }}
            source={require("../../assets/search.png")}
          />
        </View>
      </View>

      <View style={{ backgroundColor: "#F5F5F5" }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid Agung"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>Masjid Agung</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid Bersejarah"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>Masjid Bersejarah</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid Besar"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>Masjid Besar</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid Jami"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>Masjid Jami</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid di Tempat Publik"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>
            Masjid di Tempat Publik
          </Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MasjidTerdaftarDetail", {
              jenis: "Masjid Raya"
            });
          }}
          style={{
            border: 1,
            height: 40,
            borderRadius: 3,
            backgroundColor: "#fff",
            margin: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 7
          }}
        >
          <Text style={{ fontFamily: "Bahnschrift" }}>Masjid Raya</Text>
          <Image
            style={{
              height: 25,
              width: 25,
              backgroundColor: "gold",
              borderRadius: 5
            }}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MasjidTerdaftar;
