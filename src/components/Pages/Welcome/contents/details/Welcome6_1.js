import React, {Component} from 'react';
import style from './Welcome6_1.module.css';

class Welcome6_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page = this.props.props;
        let content;
        if(page == '1'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>자가차량 이용시</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='3'>서울에서 올때</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text2} rowSpan='3'>수원에서 올때</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                        </tbody>
                </table>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>버스 이용시</span>
                </div>
                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2}>구성역</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>     
                                <tr> 
                                    <td className={style.td+' '+style.text2}>죽전역</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>26-1번</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.text2}>오리역</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>                  
                                <tr> 
                                    <td className={style.td+' '+style.text2}>미금역</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>   
                                <tr> 
                                    <td className={style.td+' '+style.text2}>구성역</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>                               
                        </tbody>
                </table>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>지하철 이용시</span>
                </div>
                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2}>분당선</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>구성역, 죽전역, 오리역, 미금역 하차 후 버스 이용</td>
                                </tr>                                   
                        </tbody>
                </table>

            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>주차 및 장소 안내</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.text2} rowSpan='3'>주차 안내</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>주차 공간이 많지 않아 선착순</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text2} rowSpan='3'>장소 안내</td>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>교회 뒷편과 건너편</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.text} style={{width: '75%'}}>1부</td>
                                </tr>
                        </tbody>
                </table>
            </div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Welcome6_1;