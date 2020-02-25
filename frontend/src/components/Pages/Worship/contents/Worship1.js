import React, {Component} from 'react';
import style from './Worship1.module.css';
import Pagination from './detail/Pagination';
import headimage from '../../../../images/youtube.jpg';

class Worship1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>주일 예배</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 주일 예배</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 예배와 말씀 >&nbsp;</p>
               </div>
                
                {/* 유튜브 홍보 이미지 */}
                <a href="https://www.youtube.com/channel/UCWn2WDpdx1eZfYmRHwUuyMA" target = "_blank"><img src={headimage} style={{width:'100%', float: 'left', objectFit: 'cover', height: '300px', marginBottom: '40px'}}></img></a>

               <div className={style.box} style={{marginTop: '10px'}}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주일 예배</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>대예배</td>
                                    <td className={style.td+' '+style.textb2}>구분</td>
                                    <td className={style.td+' '+style.textb2}>시간</td>
                                    <td className={style.td+' '+style.textb2}>장소</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>1부</td>
                                    <td className={style.td+' '+style.textb1}>오전 08:30</td>
                                    <td className={style.td+' '+style.textb1}>2층 대예배실</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>2부</td>
                                    <td className={style.td+' '+style.textb1}>오전 11:00</td>
                                    <td className={style.td+' '+style.textb1}>2층 대예배실</td>
                                </tr>
                        </tbody>
                </table>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주일 설교 모음</span>
                </div>

                <Pagination props={{type: 'sun', pageindex: 1}}></Pagination>

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

export default Worship1;