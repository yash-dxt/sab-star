const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('*', (req,res)=>{
	res.status(200).send({
		"me": "Meri NFT acchi si",
		"description": "this shows your position in the AR.",
		"image": "https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png"
	});
});  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})