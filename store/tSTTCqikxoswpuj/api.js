import axios from "axios"
import {
  TST_TC1047QIKXOSWPUJ_USERNAME,
  TST_TC1047QIKXOSWPUJ_PASSWORD
} from "react-native-dotenv"
const tSTTCqikxoswpuj = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047QIKXOSWPUJ_USERNAME,
    password: TST_TC1047QIKXOSWPUJ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
