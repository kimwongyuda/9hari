import React, {Component} from 'react';
import style from './Welcome5.module.css';
import {Link} from 'react-router-dom';

class Welcome5 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>예배 안내</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 예배 안내</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <div style={{width: '100%', float: 'left', marginTop: '10px'}}>

                    {/*주일 예배*/}
                    <div className={style.box}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>주일 예배</span>
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
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>교회 학교</td>
                                    <td className={style.td+' '+style.textb1}>유치/유년예배</td>
                                    <td className={style.td+' '+style.textb1}>오전 11:00</td>
                                    <td className={style.td+' '+style.textb1}>1층 메빅실</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>초등/소년예배</td>
                                    <td className={style.td+' '+style.textb1}>오전 11:00</td>
                                    <td className={style.td+' '+style.textb1}>3층 메빅실</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>중등/고등예배</td>
                                    <td className={style.td+' '+style.textb1}>오전 10:30</td>
                                    <td className={style.td+' '+style.textb1}>B1층 중고등부실</td>
                                </tr>
                        </tbody>
                    </table>

                    {/*수요 예배*/}
                    <div className={style.box}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>수요 예배</span>
                    </div>

                    <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='2'>수요 예배</td>
                                    <td className={style.td+' '+style.textb2}>구분</td>
                                    <td className={style.td+' '+style.textb2}>시간</td>
                                    <td className={style.td+' '+style.textb2}>장소</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>&nbsp;</td>
                                    <td className={style.td+' '+style.textb1}>오후 19:30</td>
                                    <td className={style.td+' '+style.textb1}>2층 대예배실</td>
                                </tr>
                        </tbody>
                    </table>

                    {/*금요 예배*/}
                    <div className={style.box}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>금요 예배</span>
                    </div>

                    <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='2'>금요 철야 예배</td>
                                    <td className={style.td+' '+style.textb2}>구분</td>
                                    <td className={style.td+' '+style.textb2}>시간</td>
                                    <td className={style.td+' '+style.textb2}>장소</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>&nbsp;</td>
                                    <td className={style.td+' '+style.textb1}>오후 21:00</td>
                                    <td className={style.td+' '+style.textb1}>2층 대예배실</td>
                                </tr>
                        </tbody>
                    </table>

                    {/*기타 예배*/}
                    <div className={style.box}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>기타 예배</span>
                    </div>

                    <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='2'>기타 예배</td>
                                    <td className={style.td+' '+style.textb2}>구분</td>
                                    <td className={style.td+' '+style.textb2}>시간</td>
                                    <td className={style.td+' '+style.textb2}>장소</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb1}>새벽기도회</td>
                                    <td className={style.td+' '+style.textb1}>오전 05:25</td>
                                    <td className={style.td+' '+style.textb1}>2층 대예배실</td>
                                </tr>
                        </tbody>
                    </table>

               </div>
            </div>
        )
    };

}

export default Welcome5;