import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Welcome1 from './contents/Welcome1';
import Welcome2 from './contents/Welcome2';
import Welcome3 from './contents/Welcome3';
import Welcome4 from './contents/Welcome4';
import Background from '../../../images/image1.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import style from './Welcome.module.css';

class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Welcome1></Welcome1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Welcome2></Welcome2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <Welcome3></Welcome3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <Welcome4></Welcome4>;
        }

        return(
            <div>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'full'}}></img>
                        <MenuList style={{width: '20%', float: 'left'}}>
                        <MenuItem><div className={style.link_}>교회소개</div></MenuItem>
                        <Link to='/welcome/1' className={style.link}><MenuItem><div className={style.link_}>담임목사환영사</div></MenuItem></Link>
                        <Link to='/welcome/2' className={style.link}><MenuItem><div className={style.link_}>연혁</div></MenuItem></Link>
                        <Link to='/welcome/3' className={style.link}><MenuItem><div className={style.link_}>섬기는분들</div></MenuItem></Link>
                        <Link to='/welcome/4' className={style.link}><MenuItem><div className={style.link_}>찾아오시는 길</div></MenuItem></Link>
                        </MenuList>
                        <div style={{width: '80%', float: 'left'}}>
                            <div style={{marginTop: '10px'}}>
                                {page}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Welcome;