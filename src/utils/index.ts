import axios from "axios";

export const instance = axios.create({
  baseURL: "https://crudcrud.com/api/4f7a2ae0a9464273a791b81f1ef59ed4/",
  timeout: 10000,
});
