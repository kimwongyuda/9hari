import React, {Component} from 'react';
import style from './Suggest1.module.css';
import {Link} from 'react-router-dom';

class Suggest1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>자유 게시판</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: 'blue'}}> 자유 게시판</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 게시판 >&nbsp;</p>
               </div>

               <div style={{width: '100%', float: 'left', marginTop: '10px'}}>

                   <span className={style.text2} style={{fontSize: '30px'}}>준비중입니다.</span>
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
               </div>
            </div>
        )
    };

}

export default Suggest1;