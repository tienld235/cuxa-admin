import Axios from "axios";
import URL from "../constants/url";
export default function authProvider(email, password){
    Axios.post(`${URL}/api/auth`, {}, {
        headers: {
            Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        }
    }).then(rs => {
        console.log(rs);
        localStorage.setItem("access_token", rs.data.token);
    }).catch(error => console.log(error))
}