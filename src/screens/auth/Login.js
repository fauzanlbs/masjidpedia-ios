import React, { Component } from "react";
import { View, Text, Image, ActivityIndicator, Alert } from "react-native";
import { Container, Form, Item, Input, Label, Icon, Button } from "native-base";
import Api from "../../api/server";
import AsyncStorage from "@react-native-community/async-storage";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes
// } from "@react-native-community/google-signin";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    this.setState({
      isLoading: true
    });
    let api = new Api();
    await api.create();
    let client = api.getClient();

    let data = {
      customer_email: this.state.email,
      customer_password: this.state.pass
    };

    let user = client
      .post("/login", data)
      .then(res => {
        if (this.state.email === "") {
          Alert.alert(
            "Silahkan Coba Lagi",
            "Field Tidak Boleh Kosong",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        } else if (res.data.customer_token) {
          let user = res.data;
          AsyncStorage.setItem("api_token", user.customer_token);
          AsyncStorage.setItem("user", JSON.stringify(user.message));
          this.props.navigation.navigate("Home");
        } else {
          Alert.alert(
            "Silahkan Coba Lagi",
            res.data.message,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }
      })
      .catch(err => {
        console.log("ini errornya", err);
      });
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Container>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ height: 200, width: 200, marginTop: 5, borderRadius: 5 }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <Form>
          <Item floatingLabel>
            <Icon active name="mail" />
            <Label>Email</Label>
            <Input
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
          </Item>
          <Item floatingLabel last>
            <Icon active name="lock" />
            <Label>Password</Label>
            <Input
              value={this.state.pass}
              onChangeText={text => this.setState({ pass: text })}
            />
          </Item>
        </Form>

        <Button
          onPress={this.onSubmit}
          block
          style={{ margin: 20, backgroundColor: "grey" }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>MASUK</Text>
        </Button>

        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "gold", fontWeight: "bold" }}>
            Lupa Password?
          </Text>

          <Text style={{ marginTop: 10 }}> ──────── Masuk dengan ────────</Text>
          <Image
            style={{ height: 50, width: 50, marginTop: 5, borderRadius: 5 }}
            source={require("../../assets/google_logo.png")}
          />
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
      </Container>
    );
  }
}
