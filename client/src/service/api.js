import axios from 'axios'
import Cookies from 'js-cookie';
const URL = "http://localhost:5000";

export const newsApi = async() => {
    try{
        const newsUrl = process.env.REACT_APP_NEWS_URL
        let response = await axios.get(newsUrl);
        return response.data;
    }
    catch(error){
        console.log("error while news api call: ", error);
    }
}

export const authenticateSignup = async(data) => {
    try{
        let response = await axios.post(`${URL}/signup`, data);
        return response;
    }
    catch(error){
        console.log("error while authenticating signup : ", error);
    }
}

export const authenticateLogin = async(data) => {
    try{
        let response = await axios.post(`${URL}/login`, data);
        return response
    }
    catch(error){
        console.log("error while authenticating login : ", error);
        return error.response;
    }
}
export const getAllUsers = async() => {
    try{
        const userCookie = Cookies.get('auth_token');
        const cookie = await JSON.parse(userCookie);
        const headers = {
            "auth_token" : cookie.auth_token
        }
        // console.log("token",cookie.auth_token)

        let response = await axios.get(`${URL}/getAllUsers`,{
            headers : headers
        });
        // console.log(response)
        return response;
    }
    catch(error){
        console.log("error while getUser : ", error);
    }
}

export const addScoreApi = async(score) => {
    try{
        const userCookie = Cookies.get('auth_token');
        const cookie = await JSON.parse(userCookie);
        const headers = {
            "auth_token" : cookie.auth_token
        }
        // console.log("token",cookie.auth_token)

        let response = await axios.post(`${URL}/addScore`,{score:score},{
            headers : headers
        });
        // console.log(response)
        return response;
    }
    catch(error){
        if(error.response && error.response.status ===403){
            return error.response;
        }
        console.log("error while getUser : ", error);
    }
}

export const getAllQuizUsers = async() => {
    try{
        const userCookie = Cookies.get('auth_token');
        const cookie = await JSON.parse(userCookie);
        const headers = {
            "auth_token" : cookie.auth_token
        }
        // console.log("token",cookie.auth_token)

        let response = await axios.get(`${URL}/getAllQuizUsers  `,{
            headers : headers
        });
        console.log(response)
        return response;
    }
    catch(error){
        console.log("error while getUser : ", error);
    }
}
/*
export const getUserApi = async(username) => {
    try{
        const acctDetails = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
        // console.log(acctDetails.auth_token);
        // console.log("username " , username)
        const headers = {
            "auth_token":acctDetails.auth_token
        }
        let response = await axios.get(`${URL}/getUser/${username}`,{
            headers : headers
        });
        // console.log(response)
        return response;
    }
    catch(error){
        console.log("error while getUser : ", error);
    }
}
*/
