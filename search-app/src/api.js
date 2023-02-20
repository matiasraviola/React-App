import axios from 'axios';

const searchImages = async (term) =>{
  const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 9bJNcq6njKHmx6-M3V6zDyRptfU4YglGM-g_ko9MHow'
        },
        params:{
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;