import express, { json } from 'express';
import fetch from 'node-fetch';


const app = express();



app.use(express.static("./public"));

app.use(json())

const PORT = process.env.PORT || 3000;

app.get("/api", async function(req, resp){

const url = `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		'X-RapidAPI-Key': 'your-rapidapi-key'
	}
};

// promise syntax
fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
// async await syntax
try {
	const res = await fetch(url, options);
	const json = await res.json();
	console.log(json);
} catch (err) {
	console.log(err);
}

})


app.listen(PORT, () => console.log(`App listening at port ${PORT}`));