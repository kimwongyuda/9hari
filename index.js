const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const dbconfig = require('./config.js');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const async = require('async');
const jwt = require("jsonwebtoken");
const path = require('path');
var mime = require('mime');

var fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws.json');
let s3 = new AWS.S3();


var getdownloadfn = require('./getdownloadfn').getdownloadfn;

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + '_'+file.originalname);
      }
    }),
  });
// const upload = multer({
//     storage: multer.memoryStorage(),
// });

// const upload = multer({

//     storage: multerS3({
//     s3: s3,
//     bucket : "9hari",
//     key: function (req, file, cb) {
//         let extension = path.extname(file.originalname);
//         cb(null, 'uploads/'+Date.now().toString()+'_'+file.originalname)
//     },
//     acl: 'public-read-write'
// })

// })

const moment = require('moment');
const secretObj = require("./jwt");

var connection = mysql.createConnection(dbconfig);
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('uploads'));

app.get('/api/download/:path', (req,res)=>{

    console.log('sssssssssssssssss');
    var file = req.params.path;

    console.log(file)

    var File = __dirname+'/uploads/'+file;
    // // let rs = fs.createReadStream(file); 

    // // console
    // // res.attachment("rates.txt"); 
    // // rs.pipe(res);

    // // res.set( 'Content-Type', 'application/blob' );
    // res.attachment(file);
    res.download(File, file,(err) => {
                  if (err) 
                  {console.log(err)
                  }
                  else{
                      res.end();
                  };
    });
})

app.get('/api/attachments/:pid', (req,res)=>{

    var pid = req.params.pid;

    var temp = `select * from 
    \`posts-attachments\` as pa inner join attachments as a 
    on pa.attachments_id = a.id
    where posts_id = ${pid}`;

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
            res.json({
                json:ret
            });
        }
    });
})

//검색 시
app.get('/api/posts_b_search/:option/:input/:type', (req,res) => {
    var type = req.params.type;
    var option = req.params.option;
    var input = req.params.input;

    var token = req.headers.cookie;
    console.log(token)

    let decoded = "";
    if(token)
    {
        token = req.headers.cookie.substr(5);
        decoded = jwt.verify(token, secretObj.secret);
    }
    

    if(option== 'title')
    {
        temp =
        `select p.id as pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`
        from posts as p inner join users as u
        on p.writer_id = u.id
        where \`kind\` = '${type}' and title like '%${input}%'`;
    }
    else if(option == 'writer')
    {
        temp =
        `select p.id as pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`
        from posts as p inner join users as u
        on p.writer_id = u.id
        where \`kind\` = '${type}' and \`name\` like '%${input}%'`;
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
            if(token)
            {
            res.json({
                json:ret,
                authority: decoded['Authority'],
                login_id: decoded['Login_id'],
                writer_id: decoded['ID']
            });
            }
            else
            {
                res.json({
                    json: ret
                })
            }
        }
    });

})

//검색 시
app.get('/api/posts_search/:option/:input/:type', (req,res) => {
    var type = req.params.type;
    var option = req.params.option;
    var input = req.params.input;

    // let token = req.headers.cookie.substr(5);
    var token = req.headers.cookie;
    console.log(token)

    let decoded = "";
    if(token)
    {
        token = req.headers.cookie.substr(5);
        decoded = jwt.verify(token, secretObj.secret);
    }
    

    if(option== 'title')
    {
    temp =
    `select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
    from 
    (select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
    from(
    select p.id as pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`
    from posts as p inner join users as u
    on p.writer_id = u.id
    where \`type\` = '${type}' and title like '%${input}%') as pu inner join \`posts-sermons\` as ps
    on pid = ps.posts_id) as pus inner join sermons as s
    on pus.sermons_id = s.id;`;
    }
    else if(option == 'words')
    {
        temp =
        `select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`
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
        `select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`
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
        `select pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
        from 
        (select pid, writer_id,title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
        from(
        select p.id as pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`
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
            if(token)
            {
            res.json({
                json:ret,
                authority: decoded['Authority'],
                login_id: decoded['Login_id'],
                writer_id: decoded['ID']
            });
            }
            else
            {
                res.json({
                    json: ret
                })
            }
        }
    });

})

