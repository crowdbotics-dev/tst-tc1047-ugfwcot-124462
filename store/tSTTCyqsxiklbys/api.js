import axios from "axios"
import {
  TST_TC1047YQSXIKLBYS_USERNAME,
  TST_TC1047YQSXIKLBYS_PASSWORD
} from "react-native-dotenv"
const tSTTCyqsxiklbys = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047YQSXIKLBYS_USERNAME,
    password: TST_TC1047YQSXIKLBYS_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
