import React, {Component} from 'react';
import style from './Organ2_1.module.css';
import cafe from '../../../../../images/cafe.jpg';
import cafe2 from '../../../../../images/cafe2.jpg';

class Organ2_1 extends Component{

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
                    <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>구하리 카페 소개</span>
                    
                    <table className={style.table} style={{width: '90%', marginLeft: '5%',marginRight: '5%', marginTop: '30px', float:'left'}}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>영업 시간</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>오전 09:00 - 오후 18:00</td>
                                    </tr>
                                    <tr> 
                                        <td className={style.td+' '+style.textb2} rowSpan='1'>연락처</td>
                                        <td className={style.td+' '+style.textb} style={{width: '75%'}}>031-283-5005</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>구하리 카페</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={cafe2} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.textb2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>최혜숙 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>부원</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>이선영 집사</td>
                                </tr>
                        </tbody>
                </table>
                </div>
                </div>

                <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>구하리 카페는</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>구하리 까페는 사랑방과 같은 곳으로 지역의 주민들이 언제든지 오셔서 차를 마시고 이야기를 나누며 서로 교제하고 나누는 장로입니다. 저렴한 가격과 맛있는 다양한 종류의 커피와 차와 음료를 제공함으로 지역의 누구든지 부담 없이 오셔서 대화하고 서로 나눌 수 있는 편안한 사랑방과 같은 곳입니다.</span>
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

export default Organ2_1;