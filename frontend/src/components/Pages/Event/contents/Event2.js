import React, {Component} from 'react';
import style from './Event2.module.css';

class Event2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>전교인 수련회</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 전교인 수련회</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회 행사 >&nbsp;</p>
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

export default Event2;