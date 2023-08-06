import axios from "axios";

export const instance = axios.create({
  baseURL: "https://crudcrud.com/api/1865de9e36c54876890bc1431320978a/",
  timeout: 10000,
});
