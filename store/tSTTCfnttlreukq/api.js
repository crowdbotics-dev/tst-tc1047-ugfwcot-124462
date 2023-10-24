import axios from "axios"
import {
  TST_TC1047FNTTLREUKQ_USERNAME,
  TST_TC1047FNTTLREUKQ_PASSWORD
} from "react-native-dotenv"
const tSTTCfnttlreukq = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047FNTTLREUKQ_USERNAME,
    password: TST_TC1047FNTTLREUKQ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
