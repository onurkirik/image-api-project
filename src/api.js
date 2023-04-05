import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aBgxIE-A2TVxiYDmyeArSrQp3xnpc48w7DZE2WcT8ic'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
};

export default searchImages;