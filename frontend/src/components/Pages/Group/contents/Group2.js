import React, {Component} from 'react';
import style from './Group2.module.css';

class Group2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>여전도회</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: 'blue'}}> 여전도회</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 부서 및 모임 >&nbsp;</p>
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
                   <br></br>
                   <br></br>
               </div>
            </div>
        )
    };

}

export default Group2;