import axios from 'axios';

/*  getting preconfigured instance of the axios client,
    which has default properties set to make a request or headers or even params.
 */
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID 643433a97920869789cae69e46b76b94ab30aaf5a79de865989a1153ed3c3e45"
    }
}); 
/*
 const searchImages = (term) => {

 }
*/