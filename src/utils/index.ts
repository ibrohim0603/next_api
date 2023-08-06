import axios from "axios";

export const instance = axios.create({
  baseURL: "https://crudcrud.com/api/78a5d9fb67144b628cf977815cbed518/",
  timeout: 10000,
});
