const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const dbconfig = require('./config.js');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const async = require('async');

var connection = mysql.createConnection(dbconfig);
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//검색 시
app.get('/api/posts_search/:option/:input/:type', (req,res) => {
    var type = req.params.type;
    var option = req.params.option;
    var input = req.params.input;

    console.log(type)
    console.log(option)
    console.log(input)

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
            console.log(ret);
            res.send(ret);
        }
    });

})

app.get('/api/posts/:type', (req,res)=>{

    console.log('asdasdasdasdd');
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

app.post('/api/signup', async (req, res)=> {

    let email = req.body.email;
    let id = req.body.id;
    let name = req.body.name;
    let password = req.body.password;
    let password2 = req.body.password2;
    let rank = req.body.rank;
    let authority = req.body.authority;
    console.log(authority)
    let approved = true;
    if(authority === "교역자" || authority === "수정가능")
    {
        approved = false;
    }

    var temp1 = `select * from users where email = "${email}"`;
    var temp2 = `select * from users where login_id = "${id}"`;


    async.waterfall([
    connection.query(temp1, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            json = json.reverse()
            console.log(json)
            if(json.length !=0)
            {    
                res.json({
                    message: "이메일이 중복되었습니다. 새로운 이메일을 입력해주세요.",
                    dupE: "1",
                    dupI: "0"
                });
            }
        }
    })
    ,
    //쿼리안의 쿼리안의 쿼리
    connection.query(temp2, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            json = json.reverse();

            if(json.length !=0)
            {
                res.json({
                message: "ID가 중복되었습니다. 새로운 ID를 입력해주세요.",
                dupE: "0",
                dupI: "1"
                });
            }
            
        }
    })
    ,
    bcrypt.hash(password, 10, function(err, hash){
        var register = `insert into users(login_id, password, email, name, rank, authority, approved) values ("${id}", "${hash}", "${email}", "${name}", "${rank}", "${authority}", ${approved})`;
        connection.query(register, function (err,rows){
            if(err)
            {
                throw err;
            }
            else{
                res.json({
                    message: "회원가입 완료",
                    dupE: "0",
                    dupI: "0"
                });
            }
        })
    })
    ])
})

app.listen(port, ()=>{
    console.log(`${port}`);
})