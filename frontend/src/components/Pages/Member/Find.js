import React, {Component} from 'react';
import background1 from '../../../images/background1.jpg';
import { Form, Button } from "react-bootstrap";
import style from './Find.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Find extends Component{

    constructor(props){
        super(props);
    }

    login = () => {
        const loginID = this.loginID.value;
        const loginPw = this.loginPw.value;
    
        if (loginID === "" || loginID === undefined) {
          alert("아이디를 입력해주세요.");
          this.loginID.focus();
          return;
        } else if (loginPw === "" || loginPw === undefined) {
          alert("비밀번호를 입력해주세요.");
          this.loginPw.focus();
          return;
        }
    
        const send_param = {
          headers,
          id: this.loginID.value,
          password: this.loginPw.value
        };

        axios
        .post("/api/find", send_param)
        //정상 수행
        .then(returnData => {
          if (returnData.data.message) {
            alert(returnData.data.message);
            // window.location.reload();
            if(returnData.data.NonI == "0" && returnData.data.WrongP == "0")
            {
              window.location.href = "/";
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

                                    <Form.Label><strong>아이디</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="40"
                                        ref={ref => (this.loginID = ref)}
                                        placeholder="아이디를 입력해 주세요."
                                        style={{marginBottom: '20px'}}
                                    />


                                    <Form.Label><strong>비밀번호</strong></Form.Label>
                                    <Form.Control
                                        type="password"
                                        maxLength="64"
                                        ref={ref => (this.loginPw = ref)}
                                        placeholder="비밀번호를 입력해 주세요"
                                        style={{marginBottom: '20px'}}
                                      />
                                      
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        사용자의 개인정보를 완전히 보호하고 있습니다.
                                    </Form.Text>

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.login}
                                        variant="outline-secondary"
                                        type="button"
                                        block
                                    >
                                        로그인
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

export default Find;