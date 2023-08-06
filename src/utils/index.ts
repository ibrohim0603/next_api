import axios from "axios";

export const instance = axios.create({
  baseURL: "https://crudcrud.com/api/83566b8f35404454b863cb0265344ecc/",
  timeout: 10000,
});
