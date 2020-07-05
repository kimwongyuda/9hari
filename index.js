const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const dbconfig = require('./config.js');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const async = require('async');
const jwt = require("jsonwebtoken");
const secretObj = require("./jwt");

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

    let approved = true;
    if(authority === "교역자" || authority === "수정가능")
    {
        approved = false;
    }

    var temp1 = `select * from users where email = "${email}"`;
    var temp2 = `select * from users where login_id = "${id}"`;

    var tasks = [
        function (callback){
            connection.query(temp1, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);
                    json = json.reverse()
                    if(json.length !=0)
                    {    
                        res.json({
                            message: "이메일이 중복되었습니다. 새로운 이메일을 입력해주세요.",
                            dupE: "1",
                            dupI: "0"
                        });
                        return callback('dup email');
                    }
                }
                callback(null, 'aaa');
            })
        },

        function(data, callback){
            connection.query(temp2, function(err, rows){
                if(err)
                {
                    return callback(err);
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
                        return callback('dup ID');
                    }
                }
                callback(null, 'aaa');
            })
        },

        function(data2, callback){
            bcrypt.hash(password, 10, function(err, hash){
                var register = `insert into users(login_id, password, email, name, rank, authority, approved) values ("${id}", "${hash}", "${email}", "${name}", "${rank}", "${authority}", ${approved})`;
                connection.query(register, function (err,rows){
                    if(err)
                    {
                        return callback(err);
                    }
                    else{
                        res.json({
                            message: "회원가입 완료",
                            dupE: "0",
                            dupI: "0"
                        });
                    }
                    callback(null);
                })
            })
        }
    ];

    async.waterfall(tasks, function (err){
        if(err)
        {
            console.log('err');
        }
        else
        {
            console.log('done');
        }
    })

})

app.post('/api/login', async (req, res)=> {

    let id = req.body.id;
    let password = req.body.password;

    var temp1 = `select * from users where login_id = "${id}" `;
    var temp2 = `select password from users where login_id = "${id}" `;
    var login_id = "";
    var email = "";
    var name = "";
    var rank = "";
    var authority = "";
    var approved = true;

    var tasks = [

        function (callback){
            connection.query(temp1, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);
                    json = json.reverse()
                    if(json.length ==0)
                    {    
                        res.json({
                            message: "존재하지 않는 아이디입니다.",
                            NonI: "1",
                            WrongP: "0"
                        });
                        return callback('non ID');
                    }

                    login_id = json[0]["login_id"];
                    email = json[0]["email"];
                    name = json[0]["name"];
                    rank = json[0]["rank"];
                    authority = json[0]["authority"];
                    approved = json[0]["approved"];

                    if(!approved)
                    {
                        res.json({
                            message: "아직 승인되지 않은 아이디입니다.",
                            NonI: "1",
                            WrongP: "0"
                        });
                        return callback('non approved');
                    }
                }
                callback(null, 'aaa');
            })
        },

        function(data, callback){

            var pw = "";
            connection.query(temp2, function (err,rows){
                if(err)
                {
                    return callback(err);
                }
                else{
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);
                    json = json.reverse()
                    pw = json[0]['password'];
                    callback(null, pw);
                }
                
            })
        },

        function(data2, callback)
        {
            bcrypt.compare(password, data2, function (err, result){
                if(result)
                {
                    let token = jwt.sign({
                        Email: email,
                        Login_id: login_id,
                        Name: name,
                        Rank: rank,
                        Authority: authority,
                        Approved: approved
                    },
                    secretObj.secret,
                    {
                        expiresIn: '20m'
                    })

                    res.cookie("user", token);

                    res.json({
                        message: "로그인에 성공하였습니다.",
                        NonI: "0",
                        token: token,
                        WrongP: "0"
                    });             
                }
                else
                {
                    res.json({
                        message: "비밀번호가 틀렸습니다.",
                        NonI: "0",
                        WrongP: "1"
                    });    
                }
            })
            callback(null);
        }
    ]

    async.waterfall(tasks, function (err){
        if(err)
        {
            console.log('err');
        }
        else
        {
            console.log('done');
        }
    })
})

app.post('/api/logout', async (req, res)=> {
    res.clearCookie('user');
    return res.json({ message: '로그아웃 되었습니다.'});
})

app.post('/api/upload_sermon', async (req, res)=> {

    return res.json({ message: '로그아웃 되었습니다.'});
})

app.post('/api/find', async (req, res)=> {
    
    let token = req.cookies.user;

    let decoded = jwt.verify(token, secretObj.secret);

    if(decoded['authority'])
    {
        return res.json({
            authority: decoded['authority']
        })
    }
})

app.get('/api/auth', async (req, res)=> {
    let token = req.headers.cookie.substr(5);

    let decoded = jwt.verify(token, secretObj.secret);

    if(decoded['Authority'])
    {
        return res.json({
            authority: decoded['Authority']
        })
    }
})

app.listen(port, ()=>{
    console.log(`${port}`);
})