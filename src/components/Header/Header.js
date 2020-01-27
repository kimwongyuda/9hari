import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Header.module.css';
import logo from '../../images/logo.jpg';

class Header extends Component{

    constructor(props){
        super(props);
        this.onMouseOver.bind(this);
        this.state = {showResults: [false, false, false, false, false, false, false, false], 
            headers:[['담임목사환영사', '연혁', '섬기는분들', '찾아오시는 길'],
                    ['주일예배', '수요예배', '금요예배', '새벽예배', '유치유년부예배', '초등소년부예배','중고등부예배','구역예배'],
                    ['설교 모음', '간증 모음', '유튜브 채널'],
                    ['청년부', '3040모임', '새가족공부', '제자훈련'],
                    ['성경학교','수련회', '해외선교', '행사'],
                    ['구하리학원'],
                    ['구하리카페'],
                    ['건의하기']],
            links: [['/welcome/1','/welcome/2','/welcome/3','/welcome/4'],
                    ['/worship/1','/worship/2','/worship/3','/worship/4', '/worship/5', '/worship/6', '/worship/7', '/worship/8'],
                    ['/sermon/1', '/sermon/2', '/sermon/3'],
                    ['/group/1', '/group/2', '/group/3', '/group/4'],
                    ['/event/1', '/event/2', '/event/3', '/event/4'],
                    ['/academy/1'],
                    ['/cafe/1'],
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

    render(){
        return(
            <div className= {style.appbar}>
                <div className={style.toolbar} style={{height: '30px'}}>
                    <div className={style.navbar}>
                        <div className={style.element} style={{float: 'left'}}><Link to="/" className={style.link} style={{fontSize: '15px'}}>처음으로</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link} style={{fontSize: '15px'}}>회원가입</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link} style={{fontSize: '15px'}}>아이디/패스워드 찾기</Link></div>
                        <div className={style.element} style={{float: 'right'}}><Link to="/" className={style.link} style={{fontSize: '15px'}}>로그인</Link></div>
                    </div>
                </div>
                <div className={style.toolbar} style={{height: '100px'}}>
                    <div className={style.navbar}>
                        <div className={style.element2} style={{marginTop: '10px'}}><Link to="/" ><img src={logo}></img></Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/welcome/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(0)}>교회소개</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/worship/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(1)}>예배</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/sermon/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(2)}>설교와 말씀</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/group/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(3)}>부서 및 모임</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/event/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(4)}>선교와 행사</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/academy/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(5)}>구하리 학원</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/cafe/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(6)}>구하리 카페</Link></div>
                        <div className={style.element2} style={{marginTop: '40px'}}><Link to="/suggest/1" className={style.link2} style={{fontSize: '20px'}} onMouseOver={() => this.onMouseOver(7)}>건의사항</Link></div>
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