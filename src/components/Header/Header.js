import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import logo from '../../images/logo.jfif';
import './Header.css'

class Header extends Component{

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
                        <Link to="/introduce"> Link1 </Link>
                        <Link> Link2 </Link>
                    </Typography>
                    </div>
                </Toolbar>
                <Toolbar className='toolbar3'>
                    <div className='temp'>
                    <Typography style={{color: 'white'}}className='typography' variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    </div>
                    <div className='temp'>
                    <Typography style={{color: 'white'}}className='typography' variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    </div>
                    
                </Toolbar>
            </AppBar>
        )
    };

}

export default Header;