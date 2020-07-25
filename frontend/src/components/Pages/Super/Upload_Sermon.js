import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background1 from '../../../images/background1.jpg';
import { Form, Button } from "react-bootstrap";
import style from './Upload_Sermon.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Upload_Sermon extends Component{

    constructor(props){
        super(props);
        this.state = {
            writer_id:0
        }
        this.upload = this.upload.bind(this);
    }

    upload = () => {

        axios
        .get("/api/auth")
        //정상 수행
        .then(returnData => {
          if (returnData.data.authority) {
            // alert(returnData.data.message);
            // window.location.reload();
            this.setState({writer_id: returnData.data.writer_id});

            const title = this.title.value;
            const content = this.content.value;
            const daytype = this.daytype.value;
            const writer_id = this.state.writer_id;
            console.log(writer_id)

            const sermon_title = this.sermon_title.value;
            const sermon_date = this.sermon_date.value;
            const youtube_link = this.youtube_link.value;
            const sermon_person = this.sermon_person.value;
            const sermon_words = this.sermon_words.value;
            const sermon_place = this.sermon_place.value;
            const sermon_summary = this.sermon_summary.value;
        
            if(title === "" || title === undefined)
            {
                alert("글 제목을 입력해주세요.");
                this.title.focus();
                return;
            }else if (daytype === "" || daytype === undefined) {
                alert("날짜 종류를 입력해주세요.");
                this.daytype.focus();
                return;
            }
            else if (sermon_title === "" || sermon_title === undefined) {
            alert("설교 제목을 입력해주세요.");
            this.sermon_title.focus();
            return;
            } else if (sermon_date === "" || sermon_date === undefined) {
            alert("설교 날짜를 입력해주세요.");
            this.sermon_date.focus();
            return;
            }else if (youtube_link === "" || youtube_link === undefined) {
                alert("유튜브 링크를 입력해주세요.");
                this.youtube_link.focus();
                return;
            }else if (sermon_person === "" || sermon_person === undefined) {
                alert("설교자를 입력해주세요.");
                this.sermon_person.focus();
                return;
            }else if (sermon_words === "" || sermon_words === undefined) {
                alert("설교 말씀을 입력해주세요.");
                this.sermon_words.focus();
                return;
            }else if (sermon_place === "" || sermon_place === undefined) {
                alert("설교 장소를 입력해주세요.");
                this.sermon_place.focus();
                return;
            }
        
            const send_param = {
            headers,
            title: this.title.value,
            content: this.content.value,
            daytype: this.daytype.value,
            writer_id: writer_id,
            sermon_title: this.sermon_title.value,
            sermon_date: this.sermon_date.value,
            youtube_link: this.youtube_link.value,
            sermon_person: this.sermon_person.value,
            sermon_words: this.sermon_words.value,
            sermon_place: this.sermon_place.value,
            sermon_summary: this.sermon_summary.value
            };

            axios
            .post("/api/upload_sermon", send_param)
            //정상 수행
            .then(returnData => {
            if (returnData.data.message) {
                alert(returnData.data.message);
                window.location.href = "/worship/1/1";
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

    render(){

          const buttonStyle = {
            marginTop: 10
          };

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

                                    <Form.Label><strong style={{color: '#005bab'}}>글 제목</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="25"
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

                                    <Form.Label><strong style={{color: '#005bab'}}>날짜 종류</strong></Form.Label>
                                    <Form.Control as="select"
                                        ref={ref => (this.daytype = ref)}
                                        style={{marginBottom: '100px'}}
                                    >
                                        <option>주일</option>
                                        <option>수요</option>
                                        <option>금요</option>
                                        <option>특별</option>
                                    </Form.Control>

                                    <Form.Label><strong>설교 제목</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.sermon_title = ref)}
                                        placeholder="설교 제목을 입력해주세요."
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Form.Label><strong>설교 날짜</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.sermon_date = ref)}
                                        placeholder="설교 날짜를 입력해주세요."
                                    />
                                    
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        2020-07-05 의 형태로 입력해주세요.
                                    </Form.Text>

                                    <Form.Label><strong>유튜브 링크</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.youtube_link = ref)}
                                        placeholder="유튜브 링크를 입력해주세요."
                                    />
                                    
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        유튜브 영상을 클릭하시면 https://www.youtube.com/watch?v=HJTCZc6Ecn4 와 같은 내용이 나타나는데<br></br>
                                        여기서 HJTCZc6Ecn4 이 부분만 입력하시면 됩니다.
                                    </Form.Text>

                                    <Form.Label><strong>설교자</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.sermon_person = ref)}
                                        placeholder="설교자를 입력해주세요."
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Form.Label><strong>설교 말씀</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.sermon_words = ref)}
                                        placeholder="설교 말씀 위치를 입력해주세요"
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Form.Label><strong>설교 장소</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="500"
                                        ref={ref => (this.sermon_place = ref)}
                                        placeholder="설교 장소를 입력해주세요."
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Form.Label><strong>설교 요약</strong></Form.Label>
                                    <Form.Control as="textarea"
                                        ref={ref => (this.sermon_summary = ref)}
                                        style={{height: '300px'}}
                                    >
                                    </Form.Control>
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        필수적으로 작성하지 않으셔도 됩니다.
                                    </Form.Text>

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.upload}
                                        variant="outline-secondary"
                                        type="button"
                                        block
                                    >
                                        설교 올리기
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

export default Upload_Sermon;