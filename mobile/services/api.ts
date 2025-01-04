
import axios from "axios";

//192.168.101.5:3333/create:3333 /create
export const api = axios.create({
  baseURL: "http://192.168.101.5:3333"
})