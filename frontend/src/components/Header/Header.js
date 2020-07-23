import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Header.module.css';
import logo from '../../images/logo.jpg';
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component{

    constructor(props){
        super(props);

        this.onMouseOver.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {showResults: [false, false, false, false, false, false, false, false], 
            headers:[['담임목사환영사', '연혁', '목회철학', '섬기는분들', '예배 안내', '찾아오시는 길', '교회 소식'],
                    ['주일 예배', '수요 예배', '금요 예배', '특별 예배'],
                    ['유치유년부', '초등부', '중고등부', '청년부'],
                    ['남선교회', '여전도회', '3040 선교회', '새가족 공부', '찬양대'],
                    ['임직식', '전교인 수련회', '성탄절 발표'],
                    ['구하리 카페'],
                    ['자유 게시판', '구하리 갤러리']],
            links: [['/welcome/1','/welcome/2','/welcome/3','/welcome/4/1', '/welcome/5','/welcome/6/1', '/welcome/7'],
                    ['/worship/1/1','/worship/2/1','/worship/3/1','/worship/4/1'],
                    ['/ng/1/1', '/ng/2/1', '/ng/3/1', '/ng/4/1'],
                    ['/group/1/1', '/group/2/1', '/group/3/1', '/group/4/1', '/group/5/1'],
                    ['/event/1', '/event/2', '/event/3'],
                    ['/organ/2/1'],
                    ['/suggest/1/1','/suggest/2/1']],
            auth: ''
        };
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({auth: res.authority}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/auth`);
        const body = await response.json();
        return body;
    }

    onMouseOver(idx){
        const newState = this.state.showResults;
        for(var i=0; i<newState.length;i++){
            if(i==idx){
                newState[i] = true;
            }
            else{
                newState[i] = false;
            }
        }
        this.setState({
            showResults: newState,
        });
    }

    getheaders(idx){
        const ret = this.state.headers[idx].map((item,idx2) => {return (
            <Link to={this.state.links[idx][idx2]} className={style.link3} style={{fontSize: '15px'}}>{item}</Link>);});

        return ret;
    }

    message(){
        alert("준비중입니다!")
    }

    logout(){
        axios
        .post("/api/logout")
        //정상 수행
        .then(returnData => {
            if (returnData.data.message) {
            alert(returnData.data.message);
            
            window.location.href = "/";
            }
        })
        //에러
        .catch(err => {
            console.log(err);
        });
    }


    render(){

        const cookiename = document.cookie.substr(5);
        const auth = this.state.auth;

        return(
            <div className= {style.appbar}>
                <div className={style.toolbar} style={{height: '30px'}}>
                    <div className={style.navbar}>
                        <div className={style.element} style={{float: 'left'}}><Link to="/" className={style.link+' '+style.textb2} style={{fontSize: '15px'}}>처음으로</Link></div>
                        <div className={style.element} style={{float: 'left'}}><a href="https://m.cafe.daum.net/9hari" target = "-blank" className={style.link+' '+style.textb2} style={{fontSize: '15px'}}>구하리 다음 카페 가기</a></div>
                        
                        {
                            (()=>{
                                if(cookiename.length == 0)
                                {
                                    return <div><div className={style.element} style={{float: 'right'}}><Link to="/signup/1" className={style.link+' '+style.textb2} style={{fontSize: '15px'}}>회원가입</Link></div>
                                    <div className={style.element} style={{float: 'right'}}><Link to="/login/1" className={style.link+' '+style.textb2} style={{fontSize: '15px'}}>로그인</Link></div></div>
                                }
                                else
                                {
                                    return <div className={style.element} style={{float: 'right'}}><Link className={style.link+' '+style.textb2} style={{fontSize: '15px'}} onClick={this.logout}>로그아웃</Link></div>
                                }
                            })()
                        }
                        {
                            (()=>{
                                if(cookiename.length != 0)
                                {
                                    if(auth == 'admin')
                                    {
                                        return <div className={style.element} style={{float: 'right'}}><Link to="/admin/1"className={style.link+' '+style.textb2} style={{fontSize: '15px'}}>권한관리</Link></div>
                                    }
                                }
                            })()
                        }

                        
                    </div>
                </div>
                <div className={style.toolbar} style={{height: '100px'}}>
                    <div className={style.navbar}>
                        <div className={style.element2} style={{marginTop: '10px'}}><Link to="/" ><img src={logo}></img></Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/welcome/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(0)}>교회 소개</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/worship/1/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(1)}>예배와 말씀</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/ng/1/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(2)}>다음 세대</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/group/1/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(3)}>부서 및 모임</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/event/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(4)}>교회 행사</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/organ/2/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(5)}>부속 기관</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/suggest/1/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(6)}>게시판</Link></div>
                    </div>
                </div>
                <div className={style.toolbar} style={{height: '30px', backgroundColor: 'rgba(0,0,0,0.25)', textAlign: 'center'}}>
                    <div className={style.navbar}>
                    {this.state.showResults.map((item,idx) => { return (
                        this.state.showResults[idx] && this.getheaders(idx)
                    );})
                    }
                    </div>
                </div>
            </div>
        )
    };

}

export default Header;