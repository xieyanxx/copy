import axios, { Method } from "axios";
import { history } from "umi";

export default function request(
  url: string,
  method: Method,
  data?: any,
  params?: any,
  headers?: any
) {
  return new Promise((resolve, reject) => {
    url = url.includes("http") ? url : API_HOST + url;
    return axios(url, {
      method,
      data,
      params,
      headers: {
        Authorization: localStorage.getItem("token"),
        lang: localStorage.getItem("lang"),
        "Content-Type": "application/json",
        ...headers,
      },
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch(async (err: any) => {
        if (err.response.status === 401) {
          history.push("/");
        }
        reject(err);
      });
  });
}
