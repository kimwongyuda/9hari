import React, {Component} from 'react';
import style from './NG2_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class NG2_1 extends Component{

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
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>초등부 소개</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '30px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>예배 시간</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>오전 11:00</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>설교자</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>김양애 전도사</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>예배 장소</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>본관 3층</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} rowSpan='1'>예배 대상</td>
                                        <td className={style.td+' '+style.text} style={{width: '75%'}}>초등 2-6학년</td>
                                    </tr>
                            </tbody>
                    </table>

                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>초등부</span>
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
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>김양애 전도사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>나애리 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='4'>교사</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이은화 권사</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이희영 권사</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>고지연 집사</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이재연 청년</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>2020년 주제</span>
                        <br></br>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>“예수님을 닮아 가며 열매 맺는 자”</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>교육 목적</span>
                        <br></br>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>예수님을 닮아 가는 초등부</span>
                        <br></br>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>하나님의 은혜를 깨달아 자라고 예수님과 함께 삶 가운데 열매 맺는 초등부</span>
                    </div>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>교육 목표</span>
                        <br></br>
                        <br></br>
                        <span className={style.text2} style={{fontSize: '20px'}}>구하리 교회 초등부는 성경을 통해 하나님 사랑과 예수님 사랑을 알아가며 믿음으로 순종하며 예배드리는 자 전도하는 자로 성장할 수 있도록 힘쓰고 있습니다. </span>
                    <br></br>
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

export default NG2_1;