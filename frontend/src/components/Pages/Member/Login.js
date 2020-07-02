import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background1 from '../../../images/background1.jpg';
import { Form, Button } from "react-bootstrap";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import style from './Login.module.css';

class Login extends Component{

    constructor(props){
        super(props);
    }

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
                        
                        <div style={{width: '100%', marginBottom: '10px', float: 'left'}}>
                            <div style={{marginTop: '10px'}}>
                            <Form style={{width: '60%', marginLeft: '20%', marginRight: '20%'}}>
                                    <Form.Group controlId="loginForm">

                                    <Form.Label><strong>아이디</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="40"
                                        ref={ref => (this.joinName = ref)}
                                        placeholder="아이디를 입력해 주세요."
                                        style={{marginBottom: '20px'}}
                                    />


                                    <Form.Label><strong>비밀번호</strong></Form.Label>
                                    <Form.Control
                                        type="password"
                                        maxLength="64"
                                        ref={ref => (this.joinPw = ref)}
                                        placeholder="비밀번호를 입력해 주세요"
                                        style={{marginBottom: '20px'}}
                                      />

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.join}
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

export default Login;