import React, {Component} from 'react';
import style from './Welcome3.module.css';
import image2 from '../../../../images/welcome1_2.JPG';

class Welcome3 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>목회철학</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 목회철학</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
               <div style={{width:'100%', float: 'left', marginBottom: '30px', borderBottom: '0.1px solid #DCDCDC'}}>
                    <img src={image2} style={{width: '40%', float:'left', marginBottom: '30px', marginLeft: '5%', marginRight: '5%'}}></img>
                    <div style={{width: '50%', float: 'left', paddingBottom: '20px', marginBottom: '20px'}}>

                        <span className={style.textb} style={{marginTop: '20px', fontSize: '20px', lineHeight: '2', display: 'inline-block', borderBottom: '0.1px solid #DCDCDC', paddingBottom: '20px'}}>
                            <strong style={{color:'#005bab'}}>2020년 주제</strong>
                            <br></br>
                            말씀으로 세워지는 교회(느 2:17, 엡 5:26-26)
                        </span>

                        <span className={style.textb} style={{marginTop: '20px', fontSize: '20px', lineHeight: '2', display: 'inline-block', borderBottom: '0.1px solid #DCDCDC', paddingBottom: '20px'}}>
                            <strong style={{color:'#005bab'}}>실천 사항</strong>
                            <br></br>
                            1) 온전한 예배드리기
                            <br></br>
                            2) 전교인 성경 읽기
                            <br></br>
                            3) 전교인 기도에 힘쓰기
                            <br></br>
                            4) 전교인 전도하기
                            <br></br>
                            5) 전교인 서로 사랑으로 섬기기
                            <br></br>
                            6) 전교인 헌신/봉사하기
                        </span>

                        <span className={style.textb} style={{marginTop: '20px', fontSize: '20px', lineHeight: '2', display: 'inline-block'}}>
                            <strong style={{color:'#005bab'}}>교육 목표</strong>
                            <br></br>
                            1) 말씀 안에서 교회 세우기(엡5: 26)
                            <br></br>
                            2) 말씀 안에서 다음세대 세우기(엡5: 27)
                            <br></br>
                            3) 말씀 안에서 신앙 세우기(느2: 17)
                        </span>

                    </div>
                </div>

            
                </div>

            </div>
        )
    };

}

export default Welcome3;