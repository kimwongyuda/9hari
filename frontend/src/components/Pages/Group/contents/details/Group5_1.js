import React, {Component} from 'react';
import style from './Group5_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class Group5_1 extends Component{

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
                    <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>찬양대 소개</span>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>할렐루야 찬양대</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>대장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김홍구 장로</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>총무</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김병율 집사</td>
                                </tr>                                
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>지휘</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>정하진</td>
                                </tr>                                
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>반주</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이은영/오성빈</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>주일 2부 예배 찬양단</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='7'>구성원</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>박찬백 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이은영</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>오성빈</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>신애자</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>최광혁</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>정하진</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김지수</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>금요 철야 예배 찬양단</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='7'>구성원</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>박찬백 목사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>신애자</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>최혜숙</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>조완숙</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김재덕</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>김민수</td>
                                </tr>
                        </tbody>
                </table>
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

export default Group5_1;