app.get('/api/posts_b/:type', (req,res)=>{

    var type = req.params.type;

    // let token = req.headers.cookie.substr(5);
    var token = req.headers.cookie;
    console.log(token)

    let decoded = "";
    if(token)
    {
        token = req.headers.cookie.substr(5);
        decoded = jwt.verify(token, secretObj.secret);
    }

    var temp =
    `select p.id as pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`
    from posts as p inner join users as u
    on p.writer_id = u.id
    where \`kind\` = '${type}'`;

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

            if(token)
            {
            res.json({
                json:ret,
                authority: decoded['Authority'],
                login_id: decoded['Login_id'],
                writer_id: decoded['ID']
            });
            }
            else
            {
                res.json({
                    json: ret
                })
            }
        }
    });
})

app.get('/api/posts/:type', (req,res)=>{

    var type = req.params.type;

    // let token = req.headers.cookie.substr(5);
    var token = req.headers.cookie;
    console.log(token)

    let decoded = "";
    if(token)
    {
        token = req.headers.cookie.substr(5);
        decoded = jwt.verify(token, secretObj.secret);
    }

    var temp =
    `select pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`, s.id as sid, sermon_title, sermon_person, sermon_words, sermon_place, sermon_summary, sermon_date, youtube_link
    from 
    (select pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`, sermons_id
    from(
    select p.id as pid, writer_id, title, creation_date, views, content, email, \`name\`, \`rank\`
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

            if(token)
            {
            res.json({
                json:ret,
                authority: decoded['Authority'],
                login_id: decoded['Login_id'],
                writer_id: decoded['ID']
            });
            }
            else
            {
                res.json({
                    json: ret
                })
            }
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
    var indexid = 0;
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
                    indexid = json[0]["id"];

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
                        Approved: approved,
                        ID: indexid
                    },
                    secretObj.secret,
                    {
                        expiresIn: '180m'
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

app.get('/api/list_admin', async(req,res)=>{
    var temp = `select * from users where approved = false`;
    connection.query(temp, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            json = json.reverse()

            res.send(json);
        }
    })
    
})

app.post('/api/approve_admin', async(req,res)=>{
    const id = req.body.id;

    var temp = `update users set approved = true where id = ${id}`;

    connection.query(temp, function(err, rows){
        if(err)
        {
            throw err;
        }
        else
        {
            res.json({
                message: "승인 완료"
            });  
        }
    })
    
})

app.post('/api/upload_board', upload.fields([{ name: 'title' }, { name: 'content' },{name: 'writer_id'}, {name: 'daytype'}, {name: 'files'}]), async (req, res)=> {


    console.log('asdsad');
    let title = req.body.title;
    let content = req.body.content;
    let writer_id = req.body.writer_id;
    let daytype = req.body.daytype;
    let files = req.files.files;
    let kind = req.body.kind;

    if(files == undefined)
    {
        files = [];
    }
    var posts = `insert into posts(title, writer_id, content, \`type\`, \`kind\`) values('${title}', ${writer_id}, '${content}', '${daytype}', '${kind}')`;

    var pid = 0;
    var aids = [];

    console.log(files);
    var tasks = [

        function (callback){
            connection.query(posts, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    console.log(rows);
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);

                    pid = json['insertId'];

                    // if(files.length == 0)
                    // {
                    //     return   res.json({
                    //         message: '1차 완료',
                    //         pid: pid,
                    //         aids: aids
                    //     })
                    // }
                }
                callback(null, 'aaa');
            })
        },

        function(data, callback){

            if(files.length != 0)
            {
            for(var i =0; i < files.length;i++)
            {
                var path_ = files[i].destination + files[i].filename;
                var temp = `insert into attachments(\`path\`) values('${path_}')`;
                connection.query(temp, function(err, rows){
                    if(err)
                    {
                        return callback(err);
                    }
                    else
                    {
                        console.log(rows);
                        var string = JSON.stringify(rows);
                        var json = JSON.parse(string);

                        aids.push(json['insertId']);
                        if(aids.length == files.length)
                        {
                            res.json({
                                message: '1차 완료',
                                pid: pid,
                                aids: aids
                            })
                        }
                    }
                })
            }
            }
            else
            {
                var path_ = 'uploads/temp.pdf';
                var temp = `insert into attachments(\`path\`) values('${path_}')`;
                connection.query(temp, function(err, rows){
                    if(err)
                    {
                        return callback(err);
                    }
                    else
                    {
                        console.log(rows);
                        var string = JSON.stringify(rows);
                        var json = JSON.parse(string);

                        aids.push(json['insertId']);
                        if(aids.length == 1)
                        {
                            res.json({
                                message: '1차 완료',
                                pid: pid,
                                aids: aids
                            })
                        }
                    }
                })
            }
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

app.post('/api/upload_board_2', async (req,res)=>{
    let pid = req.body.pid;
    let aids = req.body.aids;
    console.log('lll');
    for(var i =0; i<aids.length; i++)
    {
        var temp = `insert into \`posts-attachments\`(posts_id, attachments_id) values(${pid}, ${aids[i]})`;
        connection.query(temp, function(err, rows){
            if(err)
            {
                throw err;
            }
            else
            {
            }
        })
    }

    res.json({
        message: '게시물 올리기 완료'
    })
})

app.post('/api/upload_sermon', async (req, res)=> {

    let title = req.body.title;
    let content = req.body.content;
    let writer_id = req.body.writer_id;
    let daytype ="";
    if(req.body.daytype == "주일")
    {
        daytype = "sun";
    }
    else if(req.body.daytype == "수요")
    {
        daytype = "wed";
    }
    else if(req.body.daytype == "금요")
    {
        daytype ="fri";
    }
    else{
        daytype = "spe";
    }


    let sermon_title = req.body.sermon_title;
    let sermon_date = req.body.sermon_date;
    let youtube_link = req.body.youtube_link;
    let sermon_person = req.body.sermon_person;
    let sermon_words = req.body.sermon_words;
    let sermon_place = req.body.sermon_place;
    let sermon_summary = req.body.sermon_summary;

    var sermons = `insert into sermons(sermon_title, sermon_date, youtube_link, sermon_person, sermon_words, sermon_place, sermon_summary) 
    values('${sermon_title}', '${sermon_date}', '${youtube_link}', '${sermon_person}', '${sermon_words}', '${sermon_place}', '${sermon_summary}')`;
    var posts = `insert into posts(title, writer_id, content, \`type\`, \`kind\`) values('${title}', ${writer_id}, '${content}', '${daytype}', '설교')`;

    var pid = 0;
    var sid = 0;

    var tasks = [

        function (callback){
            connection.query(sermons, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    console.log(rows);
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);

                    sid = json['insertId'];
                }
                callback(null, 'aaa');
            })
        },

        function(data, callback){

            connection.query(posts, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    console.log(rows);
                    var string = JSON.stringify(rows);
                    var json = JSON.parse(string);

                    pid = json['insertId'];
                }
                callback(null, 'aaa');
            })
        },

        function(data2, callback)
        {
            var posts_seromons = `insert into \`posts-sermons\`(posts_id, sermons_id) values(${pid}, ${sid})`;
            connection.query(posts_seromons, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    res.json({
                        message: "설교 올리기 완료"
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

app.post('/api/findID', async (req, res)=> {
    
    let email = req.body.email;
    var temp1 = `select login_id from users where email = "${email}"`;
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
                    message: "존재하지 않는 이메일입니다.",
                    NonF: "1"
                });
            }
            else
            {
                res.json({
                    message: `아이디 찾기 완료.`,
                    NonF: "0",
                    ID: json[0]['login_id']
                });
            }
        }
    })

})

