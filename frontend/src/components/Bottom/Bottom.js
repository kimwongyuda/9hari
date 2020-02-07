import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Bottom.module.css'
import home from '../../images/home2_ps.jpg';

// ⓒ 2020 구하리교회. All Rights Reserved. Designed by 김원규
class Bottom extends Component{

    render(){
        return(
            <div className={style.appbar}>
                <div className={style.toolbar} style={{backgroundColor: 'rgb(80, 80, 80)'}}>
                    <div className={style.navbar} style={{marginTop: '30px', marginBottom: '30px', height: '150px'}}>
                        <div style={{width: '100%', float: 'left', marginTop: '30px'}}>
                            <Link to="/"><img style={{width: '40px', objectFit: 'fill', marginBottom: '9px', marginRight: '5px'}}src={home}></img></Link>
                            <span className={style.text} style={{color: 'white', fontSize: '20px', marginRight: '20px'}}>구하리교회</span>
                            <span className={style.text2} style={{color: 'white', fontSize: '20px', marginRight: '5px'}}>주소</span>
                            <span className={style.text} style={{color: 'white', fontSize: '20px', marginRight: '20px'}}>경기 용인시 기흥구 마북동 109</span>
                            <span className={style.text2} style={{color: 'white', fontSize: '20px', marginRight: '5px'}}>번호</span>
                            <span className={style.text} style={{color: 'white', fontSize: '20px', marginRight: '20px'}}>070-4238-0191</span>
                            <span className={style.text2} style={{color: 'white', fontSize: '20px', marginRight: '5px'}}>FAX</span>
                            <span className={style.text} style={{color: 'white', fontSize: '20px', marginRight: '20px'}}>070-4238-0191</span>
                            <span className={style.text2} style={{color: 'white', fontSize: '20px', marginRight: '5px'}}>EMAIL</span>
                            <span className={style.text} style={{color: 'white', fontSize: '20px', marginRight: '20px'}}>rladnjsrb9999@khu.ac.kr</span>
                        </div>
                        <div style={{width: '100%', float: 'left', marginBottom: '30px', marginTop: '10px'}}>
                            <span className={style.text} style={{width: '100%', textAlign: 'center', display: 'inline-block', color: 'white', fontSize: '20px', marginRight: '20px'}}>ⓒ 2020 구하리교회. All Rights Reserved. Designed by 김원규</span>   
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Bottom;