import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Button } from "native-base";
import Api from "../../api/server";
import { withNavigation } from "react-navigation";

class MasjidTerdaftarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dkmData: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    let data = {
      tipologi: this.props.navigation.state.params.jenis
    };
    const api = new Api();
    await api.create();
    client = api.getClient();
    client.post("/dkmku", data).then(res => {
      this.setState({
        dkmData: res.data.dkm,
        isLoading: false
      });
    });
  }

  renderList = item => {
    return (
      <View style={{ backgroundColor: "#F5F5F5" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MasjidTerdaftarInfo");
          }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            border: 1,
            borderRadius: 3,
            margin: 10
          }}
        >
          <View style={{ width: "20%" }}>
            <Image
              style={{ height: 60, width: 60, borderRadius: 5 }}
              source={{ uri: item.item.dkm_image }}
            />
          </View>
          <View style={{ width: "60%" }}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontFamily: "Bahnschrift" }}>
                {item.item.dkm_name}
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Bahnschrift" }}>
                {item.item.dkm_address}
              </Text>
            </View>
          </View>
          <View style={{ width: "20%", justifyContent: "center" }}>
            <Button
              small
              onPress={this.onSubmit}
              block
              style={{ backgroundColor: "gold", borderRadius: 5, margin: 5 }}
            >
              <Text style={{ color: "grey", margin: 5, fontSize: 8 }}>
                UNFOLLOW
              </Text>
            </Button>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ backgroundColor: "gray", alignSelf: "stretch", padding: 7 }}
        >
          <Text style={{ color: "#FFF", fontFamily: "Bahnschrift" }}>
            {this.props.navigation.state.params.jenis}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "lightgrey",
            alignSelf: "stretch",
            padding: 7
          }}
        >
          <View
            style={{ border: 1, borderRadius: 3, justifyContent: "center" }}
          >
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
        {this.state.isLoading && (
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ActivityIndicator size="large" color="gold" />
          </View>
        )}
        <FlatList
          data={this.state.dkmData}
          renderItem={this.renderList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default withNavigation(MasjidTerdaftarDetail);
