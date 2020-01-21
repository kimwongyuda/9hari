import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Suggest1 from './contents/Suggest1';
import Background from '../../../images/image1.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import style from './Suggest.module.css';

class Suggest extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Suggest1></Suggest1>;
        }

        return(
            <div className={style.content}>
                <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>
                <MenuList style={{width: '20%', float: 'left'}}>
                <MenuItem>건의사항</MenuItem>
                <Link to='/suggest/1' style={{textDecoration: 'none'}}><MenuItem>건의하기</MenuItem></Link>
                </MenuList>
                <div style={{width: '80%', float: 'left'}}>
                    <div style={{marginTop: '10px', marginLeft: '10px'}}>
                        {page}
                    </div>
                </div>
            </div>
        )
    };

}

export default Suggest;