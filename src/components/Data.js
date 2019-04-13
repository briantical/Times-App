require('dotenv').config();

const getData = ()=>{
	fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + process.env.API_KEY)
	.then((res) =>res.json())
	.then(data=>{console.log("Data:" + JSON.stringify(data))})
	.catch((error)=>console.log("Error:" + error))
}

return getData();