import axios from "axios";

// import API URL from 'congif.js file';
import { LOCAL, PROD } from "../config";

if (process.env) {
  if (process.env.REACT_APP_ENV === "__rae__") {
    window.config = LOCAL;
    // console.log("API URL", window.config.API_URL);
  }
  if (process.env.REACT_APP_ENV === "PROD") {
    window.config = PROD;
  }
}

class HttpService {
  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }
  get(url, queryParams) {
    return axios.get(window.config.API_URL + url, {
      headers: this.getHeaders(),
      ...queryParams,
    });
  }

  post(url, data) {
    return axios.post(window.config.API_URL + url, data, {
      headers: this.getHeaders(),
    });
  }

  update(url, data) {
    return axios.put(window.config.API_URL + url, data, {
      headers: this.getHeaders(),
    });
  }

  delete(url, data) {
    return axios.delete(window.config.API_URL + url, {
      data: data,
      headers: this.getHeaders(),
    });
  }
  // get(url, queryParams) {
  //   return axios.get(window.config.API_URL + url, {
  //     headers: this.getHeaders(),
  //     ...queryParams,
  //   });
  // }
  // post(url, data) {
  //   return axios.post(window.config.API_URL + url, data, {
  //     headers: this.getHeaders(),
  //   });
  // }
  // update(url, data) {
  //   return axios.put(window.config.API_URL + url, data, {
  //     headers: this.getHeaders(),
  //   });
  // }
  // delete(url, data) {
  //   return axios.delete(window.config.API_URL + url, {
  //     data: data,
  //     headers: this.getHeaders(),
  //   });
  // }
  getHeaders() {
    const token = localStorage.getItem("token");
    // if (this.accessToken) {
    //   headers["Authorization"] = `Bearer ${this.accessToken}`;
    // }
    return {
      Authorization: `Bearer ${token ?? ""}`,
      "Content-Type": "application/json",
    };
  }
}

export default new HttpService();
