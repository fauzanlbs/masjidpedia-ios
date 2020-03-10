import * as axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

class Api {
  constructor() {
    this.api_token = null;
    this.api_url = "https://dev.mymasjidpedia.id/api-devel";
    this.client = null;
  }

  async create() {
    try {
      this.api_token = await AsyncStorage.getItem("api_token");
    } catch (error) {
      console.log("error", error);
    }

    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 10000,
      headers: headers
    });
  }

  getClient() {
    return this.client;
  }
}

export default Api;
