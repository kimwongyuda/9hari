import React, {Component} from 'react';
import style from './Group1_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class Group1_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let page = this.props.props;
        let content;
        if(page == '1'){
            content = 
            <div>
                
                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>남선교회 소개</span>
                </div>

                {/* 제 1남선교회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>제 1남선교회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>담임목사</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김인아 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김무령 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>부회장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>전병철 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김진환 집사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>서기</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김종택 집사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김진환 집사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                {/* 제 2남선교회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>제 2남선교회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>담임목사</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김인아 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김홍구 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이상호 집사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>서기</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이재길 집사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이재길 집사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>
                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>2020년 주제</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>말씀으로 세워지는 교회(느 2:17, 엡 5:26-26)</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>1) 말씀 안에서 교회 세우기(엡5: 26)</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>2) 말씀 안에서 다음세대 세우기(엡5: 27)</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>3) 말씀 안에서 신앙 세우기(느2: 17)</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>실천 사항</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>1) 온전한 예배드리기</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>2) 전교인 성경 읽기</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>3) 전교인 기도에 힘쓰기</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>4) 전교인 전도하기</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>5) 전교인 서로 사랑으로 섬기기</span>
                    <br></br>
                    <span className={style.text} style={{fontSize: '25px'}}>6) 전교인 헌신/봉사하기</span>
                    <br></br>
                </div>

            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <span className={style.text2} style={{fontSize: '20px'}}>준비중입니다</span>
            </div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Group1_1;