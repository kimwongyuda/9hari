import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background1 from '../../../images/background1.jpg';
import style from './Signup.module.css';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

// 아이디
// 비밀번호
// 비밀번호 확인
// 이메일
// 이름
// 직급
// 권한(교역자와 슈퍼 성도는 승인 받아야함)
class Signup extends Component{

    constructor(props){
        super(props);
    }

    join = () => {
        const joinEmail = this.joinEmail.value;
        const joinID = this.joinID.value;
        const joinName = this.joinName.value;
        const joinPw = this.joinPw.value;
        const joinPw2 = this.joinPw2.value;
        const joinRank = this.joinRank.value;
        const joinAuthority = this.joinAuthority.value;

        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        
        if (joinEmail === "" || joinEmail === undefined) {
          alert("이메일 주소를 입력해주세요.");
          this.joinEmail.focus();
          return;
        } 

        else if (
          joinEmail.match(regExp) === null ||
          joinEmail.match(regExp) === undefined
        ) {
          alert("이메일 형식에 맞게 입력해주세요.");
          this.joinEmail.value = "";
          this.joinEmail.focus();
          return;
        } 

        else if(
            joinID === "" || joinID === undefined
        ){
            alert("ID를 입력해주세요.");
            this.joinID.focus();
            return;
        }

        else if (joinName === "" || joinName === undefined) {
          alert("이름을 입력해주세요.");
          this.joinName.focus();
          return;
        }
        
        else if (joinPw === "" || joinPw === undefined) {
          alert("비밀번호를 입력해주세요.");
          this.joinPw.focus();
          return;
        } 
        
        else if (
          joinPw.match(regExp2) === null ||
          joinPw.match(regExp2) === undefined
        ) {
          alert("비밀번호를 숫자와 문자, 특수문자 포함 8~16자리로 입력해주세요.");
          this.joinPw.value = "";
          this.joinPw.focus();
          return;
        }

        else if(
            joinPw != joinPw2
        )
        {
            alert("비밀번호와 일치하지 않습니다. 다시 입력해주세요.");
            this.joinPw2.value = "";
            this.joinPw2.focus();
            return;
        }
        
        else if (
            joinRank === "" || joinRank === undefined
        ){
            alert("직급을 골라주세요.");
            this.joinRank.focus();
            return;
        }

        else if(
            joinAuthority === "" || joinAuthority === undefined
        ) {
            alert("권한을 골라주세요.");
            this.joinAuthority.focus();
            return;
        }

        const send_param = {
            headers,
            email: this.joinEmail.value,
            id: this.joinID.value,
            name: this.joinName.value,
            password: this.joinPw.value,
            password2: this.joinPw2.value,
            rank: this.joinRank.value,
            authority: this.joinAuthority.value
        };

        axios
        .post("/api/signup", send_param)
        //정상 수행
        .then(returnData => {
            if (returnData.data.message) {
            alert(returnData.data.message);
            //이메일 중복 체크
            if (returnData.data.dupE === "1") {
                this.joinEmail.value = "";
                this.joinEmail.focus();
            }
            //아이디 중복 체크
            else if(returnData.data.dupI === "1")
            {
                this.joinID.value = "";
                this.joinID.focus();
            }
            else {
                this.joinEmail.value = "";
                this.joinID.value = "";
                this.joinName.value = "";
                this.joinPw.value = "";
                this.joinPw2.value = "";
                this.joinRank.value = "";
                this.joinAuthority.value = "";
            }
            } else {
            alert("회원가입 실패");
            }
        })
        //에러
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        // const formStyle = {
        //     marginLeft: 20%
        //     width: 60%
        //     marginRight: 20%
        //   };
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
                                    <Form.Group controlId="joinForm">
                                    <Form.Label><strong>이메일 주소</strong></Form.Label>
                                    <Form.Control
                                        type="email"
                                        maxLength="100"
                                        ref={ref => (this.joinEmail = ref)}
                                        placeholder="이메일을 입력해 주세요."
                                    />
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        당신의 이메일을 어떤 누구와도 공유하지 않습니다.
                                    </Form.Text>


                                    <Form.Label><strong>아이디</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="40"
                                        ref={ref => (this.joinID = ref)}
                                        placeholder="아이디를 입력해 주세요."
                                        style={{marginBottom: '20px'}}
                                    />
                                    

                                    <Form.Label><strong>이름</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        maxLength="20"
                                        ref={ref => (this.joinName = ref)}
                                        placeholder="이름을 입력해 주세요."
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


                                    <Form.Label><strong>비밀번호 확인</strong></Form.Label>
                                    <Form.Control
                                        type="password"
                                        maxLength="64"
                                        ref={ref => (this.joinPw2 = ref)}
                                        placeholder="비밀번호를 입력해 주세요"
                                        style={{marginBottom: '20px'}}
                                    />

                                    <Form.Label><strong>직급</strong></Form.Label>
                                    <Form.Control as="select"
                                        ref={ref => (this.joinRank = ref)}
                                    >
                                        <option>교역자</option>
                                        <option>장로</option>
                                        <option>권사</option>
                                        <option>집사</option>
                                        <option>일반</option>
                                    </Form.Control>
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        해당되는 직급이 없는 경우 일반을 선택해주시길 바랍니다.
                                    </Form.Text>


                                    <Form.Label><strong>권한</strong></Form.Label>
                                    <Form.Control as="select"
                                        ref={ref => (this.joinAuthority = ref)}
                                    >
                                        <option>교역자</option>
                                        <option>수정가능</option>
                                        <option>일반</option>
                                    </Form.Control>
                                    <Form.Text style={{marginBottom: '20px'}} className="text-muted">
                                        교역자, 수정가능의 경우 - 이미지, 영상 등을 업로드, 수정 가능/관리자로부터 승인을 기다려야 합니다.<br></br>
                                        일반 - 수정은 불가하되 읽기는 가능
                                    </Form.Text>

                                    <Button
                                        style={buttonStyle}
                                        onClick={this.join}
                                        variant="outline-secondary"
                                        type="button"
                                        block
                                    >
                                        회원가입
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

export default Signup;