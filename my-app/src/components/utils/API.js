import axios from "axios";

const BASEURL = "https://tastedive.com/api/similar?q=";
const APIKEY = "?k=333678-Relevant-QTGONVOF";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
