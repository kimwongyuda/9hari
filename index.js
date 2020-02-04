const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const dbconfig = require('./config.js');
const mysql = require('mysql');

var connection = mysql.createConnection(dbconfig);
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/posts', (req,res)=>{
    var temp = 'select * from posts';
    var ret;
    connection.query(temp, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            ret=json;
            res.send(ret);
        }
    });
})

app.listen(port, ()=>{
    console.log(`${port}`);
})