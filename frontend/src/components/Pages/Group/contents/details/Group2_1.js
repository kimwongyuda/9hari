import React, {Component} from 'react';
import style from './Group2_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class Group2_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let page = this.props.props;
        let content;
        if(page == '1'){
            content = 
            <div>
                
                <div style={{width:'100%', float: 'left'}}>
                    <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>여전도회 소개</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '30px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>항존직 공부 지도</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>김인아 목사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>제직 훈련 지도</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>김인아 목사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>총여전도 회장</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>김정심 권사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>총여전도 총무</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>장영숙 권사</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>

                {/* 에녹부 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>에녹부</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>서정수 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>황분옥 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>탁금자 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>진을희 권사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                {/* 한나 여전도회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>한나 여전도회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>정민자 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>신춘자 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>서기</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>황분옥 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>신춘자 권사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>
                {/* 제 1여전도회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>제 1여전도회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김정심 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>장영숙 권사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                {/* 제 2여전도회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>제 2여전도회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>장순진 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>송윤자 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이란옥 권사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                {/* 제 3여전도회 */}
                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>제 3여전도회</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>최봉희 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이은화 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이은화 권사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                {/* <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>2020년 주제</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>말씀으로 세워지는 교회(느 2:17, 엡 5:26-26)</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>1) 말씀 안에서 교회 세우기(엡5: 26)</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>2) 말씀 안에서 다음세대 세우기(엡5: 27)</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>3) 말씀 안에서 신앙 세우기(느2: 17)</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>실천 사항</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>1) 온전한 예배드리기</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>2) 전교인 성경 읽기</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>3) 전교인 기도에 힘쓰기</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>4) 전교인 전도하기</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>5) 전교인 서로 사랑으로 섬기기</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>6) 전교인 헌신/봉사하기</span>
                    <br></br>
                    </div>
                </div> */}

            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <span className={style.textb2} style={{fontSize: '20px'}}>준비중입니다</span>
            </div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Group2_1;