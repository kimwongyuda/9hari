import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import logo from '../../images/logo.jfif';
import Typography from '@material-ui/core/Typography';
import './Bottom.css'

class Bottom extends Component{

    render(){
        return(
            <div className='appbar'>
                <div className='toolbar' style={{backgroundColor: 'white', overflow: 'hidden'}}>
                    <div className='navbar' style={{height: '60px'}}>
                        <img src={logo} style= {{margin: '5px 20px 5px 0px', float: 'left', width: '50px', height: '50px'}}></img>
                        <p style={{textAlign: 'center'}}>경기도 용인시 수지구 죽전로 100 [단국대학교 옆] TEL 031) 896-1000, 031) 718-9191 FAX 031) 896-6077 선교원 TEL : 031) 896-7000</p>
                    </div>
                </div>
            </div>
        )
    };

}

export default Bottom;