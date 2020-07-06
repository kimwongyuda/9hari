import React, {Component} from 'react';
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import style from './Find1.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Find2 extends Component{

    constructor(props){
        super(props);
        this.findPW = this.findPW.bind(this);
        this.changePW = this.changePW.bind(this);
        this.state = {activation : false};
    }

    findPW = () => {
        const email = this.email.value;
        const id = this.id.value;
    
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        
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
        else if(
          id === "" || id === undefined
        ){
            alert("ID를 입력해주세요.");
            this.id.focus();
            return;
        }
    
        const send_param = {
          headers,
          email: this.email.value,
          id: this.id.value
        };

        axios
        .post("/api/findPW", send_param)
        //정상 수행
        .then(returnData => {
          if (returnData.data.message) {
            alert(returnData.data.message);
            // window.location.reload();
            if(returnData.data.NonF == "0")
            {
              this.setState({activation :true});
            }
          } else {
            alert(returnData.data.message);
          }
        })
        //에러
        .catch(err => {
          console.log(err);
        });

    };

    changePW = () => {
      const pw = this.pw.value;
      const pw2 = this.pw2.value;
      const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

      if (pw === "" || pw === undefined) {
        alert("비밀번호를 입력해주세요.");
        this.pw.focus();
        return;
      } 
      
      else if (
        pw.match(regExp2) === null ||
        pw.match(regExp2) === undefined
      ) {
        alert("비밀번호를 숫자와 문자, 특수문자 포함 8~16자리로 입력해주세요.");
        this.pw.value = "";
        this.pw.focus();
        return;
      }

      else if(
        pw != pw2
      )
      {
          alert("비밀번호와 일치하지 않습니다. 다시 입력해주세요.");
          this.pw2.value = "";
          this.pw2.focus();
          return;
      }

      const send_param = {
        headers,
        email: this.email.value,
        id: this.id.value,
        pw: this.Pw.value
      };

      axios
      .post("/api/changePW", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          // window.location.reload();
          if(returnData.data.NonF == "0")
          {
            window.location.href = "/login/1";
          }
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

        let active = this.state.activation;

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
                                    
                                    <Form.Label><strong>아이디</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="40"
                                        ref={ref => (this.id = ref)}
                                        placeholder="아이디를 입력해 주세요."
                                        style={{marginBottom: '20px'}}
                                    />

                                      
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        사용자의 개인정보를 완전히 보호하고 있습니다.
                                    </Form.Text>

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.findPW}
                                        variant="outline-secondary"
                                        type="button"
                                        style={{marginBottom: '40px'}}
                                        block
                                    >
                                        비밀번호 찾기
                                    </Button>
                                    </Form.Group>
                                </Form>
                                
                                {
                                  (()=> {
                                    if(active)
                                    {
                                    
                                    return <Form style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                                    <Form.Group controlId="ChangePWForm">

                                    <Form.Label><strong>비밀번호</strong></Form.Label>
                                    <Form.Control
                                        type="password"
                                        maxLength="64"
                                        ref={ref => (this.pw = ref)}
                                        placeholder="비밀번호를 입력해 주세요"
                                        style={{marginBottom: '20px'}}
                                      />


                                    <Form.Label><strong>비밀번호 확인</strong></Form.Label>
                                    <Form.Control
                                        type="password"
                                        maxLength="64"
                                        ref={ref => (this.pw2 = ref)}
                                        placeholder="비밀번호를 입력해 주세요"
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.changePW}
                                        variant="outline-secondary"
                                        type="button"
                                        style={{marginBottom: '40px'}}
                                        block
                                    >
                                        비밀번호 변경
                                    </Button>
                                    </Form.Group>
                                </Form>
                                    }
                                  })()
                                
                                }
            </div>
        )
    };

}

export default Find2;