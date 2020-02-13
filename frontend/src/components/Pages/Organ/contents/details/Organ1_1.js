import React, {Component} from 'react';
import style from './Organ1_1.module.css';
import image1 from '../../../../../images/3040_1.jpeg';

class Organ1_1 extends Component{

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
                    <span className={style.text2} style={{fontSize: '30px', color: '#005bab'}}>구하리 학원 소개</span>
                </div>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                <div style={{width: '50%', float: 'left', borderTop: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', borderBottom: '0.1px solid #DCDCDC'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>구하리 학원</span>
                    <div style={{width:'100%', float: 'left', marginTop: '10px',marginBottom: '10px'}}>
                    <img src={image1} style={{width: '92%', objectFit: 'fill', marginRight: '4%', marginLeft: '4%', marginBottom: '10px'}}></img>
                    </div>
                </div>
                <div style={{width: '50%', float: 'left', height: '415px', paddingTop: '40px'}}>
                    <span className={style.text2} style={{marginTop: '10px', textAlign: 'center' ,width: '100%',fontSize: '20px', color: 'black', display: 'inline-block'}}>섬기는 사람들</span>
                    <table className={style.table} style={{width: '90%', marginLeft: '5%', marginTop: '10px'}}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>지도</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>이기영 전도사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>부장</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>나애리 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='1'>회계</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>박혜경 권사</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='2'>교사</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>한규희</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>나애리</td>
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

export default Organ1_1;