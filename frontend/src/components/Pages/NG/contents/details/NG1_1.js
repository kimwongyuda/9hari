import React, {Component} from 'react';
import style from './NG1_1.module.css';
import image1 from '../../../../../images/NG_main_1.jpg';
import image3 from '../../../../../images/NG_main_13.jpg';

class NG1_1 extends Component{

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
                    <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>유치유년부 소개</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '30px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 시간</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>오전 11:00</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>담당 교역자</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>김선애 전도사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 장소</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>본관 1층</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>예배 대상</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>4살 - 초등 1학년</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>유치유년부</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image3} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>담당 교역자</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김선애 전도사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>오미애 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>교사</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>최봉희</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김수희</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>조재현</td>
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
                        <span className={style.textb2} style={{fontSize: '20px'}}>말씀으로 쑥쑥 자라가요!(엡5:26)</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>교육 목적</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>“1/168 It’s not enough!” 라는 말이 있습니다. 168시간이라는 한 주간의 시간 속에서 1주일에 단 1시간만으로는 자녀들의 신앙이 믿음으로 성장하기에는 너무나 부족합니다.</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>2020년 유치, 유년부에서는 1주일에 한 시간 교회 안에서의 예배뿐만 아니라, 우리 각 가정에서 부모님과 함께 예배드리며 나아갑니다.</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>교회와 가정이 함께 합력해서 아이들이 하나님을 만나고 말씀으로 더욱 자라가며 믿음의 가정으로 세워 나가는데 힘쓰고 있습니다.</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>1) 주일 성수하는 어린이</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>2) 성경 말씀을 암송하는 어린이</span>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>3) 부모님과 함께 가정에서 예배드리는 어린이</span>
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

export default NG1_1;