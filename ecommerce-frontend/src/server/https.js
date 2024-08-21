import axios from "axios";

export const serverPath = "http://localhost:8000";

export default axios.create({
    baseURL : "http://localhost:8000/api",
    headers : {
        "Content-Type" : "application/json"
    }
})

