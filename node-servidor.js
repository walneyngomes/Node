const express=  require('express');
const html = express();
const body= require('body-parser');


html.use(body.text());
html.use(body.json());

let remedios= []
html.get('/remedios', (req, res)=>{
    res.send(remedios)
})


html.post('/remedios', (req,res)=>{
  res.send(req.body)

})
html.listen(4000);