app.post('/api/findPW', async (req, res)=> {
    
    let email = req.body.email;
    let id = req.body.id;
    var temp1 = `select * from users where email = "${email}" and login_id = "${id}"`;
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
                    message: "존재하지 않는 이메일 또는 아이디입니다.",
                    NonF: "1"
                });
            }
            else
            {
                res.json({
                    message: `비밀번호를 변경해 주세요`,
                    NonF: "0"
                });
            }
        }
    })

})

app.post('/api/changePW', async (req, res)=> {
    
    let email = req.body.email;
    let id = req.body.id;
    let pw = req.body.pw;

    bcrypt.hash(pw, 10, function(err, hash){
        var change = `update users set password = "${hash}" where email = "${email}" and login_id = "${id}"`;
        connection.query(change, function (err,rows){
            if(err)
            {
                throw err;
            }
            else{
                
                res.json({
                    message: "비밀번호 변경 완료",
                    SucC: "1",
                });
            }
        })
    })

})


app.get('/api/auth', async (req, res)=> {
    let token = '';
    if(req.headers.cookie)
    {
        token = req.headers.cookie.substr(5);
    }
    else
    {
        return res.json({
            authority: undefined,
            login_id: undefined,
            writer_id: undefined
        });
    }

    let decoded = jwt.verify(token, secretObj.secret);

    if(decoded['Authority'])
    {
        console.log('adsadsadsa');
        return res.json({
            authority: decoded['Authority'],
            login_id: decoded['Login_id'],
            writer_id: decoded['ID']
        });
    }
})

