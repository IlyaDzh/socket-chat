import { axios } from "core";

export default {
    getAll: () => axios.get("/user/all"),
    getMe: () => axios.get("/user/me"),
    signIn: postData => axios.post("/user/signin", postData)
};
