const express = require('express');
const app = express();
const PORT = 3333;

app.get('/',(req,res)=>{
    res.send('Phuc')
})

app.listen(PORT, ()=>{
    console.log('server running')
})