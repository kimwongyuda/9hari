import React, {Component} from 'react';
import style from './Worship4.module.css';
import Pagination from './detail/Pagination';
import {Link} from 'react-router-dom';

class Worship4 extends Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>특별 예배</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 특별 예배</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 예배와 말씀 >&nbsp;</p>
               </div>

               <div className={style.box} style={{marginTop: '10px'}}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>특별 설교 모음</span>
                </div>

                <Pagination props={{type: 'spe'}}></Pagination>

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

export default Worship4;