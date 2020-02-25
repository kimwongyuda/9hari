import React, {Component} from 'react';
import style from './Suggest2.module.css';

class Suggest2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>구하리 갤러리</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 구하리 갤러리</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 게시판 >&nbsp;</p>
               </div>

               <div style={{width: '100%', float: 'left', marginTop: '10px'}}>

                   <span className={style.textb2} style={{fontSize: '20px'}}>준비중입니다</span>
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

export default Suggest2;