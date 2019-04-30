//This is the component that fetches the data from newsapi.org

//Axios is a module that provides to make HTTP Requests
import axios from 'axios'

export const newsData = async fetchData => {
	//If successfully fetched , implement below
   try {
   		console.log("Getting executed");
   		//Your API secret key should be stored in the env file
      	const response = await axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);
      	console.log("Done fetching data");
      	return response.data
  	} 
  	//If an error occurs, display below
  	catch (err) {
  		//Display the error
    	console.log("Error: " + err)
  	}
}
