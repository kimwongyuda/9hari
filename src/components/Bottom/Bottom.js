import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import style from './Bottom.module.css'

class Bottom extends Component{

    render(){
        return(
            <div className={style.appbar}>
                <div className={style.toolbar} style={{backgroundColor: 'white'}}>
                    <div className={style.navbar} style={{marginTop: '30px', marginBottom: '30px', height: '300px'}}>
                        <p style={{textAlign: 'center'}}>구하리교회</p>
                    </div>
                </div>
            </div>
        )
    };

}

export default Bottom;