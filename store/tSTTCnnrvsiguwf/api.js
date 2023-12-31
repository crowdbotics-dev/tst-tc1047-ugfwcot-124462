import axios from "axios"
import {
  TST_TC1047NNRVSIGUWF_PASSWORD,
  TST_TC1047NNRVSIGUWF_USERNAME
} from "react-native-dotenv"
const tSTTCnnrvsiguwf = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047NNRVSIGUWF_PASSWORD,
    password: TST_TC1047NNRVSIGUWF_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
