import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background1 from '../../../images/background1.jpg';
import { Form, Button } from "react-bootstrap";
import style from './Upload_Board.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Upload_Board extends Component{

    constructor(props){
        super(props);
        this.state = {
            writer_id:0,
            files: [],
            raw_files: null
        }
        this.upload = this.upload.bind(this);
        this.setFiles = this.setFiles.bind(this);
        
    }

    upload = () => {

        console.log('sadjsajsjadj');
        axios
        .get("/api/auth")
        //정상 수행
        .then(returnData => {
          if (returnData.data.authority) {
            // alert(returnData.data.message);
            // window.location.reload();
            this.setState({writer_id: returnData.data.writer_id});

            const kind = this.kind.value;
            const title = this.title.value;
            const content = this.content.value;
            const daytype = 'board';
            const writer_id = this.state.writer_id;
            console.log(writer_id)
        
            if(title === "" || title === undefined)
            {
                alert("글 제목을 입력해주세요.");
                this.title.focus();
                return;
            }else if (kind === "" || kind === undefined) {
                alert("게시판 종류를 입력해주세요.");
                this.kind.focus();
                return;
            }
        
            // const send_param = {
            // headers,
            // kind: this.kind.value,
            // title: this.title.value,
            // content: this.content.value,
            // daytype: this.daytype.value,
            // writer_id: writer_id
            // };

            var formData = new FormData();
            for( const file_ of this.state.raw_files)
            {
                console.log(file_);
                formData.append('files', file_);
            }
            formData.append('kind', this.kind.value);
            formData.append('title', this.title.value);
            formData.append('content', this.content.value);
            formData.append('daytype', 'board');
            formData.append('writer_id', this.state.writer_id);

            axios
            .post("/api/upload_board", formData)
            //정상 수행
            .then(returnData => {
            if (returnData.data.message) {

                const send_param = {
                headers,
                pid: returnData.data.pid,
                aids: returnData.data.aids,
                paths: returnData.data.paths
                };

                axios.post("/api/upload_board_2", send_param)
                .then(returnData=>{
                    if(returnData.data.message){

                        alert(returnData.data.message);
                        window.location.href = "/";
                    }
                    else
                    {

                        alert(returnData.data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                    });
            } else {
                alert(returnData.data.message);
            }
            })
            //에러
            .catch(err => {
            console.log(err);
            });

            
          } else {
            alert(returnData.data.message);
          }
        })
        //에러
        .catch(err => {
          console.log(err);
        });
    };

    
    setFiles = (e) => {
        console.log(e.target.files)
        var upfiles = [];

        for(var i =0; i<e.target.files.length; i++)
        {
            console.log(e.target.files[i].name);
            upfiles.push(e.target.files[i].name);
        }
        this.setState({files: upfiles, raw_files: e.target.files}, () => { console.log(this.state.files) });
    };

    render(){

          const buttonStyle = {
            marginTop: 10
          };

        var files = this.state.files;
        console.log(this.state.files)
        const view_files = files.map((item)=>(<div>{item}</div>));

        return(
            <div>
                <div className={style.wrapper+' '+style.blankbox} style={{height: '120px'}}>a</div>
                <div className={style.wrapper}>
                    <img src={background1} style={{marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>
                    <div className={style.content}>
                        
                        <div style={{width: '100%', marginBottom: '400px', float: 'left'}}>
                            <div style={{marginTop: '10px'}}>
                            <Form style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                                    <Form.Group controlId="loginForm">

                                    <Form.Label><strong style={{color: '#005bab'}}>게시판 종류</strong></Form.Label>
                                    <Form.Control as="select"
                                        ref={ref => (this.kind = ref)}
                                        style={{marginBottom: '20px'}}
                                    >
                                        <option>유치유년부</option>
                                        <option>초등부</option>
                                        <option>중고등부</option>
                                        <option>청년부</option>
                                        <option>남선교회</option>
                                        <option>여전도회</option>
                                        <option>3040 선교회</option>
                                        <option>새가족 공부</option>
                                        <option>찬양대</option>
                                        <option>구하리 카페</option>
                                        <option>구하리 갤러리</option>
                                    </Form.Control>

                                    <Form.Label><strong style={{color: '#005bab'}}>글 제목</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.title = ref)}
                                        placeholder="글 제목을 입력해주세요."
                                    />
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        Ex) 200705 주일 예배 영상<br></br>
                                        Ex) 200705 수요 예배 영상
                                    </Form.Text>

                                    <Form.Label><strong style={{color: '#005bab'}}>글 내용</strong></Form.Label>
                                    <Form.Control as="textarea"
                                        ref={ref => (this.content = ref)}
                                        style={{height: '300px'}}
                                    >
                                    </Form.Control>
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        필수적으로 작성하지 않으셔도 됩니다.
                                    </Form.Text>

                                    <Form.Label><strong style={{color: '#005bab'}}>파일</strong></Form.Label>
                                    <Form.Control type="file"
                                        ret = {ref => (this.files = ref)}
                                        onChange={e => this.setFiles(e)}
                                        multiple
                                    >
                                    </Form.Control>
                                    
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        {view_files}
                                    </Form.Text>
                                    

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.upload}
                                        variant="outline-secondary"
                                        type="button"
                                        block
                                    >
                                        게시물 올리기
                                    </Button>
                                    </Form.Group>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Upload_Board;