import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Bottom.module.css'
import logo from '../../images/logo.jpg';

class Bottom extends Component{

    render(){
        return(
            <div className={style.appbar}>
                <div className={style.toolbar} style={{backgroundColor: 'black'}}>
                    <div className={style.navbar} style={{marginTop: '30px', marginBottom: '30px', height: '200px'}}>

                        <div style={{width: '50%', color: 'white', float: 'left', height: '100%'}}>
                            <div style={{width: '50%', float:'left', height: '100%'}}><Link to="/" ><img src={logo}></img></Link></div>
                            <div style={{width: '50%', color: 'white', float:'left', height: '100%'}}>
                                <h6 className={style.text} style={{width: '100%', float:'left'}}> ⓒ 2020 구하리교회. 
                                <br></br>All Rights Reserved.
                                <br></br> Designed by 김원규</h6>
                            </div>
                        </div>

                        <div style={{width: '50%', color: 'white', float: 'left'}}>
                            <h6 className={style.text2}>Contact us</h6>
                            <ul style={{listStyle: 'none', padding: '0'}}>
                                <li style={{width: '100%', float: 'left'}}>
                                    <h6 className={style.text2} style={{width: '60px', float: 'left'}}>주소&nbsp;</h6>
                                    <h6 className={style.text} style={{width: '400px', float:'left'}}>경기 용인시 기흥구 마북동 109</h6>
                                </li>
                                <li style={{width: '100%', float: 'left'}}>
                                    <h6 className={style.text2} style={{width: '60px', float: 'left'}}>번호&nbsp;</h6>
                                    <h6 className={style.text} style={{width: '400px', float:'left'}}>070-4238-0191</h6>
                                </li>
                                <li style={{width: '100%', float: 'left'}}>
                                    <h6 className={style.text2} style={{width: '60px', float: 'left'}}>FAX&nbsp;</h6>
                                    <h6 className={style.text} style={{width: '400px', float:'left'}}>070-4238-0191</h6>
                                </li>
                                <li style={{width: '100%', float: 'left'}}>
                                    <h6 className={style.text2} style={{width: '80px', float: 'left'}}>EMAIL&nbsp;</h6>
                                    <h6 className={style.text} style={{width: '400px', float:'left'}}>rladnjsrb9999@khu.ac.kr</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Bottom;