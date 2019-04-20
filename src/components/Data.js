import axios from 'axios'

export const newsData = async fetchData => {
   try {
   		console.log("Getting executed")
      	const response = await axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);
      	return response.data
  	} 
  	catch (err) {
    	console.log("Error: " + err)
  	}
}
