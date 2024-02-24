import axios from 'axios'

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
