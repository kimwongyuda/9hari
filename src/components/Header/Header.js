import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import logo from '../../images/logo.jfif';
import './Header.css'

class Header extends Component{

    constructor(props){
        super(props);
        this.onMouseOver.bind(this);
        this.state = {showResults: [false, false], 
            headers:[['담임목사환영사', '구하리 발자취', '섬기는분들', '예배안내', '찾아오시는 길', '교구편성', '행사', '차량시간표', '통합검색'],
                    ['교회학교 소개', '영유아 학교', '청소년 학교', '유소년 학교']],
            links: [['/welcome/1','/welcome/2','','','','','','',''],['','','','']]
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
            <Typography style={{color: 'white'}} className='typography' variant="h6" noWrap>
            <Link to={this.state.links[idx][idx2]}>{item}</Link>
            </Typography>);});

        return ret;
    }

    render(){
        return(
            <AppBar style={{ background: 'transparent' }} className='appbar' position='sticky'>
                <Toolbar className='toolbar'>
                    <div className='temp'>
                    <Typography className='typography' variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    </div>
                </Toolbar>
                <Toolbar className='toolbar2'>
                    <div className='temp'>
                    <img src={logo} style= {{margin: '5px 20px 5px 0px', float: 'left'}}></img>
                    <Typography className='typography' noWrap>
                        <Link to="/introduce" onMouseOver={() => this.onMouseOver(0)}> 교회소개 </Link>
                        <Link onMouseOver={() => this.onMouseOver(1)}> 교회학교 </Link>
                    </Typography>
                    </div>
                </Toolbar>
                <Toolbar className='toolbar3'>
                    {this.state.showResults.map((item,idx) => { return (
                        <div className={this.state.showResults[idx] ? 'smallmenu' : ''}>{this.state.showResults[idx] && 
                        this.getheaders(idx)
                        }</div>
                    );})
                    }
                </Toolbar>
            </AppBar>
        )
    };

}

export default Header;