import React, {Component} from 'react';
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import style from './Find1.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Find1 extends Component{

    constructor(props){
        super(props);
        this.findID = this.findID.bind(this);
        this.state = {foundID : ""};
    }

    findID = () => {
        const email = this.email.value;
    
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        
        if (email === "" || email === undefined) {
          alert("이메일 주소를 입력해주세요.");
          this.email.focus();
          return;
        } 

        else if (
          email.match(regExp) === null ||
          email.match(regExp) === undefined
        ) {
          alert("이메일 형식에 맞게 입력해주세요.");
          this.email.value = "";
          this.email.focus();
          return;
        } 
    
        const send_param = {
          headers,
          email: this.email.value
        };

        axios
        .post("/api/findID", send_param)
        //정상 수행
        .then(returnData => {
          if (returnData.data.message) {
            alert(returnData.data.message);
            // window.location.reload();
            this.setState({foundID : returnData.data.ID});
            // if(returnData.data.NonF == "0")
            // {
            //   window.location.href = "/login/1";
            // }
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
          let page;
          
          const foundid = this.state.foundID;

        return(
            <div style={{width:'100%', float:'left'}}>

              <Form style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                                    <Form.Group controlId="FindIDForm">

                                    <Form.Label><strong>이메일</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="100"
                                        ref={ref => (this.email = ref)}
                                        placeholder="이메일 주소를 입력해 주세요."
                                        style={{marginBottom: '20px'}}
                                    />
                                      
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        사용자의 개인정보를 완전히 보호하고 있습니다.
                                    </Form.Text>

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.findID}
                                        variant="outline-secondary"
                                        type="button"
                                        style={{marginBottom: '40px'}}
                                        block
                                    >
                                        아이디 찾기
                                    </Button>
                                    </Form.Group>

                                    {
                                      (()=>{

                                        if(foundid != "")
                                        {
                                          return <Form.Text style={{marginBottom: '40px'}} className="text-muted"> 사용자님의 아이디는 {foundid} 입니다. </Form.Text>
                                        }                                       
                                      })()
                                    }
              </Form>

              <Link to ={`/login/1`} className={style.link2}><span className={style.smallbox} 
                            style={{backgroundColor: '#666666', color: 'white', width:'24%', float:'left', marginLeft: '38%', marginRight: '38%', textAlign: 'center'}}>
                              로그인하러가기</span></Link>
            </div>
        )
    };

}

export default Find1;