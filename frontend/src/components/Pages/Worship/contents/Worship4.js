import React, {Component} from 'react';
import style from './Worship4.module.css';
import Pagination from './detail/Pagination';
import headimage from '../../../../images/youtube.jpg';

class Worship4 extends Component{

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>특별 예배</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 특별 예배</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 예배와 말씀 >&nbsp;</p>
               </div>


                {/* 유튜브 홍보 이미지 */}
                <a href="https://www.youtube.com/channel/UCWn2WDpdx1eZfYmRHwUuyMA" target = "_blank"><img src={headimage} style={{width:'100%', float: 'left', objectFit: 'cover', height: '300px', marginBottom: '40px'}}></img></a>


               <div className={style.box} style={{marginTop: '10px'}}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>특별 설교 모음</span>
                </div>

                <Pagination props={{type: 'spe', pageindex: 4}}></Pagination>

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
               </div>
            </div>
        )
    };

}

export default Worship4;