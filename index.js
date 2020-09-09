const express = require('express')
const { request, response } = require('express')

const app = express()
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/home', (request, response)=>{
    response.send('Welcome to my first backend')
})

app.get('/profile', function(req, res){
    let data = {
        name : 'jane',
        batch : '17.2',
        email : 'janedoe@MediaList.com'
    }
    res.send(data)
})

app.post("/data", function (req, res) {
    res.send("Got a POST request");
});

app.use(function (req, res, next){
    console.log('Tipe Request:', req.method);
    next();
});

app.listen(8080, ()=>{
    console.log('App Listening on port 8080')
})


 