import React, {Component} from 'react';
import style from './Welcome4_1.module.css';
import temp from '../../../../../images/temp.jpg'
import kimina from '../../../../../images/kimina.png'
import person2 from '../../../../../images/person2.jpg'
import leekiyoung from '../../../../../images/leekiyoung.png'
import person4 from '../../../../../images/person4_re.jpg'
import person5 from '../../../../../images/person5_re.jpg'
import person6 from '../../../../../images/person6_re.jpg'
import jangro1 from '../../../../../images/jangro1.PNG'
import jangro2 from '../../../../../images/jangro2.PNG'
import jangro3 from '../../../../../images/jangro3.PNG'
import jangro4 from '../../../../../images/jangro4.PNG'
import jangro5 from '../../../../../images/jangro5.PNG'
import jangro6 from '../../../../../images/jangro6.PNG'
import jangro7 from '../../../../../images/jangro7.PNG'
import jangro8 from '../../../../../images/jangro8.PNG'
import leebanghoon from '../../../../../images/leebanghoon.jpg';
import kimhongu from '../../../../../images/kimhongu.png';
import ryujungyu from '../../../../../images/ryujungyu.jpeg';
import hwangbunok from '../../../../../images/hwangbunok.jpeg';
import kimseha from '../../../../../images/kimseha.jpg';
import parkchanbaek from '../../../../../images/parkchanbaek.PNG';
import junbyung from '../../../../../images/junbyung.jpg';

class Welcome4_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        //299x400 pixel

        let page = this.props.props;
        let content;
        if(page == '1'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>담임목사</span>
                </div>
                <div className={style.box2} style={{borderBottom: '0.1px solid #DCDCDC'}}>
                    <div className={style.card}><img src={kimina} style={{width: '100%', objectFit: 'fill'}}></img>
                        <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김인아 목사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>총괄</span>
                        <br></br>
                        <br></br>
                    </div>

                    <div style={{width:'60%', float: 'left', marginBottom: '30px', marginLeft: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', marginBottom: '20px'}}>
                        <span className={style.textb} style={{fontSize: '20px', lineHeight: '2', display: 'inline-block'}}>
                            저는 3대째 예수 믿는 가정인줄 알았는데 저의집안 어르신들께서 
                            <br></br>
                            제 책을 읽으시고 5대째 신앙이라고 말씀해 주셨습니다.
                            <br></br>
                            그 말씀을 듣고 얼마나 기쁘고 감사 했는지 모릅니다.
                            <br></br>
                            결혼 후 교회에 발을 끊고 불신자와 같은 삶을 살았습니다.
                            <br></br>
                            <br></br>
                            둘째아들을 뇌수종이란 병으로 잃고 예수님을 다시 
                            <br></br>
                            영접하면서 평신도의 삶으로 노량진교회를 섬겼습니다.
                            <br></br>
                            교회에서 열정적인 신앙 생활하는 모습을 보신 노량진 교회 
                            <br></br>
                            강신원 목사님 권유로 신학을 공부하게 되었습니다.
                            <br></br>
                            <br></br>
                            이후 서울 장신대학과 장로회 신학대학원을 졸업하고 장로회 
                            <br></br>
                            신학대학교 목회 전문 대학원에서 목회 상담학 전공을 했습니다.
                            <br></br>
                            <br></br>
                            노량진 교회 평신도 시절부터 전도 왕으로 인정받아 
                            <br></br>
                            전국 각지와 세계로 간증 집회 다닐 정도로 유명했습니다.
                            <br></br>
                            <br></br>
                            과천 교회 전도사와 부목사로 12년 사역을 하면서 
                            <br></br>
                            전국 각지의 전도 팀에게 전도 법을 가르치며 전도 중 
                            <br></br>
                            겪었던 감동적인 간증들을 전하며 전도 열매를 맺게 했습니다.
                            <br></br>
                            <br></br>
                            노량진 교회 부목사로 2년 5개월 사역하면서 부교역자 훈련을 마치고
                            <br></br>
                            2009년 12월에 현재 구하리 교회 부지인 280평을 매입하여 
                            <br></br>
                            480평 성전 건축을 주님과 함께 혼자서 성전 건축을 했습니다.
                            <br></br>
                            2010년 12월 10일에 입당예배를 드리고 
                            <br></br>
                            1명부터 개척하여 오늘에 이르렀습니다.
                            <br></br>
                            <br></br>
                            저서로는
                            <br></br>
                            아줌마 전도 왕 ( 규장 ), 
                            <br></br>
                            아줌마 전도 왕 그리고 ( 베드로 서원 )이 있습니다.
                        </span>
                    </div>
                </div>
                </div>

            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>부목사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={person2} style={{width: '100%', objectFit: 'fill'}}></img>
                        <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이태규 목사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>교구, 행정</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>jesus316@hanmail.net</span>
                    </div>
                    <div className={style.card}><img src={person6} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>박재현 목사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>중고등부, 청년부</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>praise5766@naver.com</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>협동목사</span>
                </div>
                <div className={style.box2}>
                <div className={style.card}><img src={parkchanbaek} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>박찬백 목사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>성인 예배 찬양팀</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>dvd65@naver.com</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>전도사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={leekiyoung} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이기영 전도사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>구하리 학원</span>
                        <br></br>
                        <br></br>
                    </div>
                    <div className={style.card}><img src={person4} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김선애 전도사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>유치유년부</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>good21news@hanmail.net</span>
                    </div>
                    <div className={style.card}><img src={person5} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김양애 전도사</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>초등부</span>
                        <br></br>
                        <span className={style.textb} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>ya3340@hanmail.net</span>
                    </div>
                </div>

            </div>
        }
        else if(page == '3'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>시무장로</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={kimhongu} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김홍구 장로</span>
                        </div>
                    <div className={style.card}><img src={jangro2} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김무령 장로</span>
                        </div>
                    <div className={style.card}><img src={junbyung} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>전병철 장로</span>
                        </div>
                    <div className={style.card}><img src={jangro7} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>홍만기 장로</span>
                        </div>
                </div>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>은퇴장로</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={ryujungyu} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>류전규 장로</span>
                        </div>
                    <div className={style.card}><img src={kimseha} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김세하 장로</span>
                        </div>
                    <div className={style.card}><img src={hwangbunok} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>황분옥 장로</span>
                        </div>
                </div>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>명예장로</span>
                </div>

                <div className={style.box2}>

                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>조국정 장로</span>
                    </div>

                    <div className={style.card}><img src={jangro6} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>장준영 장로</span>
                    </div>

                    <div className={style.card}><img src={leebanghoon} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.textb2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이방훈 장로</span>
                    </div>
                </div>
            </div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Welcome4_1;