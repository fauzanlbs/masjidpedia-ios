import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import axios from "axios";
import moment from "moment";
// import { TOKEN_SOLAT } from "react-native-dotenv";

const screenWidth = Dimensions.get("window").width;

class JadwalSolat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jadwal: [],
      jadwalAll: [],
      latitude: 0,
      longitude: 0,
      currentDay: moment().format("DD MMMM YYYY"),
      isLoading: true,
      hijri: ""
    };
  }

  componentWillMount() {
    this._getCoordinat();

    const hijri = new Intl.DateTimeFormat("fr-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(Date.now());
    this.setState({ hijri });
  }

  fetchData() {
    let token = "9898e4c17ec6d4ad3432a0bfd152202c";
    this.state.latitude = "3.2219665";
    this.state.longitude = "101.7210999";
    let url = `https://muslimsalat.com/daily.json?latitude=${this.state.latitude}&&longitute=${this.state.longitude}&&key=${token}`;
    axios
      .get(`https://muslimsalat.com/kualalumpur.json?key=${token}`)
      .then(res => {
        this.setState({
          jadwal: res.data.items[0],
          jadwalAll: res.data,
          isLoading: false
        });
      });
  }

  _getCoordinat() {
    //Get location
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        this.fetchData();
      },
      error => console.log("Error get location", error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
    );
  }

  render() {
    return (
      <View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ height: 280, width: screenWidth }}
            source={require("../assets/bg_shubuh.png")}
            resizeMode="stretch"
          />
        </View>

        {this.state.isLoading ? (
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <ActivityIndicator size="large" color="gold" />
          </View>
        ) : (
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10
              }}
            >
              <Text style={{ margin: 5, fontSize: 13 }}>
                {" "}
                {this.state.jadwalAll.state}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 30,
                  width: 300,
                  borderRadius: 6,
                  margin: 3,
                  backgroundColor: "rgba(128, 128, 128, 0.7)"
                }}
              >
                <Text style={{ color: "#fff", fontFamily: "Bahnschrift" }}>
                  {" "}
                  {this.state.currentDay} | {this.state.hijri}
                </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#F5F5F5", margin: 7 }}>
              <View style={styles.containerRow}>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  Shubuh
                </Text>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  {this.state.jadwal.fajr}
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/adzan_ON.png")}
                />
              </View>

              <View style={styles.containerRow}>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  Dzuhur
                </Text>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  {this.state.jadwal.dhuhr}
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/adzan_ON.png")}
                />
              </View>

              <View style={styles.containerRow}>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  Ashar
                </Text>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  {this.state.jadwal.asr}
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/adzan_ON.png")}
                />
              </View>

              <View style={styles.containerRow}>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  Magrib
                </Text>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  {this.state.jadwal.maghrib}
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/adzan_ON.png")}
                />
              </View>

              <View style={styles.containerRow}>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  Isya
                </Text>
                <Text style={{ fontFamily: "Bahnschrift", width: "30%" }}>
                  {this.state.jadwal.isha}
                </Text>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../assets/adzan_ON.png")}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRow: {
    height: 50,
    borderRadius: 3,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 7
  }
});

export default JadwalSolat;
// ApiClient.init(TOKEN_SOLAT);
