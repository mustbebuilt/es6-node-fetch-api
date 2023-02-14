import express, { json } from 'express';
import fetch from 'node-fetch';


const app = express();



app.use(express.static("./public"));

app.use(json())

const PORT = process.env.PORT || 3000;

app.get("/api", async function(req, resp){

const url = `xxxxx`;

const options = {
	method: 'GET',
	headers: {
		'X-ApiVersion': zzzz,
		'X-ApiKey': 'yyyy'
	}
};

const apiResp = await fetch(url, options);
const json = await apiResp.json();
resp.json(json)

})


app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
