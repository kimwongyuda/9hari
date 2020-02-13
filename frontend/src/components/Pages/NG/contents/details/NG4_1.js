import React, {Component} from 'react';
import style from './NG4_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class NG4_1 extends Component{

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
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>청년부 소개</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '10px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>모임 시간</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>오후 12:30</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>담당자</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>박재현 목사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>모임 장소</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>새가족실</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>회장</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>전성이</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>청년부</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>담당 교역자</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>박재현 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김홍구 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>간사</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>전성이</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>1) 하나님을 알게 한다.</span>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>2) 하나님이 주신 복을 깨닫게 한다.</span>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>3) 하나님을 사랑함으로 하나님과 동행하는 삶을 살도록 한다.</span>
                    </div>
                    <div style={{width: '100%', float: 'left'}}>
                        <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>청년부 목표</span>
                        <br></br>
                        <br></br>
                        <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                            <span className={style.text2} style={{fontSize: '25px', color: 'rgb(80, 80, 80)'}}>1) 신앙 세우기</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>1) 설교 중심으로 은혜 받은 말씀을 다시 모임을 통해 기억하고 삶에 적용하게 한다.</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>2) 하나님의 말씀을 체계 있게 배울 수 있게 한다.</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>3) 큐티 세미나를 열어서 삶 속에서 하나님의 말씀을 계속 공급받을 수 있게 한다.</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>4) 매 주 모임을 마칠 때 구체적인 기도제목을 정해서 함께 기도하고 기도제목을 서로 나누며 응원한다.</span>
                        </div>
                        <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                            <span className={style.text2} style={{fontSize: '25px', color: 'rgb(80, 80, 80)'}}>2) 예배 세우기</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>1) 찬양팀 </span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>음악에 은사를 가지고 있는 청년들을 선별하여 교육 및 연습을 통해 청년 예배시 찬양으로 섬길 수 있게 한다.</span>
                            <br></br>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>2) 에배팀</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>예배시 안내, 기도, 광고, 2부 특별활동을 섬길 수 있는 청년들을 선별해서 교육과정을 거쳐 예배시 적절한 요소에 배치하여 청년부를 섬길 수 있도록 한다.</span>
                        </div>
                        <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                            <span className={style.text2} style={{fontSize: '25px', color: 'rgb(80, 80, 80)'}}>3) 모임 세우기</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>1) 평일 모임 </span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>청년 일터 및 교회에서 멀리 거주하는 지역에 찾아가 함께 모여 식사하며 말씀을 나누고 기도한다.</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>대중적인 찬양팀 집회에 함께 참석하여 예배하고 교제한다.</span>
                            <br></br>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>2) 다양한 모임</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>예배 후 운동, 영화감상, 독서토론, 나들이 등을 통하여 교제를 풍성하고 활발하게 한다.</span>
                        </div>
                        <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                            <span className={style.text2} style={{fontSize: '25px', color: 'rgb(80, 80, 80)'}}>4) 전도</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>1) 전도에 필요한 성경말씀, 전달방법, 복음제시, 중보기도 등의 교육을 실행한다.</span>
                            <br></br>
                            <span className={style.text2} style={{fontSize: '20px'}}>2) 각 연령, 관심분야 등을 고려하여 세대에 맞는 전도를 계획하고 실행한다.</span>
                        </div>
                    </div>
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

export default NG4_1;