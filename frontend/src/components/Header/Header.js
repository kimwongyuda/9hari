import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Header.module.css';
import logo from '../../images/logo.jpg';

class Header extends Component{

    constructor(props){
        super(props);
        this.onMouseOver.bind(this);
        this.state = {showResults: [false, false, false, false, false, false, false, false], 
            headers:[['담임목사환영사', '연혁', '목회철학', '섬기는분들', '예배 안내', '찾아오시는 길'],
                    ['주일 예배', '수요 예배', '금요 예배', '특별 예배'],
                    ['유치유년부', '초등부', '중고등부', '청년부'],
                    ['남선교회', '여전도회', '3040모임', '새가족공부', '제자훈련'],
                    ['임직식', '전교인 수련회', '성탄절 발표'],
                    ['구하리 학원', '구하리 카페'],
                    ['자유 게시판']],
            links: [['/welcome/1','/welcome/2','/welcome/3','/welcome/4/1','/welcome/5','/welcome/6/1'],
                    ['/worship/1/1','/worship/2/1','/worship/3/1','/worship/4/1'],
                    ['/ng/1/1', '/ng/2/1', '/ng/3/1', '/ng/4/1'],
                    ['/group/1/1', '/group/2/1', '/group/3/1', '/group/4/1', '/group/5/1'],
                    ['/event/1', '/event/2', '/event/3'],
                    ['/organ/1', '/organ/2'],
                    ['/suggest/1']]
        };
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

    render(){
        return(
            <div className= {style.appbar}>
                <div className={style.toolbar} style={{height: '30px'}}>
                    <div className={style.navbar}>
                        <div className={style.element} style={{float: 'left'}}><Link to="/" className={style.link+' '+style.text2} style={{fontSize: '15px'}}>처음으로</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link+' '+style.text2} style={{fontSize: '15px'}} onClick={this.message}>회원가입</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link+' '+style.text2} style={{fontSize: '15px'}} onClick={this.message}>아이디/패스워드 찾기</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link+' '+style.text2} style={{fontSize: '15px'}} onClick={this.message}>로그인</Link></div>
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
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/organ/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(5)}>부속 기관</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/suggest/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(6)}>게시판</Link></div>
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