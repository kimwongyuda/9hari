import React, {Component} from 'react';
import style from './Worship3.module.css';

class Worship3 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>금요 예배</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: 'blue'}}> 금요 예배</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 예배와 말씀 >&nbsp;</p>
               </div>

               <div className={style.box} style={{marginTop: '10px'}}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>금요 예배</span>
                </div>

               <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='2'>금요 철야 예배</td>
                                    <td className={style.td+' '+style.text2}>구분</td>
                                    <td className={style.td+' '+style.text2}>시간</td>
                                    <td className={style.td+' '+style.text2}>장소</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text1}>&nbsp;</td>
                                    <td className={style.td+' '+style.text1}>오후 21:00</td>
                                    <td className={style.td+' '+style.text1}>2층 대예배실</td>
                                </tr>
                        </tbody>
                    </table>

                <div className={style.box} style={{marginTop: '10px'}}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>금요 설교 모음</span>
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

export default Worship3;