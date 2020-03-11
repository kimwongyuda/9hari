import React, {Component} from 'react';
import style from './NG3_1.module.css';
import image1 from '../../../../../images/NG_main_3.JPG';
import image2 from '../../../../../images/NG_main_32.jpg';

class NG3_1 extends Component{

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
                    <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>중고등부 소개</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '30px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 시간</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>오전 10:30</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>담당 교역자</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>박재현 목사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 장소</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>본관 B1층</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 대상</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>중학생/고등학생</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>중고등부</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image2} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '38px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>담당 교역자</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>박재현 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이상호 집사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='6'>교사</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>전성이 청년</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>전수경 청년</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>전형우 청년</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김원규 청년</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김민수 청년</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이정서 청년</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>표어</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>하나님을 나의 기준으로 삼자”(롬12:1-2)</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>그러므로 형제들아 내가 하나님의 모든 자비하심으로 너희를 권하노니 너희 몸을  하나님이 기뻐하시는 거룩한 산 제물로 드리라 이는 너희가 드릴 영적 예배니라 너희는 이 세대를   본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라(로마서 12장 1-2절)</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>교육 목적</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>하나님의 말씀으로 참 진리를 무장하고 항상 기도함으로 하나님과 동행하며 매 순간 믿음으로 하나님의 뜻을 선택하여 하나님이 기뻐하시는 예배자가 되게 한다.</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>1) 성경의 각 권의 책의 위치를 알고 찾을 수 있게 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>2) 성경의 전체적인 흐름을 이해하고 다른 사람에게 말할 수 있게 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>3) 매일 성경의 일정한 본문을 읽는다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>4) 매일 주어진 본문을 가지고 묵상하고 삶에 적용할 수 있게 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>5) 기도가 무엇인지 알게 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>6) 스스로 일정한 시간에 정해서 기도할 수 있도록 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>7) 대표기도문을 스스로 준비해서 기도할 수 있도록 한다.</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>8) 하나님이 자신을 부르신 목적과 뜻을 이해하고 하나님의 비전을 받아 삶 속에서 하나님의 뜻을 선택하여 하나님의 기쁨이 되는 사람이 되도록 한다.</span>
                    <br></br>
                    </div>
                </div>

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

export default NG3_1;