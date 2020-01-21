import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Bottom.module.css'

class Bottom extends Component{

    render(){
        return(
            <div className={style.appbar}>
                <div className={style.toolbar} style={{backgroundColor: 'white', overflow: 'hidden'}}>
                    <div className={style.navbar} style={{height: '60px'}}>
                        <p style={{textAlign: 'center'}}>구하리교회</p>
                    </div>
                </div>
            </div>
        )
    };

}

export default Bottom;