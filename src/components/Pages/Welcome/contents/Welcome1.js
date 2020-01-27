import React, {Component} from 'react';
import style from './Welcome1.module.css';
import {Link} from 'react-router-dom';

class Welcome1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '100px', float: 'left'}}>
                   <p className={style.text} style={{fontSize: '30px', float: 'left'}}>담임목사환영사</p>
               </div>
               <div style={{width: '50%', height: '100px', float: 'left'}}>
                   <p className={style.text} style={{float: 'right', color: 'blue'}}> 담임목사환영사</p>
                   <p className={style.text} style={{float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>
               <div style={{width: '100%', float: 'left', marginTop: '10px'}}>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   aa
               </div>
            </div>
        )
    };

}

export default Welcome1;