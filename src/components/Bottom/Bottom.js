import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import logo from '../../images/logo.jfif';
import Typography from '@material-ui/core/Typography';
import './Bottom.css'

class Bottom extends Component{

    render(){
        return(
            <div>
                <div className='temp' style={{backgroundColor: 'gold'}}>
                <Typography style={{color: 'white'}} className='typography' variant="h3" noWrap>
                    GUHARI SERVICE
                </Typography>
                <ul>
                    <li><a href="http://localhost:3000">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a> <br/> <a>aa</a></li>
                    <li><a href="localhost:3000">bb</a> <br/> <a>bb</a></li>
                    <li><a href="localhost:3000">cc</a> <br/> <a>cc</a></li>
                    <li><a href="localhost:3000">dd</a> <br/> <a>dd</a></li>
                </ul>
                </div>
                <div className='temp' style={{backgroundColor: 'white'}}>b</div>
                <div className='temp' style={{backgroundColor: 'blue'}}>c</div>
                <div className='contact' style={{backgroundColor: 'gray'}}>
                    <img src={logo} style= {{margin: '5px 20px 5px 100px', float: 'left'}}></img>
                    <p>경기도 용인시 수지구 죽전로 100 [단국대학교 옆] TEL 031) 896-1000, 031) 718-9191 FAX 031) 896-6077 선교원 TEL : 031) 896-7000</p>
                </div>
            </div>
        )
    };

}

export default Bottom;