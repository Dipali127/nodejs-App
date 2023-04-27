const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const route = require('./route/router');

app.use('/',route);

app.listen(port,()=>{
    console.log(`app listen on port ${port}`);
})
