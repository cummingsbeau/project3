import axios from "axios";

const BASEURL = "https://tastedive.com/api/similar?q=";
const APIKEY = "?k=333678-Relevant-QTGONVOF";


export default axios.create({
  baseURL:BASEURL,
  params:{
    limit:10,
    type:"music",
    k: APIKEY
  }
})