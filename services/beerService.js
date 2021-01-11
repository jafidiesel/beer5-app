import Axios from 'axios'


const beerService = {
    getBeers: async () => {
        try {
          let response = await Axios.get(`https://api.punkapi.com/v2/beers`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
      getBeerById: async (id) => {
        try {
          let response = await Axios.get(`https://api.punkapi.com/v2/beers/${id}`);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
}

export default beerService