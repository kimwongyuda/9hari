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

//검색 시
app.get('/api/posts_search/:option/:input/:type', (req,res) => {
    var type = req.params.type;
    var option = req.params.option;
    var input = req.params.input;

    if(option== 'title')
    {
    temp =
    `select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
    from 
    (select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
    from(
    select p.id as pid, title, creation_date, views, content, email, \`name\`, \`rank\`
    from posts as p inner join users as u
    on p.writer_id = u.id
    where \`type\` = '${type}' and title like '%${input}%') as pu inner join \`posts-sermons\` as ps
    on pid = ps.posts_id) as pus inner join sermons as s
    on pus.sermons_id = s.id;`;
    }
    else if(option == 'words')
    {
        temp =
        `select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, title, creation_date, views, content, email, \`name\`, \`rank\`
        from posts as p inner join users as u
        on p.writer_id = u.id
        where \`type\` = '${type}') as pu inner join \`posts-sermons\` as ps
        on pid = ps.posts_id) as pus inner join sermons as s
        on pus.sermons_id = s.id
        where sermon_words like '%${input}%';`;
    }
    else if(option == 'person')
    {
        temp =
        `select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, title, creation_date, views, content, email, \`name\`, \`rank\`
        from posts as p inner join users as u
        on p.writer_id = u.id
        where \`type\` = '${type}') as pu inner join \`posts-sermons\` as ps
        on pid = ps.posts_id) as pus inner join sermons as s
        on pus.sermons_id = s.id
        where sermon_person like '%${input}%';`;
    }
    else if(option == 'writer')
    {
        temp =
        `select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, title, creation_date, views, content, email, \`name\`, \`rank\`
        from posts as p inner join users as u
        on p.writer_id = u.id
        where \`type\` = '${type}' and \`name\` like '%${input}%') as pu inner join \`posts-sermons\` as ps
        on pid = ps.posts_id) as pus inner join sermons as s
        on pus.sermons_id = s.id;`;
    }
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
            json = json.reverse();
            ret=json;
            res.send(ret);
        }
    });

})

app.get('/api/posts/:type', (req,res)=>{
    var type = req.params.type;
    console.log(type);
    var temp =
    `select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
    from 
    (select pid, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
    from(
    select p.id as pid, title, creation_date, views, content, email, \`name\`, \`rank\`
    from posts as p inner join users as u
    on p.writer_id = u.id
    where \`type\` = '${type}') as pu inner join \`posts-sermons\` as ps
    on pid = ps.posts_id) as pus inner join sermons as s
    on pus.sermons_id = s.id;`;

    
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
            json = json.reverse();
            ret=json;
            res.send(ret);
        }
    });
})

app.get('/api/posts_up/:post_num', (req,res)=>{
    var post_num = req.params.post_num;
    var temp = `update posts set views = views + 1 where id = ${post_num}`;
    connection.query(temp, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            res.send('success');
        }
    })
})

app.listen(port, ()=>{
    console.log(`${port}`);
})