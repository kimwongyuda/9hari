import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.jfif';
import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.onMouseOver.bind(this);
        this.state = {showResults: [false, false, false, false, false, false, false, false], 
            headers:[['담임목사환영사', '연혁', '섬기는분들', '찾아오시는 길'],
                    ['주일예배', '수요예배', '금요예배', '새벽예배', '유치유년부예배', '초등소년부예배','중고등부예배','구역예배'],
                    ['설교 모음', '간증 모음', '유튜브 채널'],
                    ['청년부', '3040모임', '새가족공부', '제자훈련'],
                    ['수련회', '해외선교', '행사'],
                    ['구하리학원'],
                    ['구하리카페'],
                    ['건의하기']],
            links: [['/welcome/1','/welcome/2','/welcome/3','/welcome/4'],
                    ['/worship/1','/worship/2','/worship/3','/worship/4', '/worship/5', '/worship/6', '/worship/7', '/worship/8'],
                    ['/sermon/1', '/sermon/2', '/sermon/3'],
                    ['/group/1', '/group/2', '/group/3', '/group/4'],
                    ['/event/1', '/event/2', '/event/3'],
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
            <Link to={this.state.links[idx][idx2]} style={{textDecoration : 'none'}} ><Button size='small' color='primary'>{item}</Button></Link>);});

        return ret;
    }

    render(){
        return(
            <div className='appbar'>
                <div className='toolbar' style={{height: '30px'}}>
                    <div className='navbar'>
                    <Link to="/" style={{textDecoration : 'none', float: 'left'}}><Button size='small'>처음으로</Button></Link>
                    <Link to="/" style={{textDecoration : 'none', float: 'right'}}><Button size='small'>회원가입</Button></Link>
                    <Link to="/" style={{textDecoration : 'none', float: 'right'}}><Button size='small'>로그인</Button></Link>
                    </div>
                </div>
                <div className='toolbar' style={{height: '100px'}}>
                    <div className='navbar'>
                    {/* <img src={logo} style= {{margin: '5px 20px 5px 0px', float: 'left', width: '50px', height: '50px'}}></img> */}
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(0)}><Button size='large' style={{fontSize: '20px'}}>교회소개</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(1)}><Button size='large' style={{fontSize: '20px'}}>예배</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(2)}><Button size='large' style={{fontSize: '20px'}}>설교와 말씀</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(3)}><Button size='large' style={{fontSize: '20px'}}>부서 및 모임</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(4)}><Button size='large' style={{fontSize: '20px'}}>선교와 행사</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(5)}><Button size='large' style={{fontSize: '20px'}}>구하리 학원</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(6)}><Button size='large' style={{fontSize: '20px'}}>구하리 카페</Button></Link>
                    <Link to="/" style={{textDecoration : 'none'}} onMouseOver={() => this.onMouseOver(7)}><Button size='large' style={{fontSize: '20px'}}>건의사항</Button></Link>
                    </div>
                </div>
                <div className='toolbar' style={{height: '30px', overflow: 'hidden'}}>
                    <div className='navbar'>
                    {this.state.showResults.map((item,idx) => { return (
                        <div className={this.state.showResults[idx] ? 'smallmenu' : ''}>{this.state.showResults[idx] && 
                        this.getheaders(idx)
                        }</div>
                    );})
                    }
                    </div>
                </div>
            </div>
        )
    };

}

export default Header;