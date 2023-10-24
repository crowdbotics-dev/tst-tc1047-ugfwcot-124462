import axios from "axios"
import {
  TST_TC1047CWYVSJPCQH_USERNAME,
  TST_TC1047CWYVSJPCQH_PASSWORD
} from "react-native-dotenv"
const tSTTCcwyvsjpcqh = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CWYVSJPCQH_USERNAME,
    password: TST_TC1047CWYVSJPCQH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