app.post('/api/delete_post_attachment', async (req,res)=>{

    var pid = req.body.pid;

    console.log(pid);

    console.log("asdasdasdas");

    var temp1 = `select * from \`posts-attachments\` as pa inner join attachments as a on pa.attachments_id = a.id where posts_id = ${pid}`;
    var temp2 = `delete from posts where id = ${pid}`;

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
                }
                callback(null, json);
            })
        },

        function(data, callback){
            connection.query(temp2, function(err,rows){
                if(err)
                {
                    return callback(err);
                }
                else{
                }
                callback(null, data);
            })
        },

        function(data, callback){

            console.log(data);
            for(var i =0; i < data.length;i++)
            {
                var temp = `delete from attachments where id = ${data[i].attachments_id}`;
                if(fs.existsSync(`${data[i].path}`))
                {
                    fs.unlink(`${data[i].path}`, function(err){
                        if( err ) throw err;
                        console.log('file deleted');
                    });
                }
                connection.query(temp, function(err, rows){
                    if(err)
                    {
                        return callback(err);
                    }
                    else
                    {

                    }
                })


            }
            res.json({
                message: '삭제 완료'
            })
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

app.post('/api/delete_post_sermon', async (req,res)=>{

    var pid = req.body.pid;
    var sid = req.body.sid;

    console.log("asdasdasdas");

    var temp1 = `delete from posts where id = ${pid}`;
    var temp2 = `delete from sermons where id = ${sid}`;
    var temp3 = `delete from \`posts-sermons\` where posts_id = ${pid} and sermons_id = ${sid}`;

    var tasks = [

        function (callback){
            connection.query(temp1, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {

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

                }
                callback(null, 'aaa');
            })
        },

        function(data2, callback)
        {
            connection.query(temp3, function(err, rows){
                if(err)
                {
                    return callback(err);
                }
                else
                {
                    res.json({
                        message: "삭제 완료"
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


app.listen(port, ()=>{
    console.log(`${port}`);
})