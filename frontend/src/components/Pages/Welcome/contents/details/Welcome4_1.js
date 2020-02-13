import React, {Component} from 'react';
import style from './Welcome4_1.module.css';
import temp from '../../../../../images/temp.jpg'
import person1 from '../../../../../images/person1_re.png'
import person2 from '../../../../../images/person2.jpg'
import person3 from '../../../../../images/person3_re.png'

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
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>담임목사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={person1} style={{width: '100%', objectFit: 'fill'}}></img>
                        <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김인아 목사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>
            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>부목사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={person2} style={{width: '100%', objectFit: 'fill'}}></img>
                        <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이태규 목사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>박재현 목사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>협동목사</span>
                </div>
                <div className={style.box2}>
                <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>박찬백 목사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>찬양준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>전도사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={person3} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이기영 전도사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김선애 전도사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김양애 전도사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>

            </div>
        }
        else if(page == '3'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>시무장로</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김홍구 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김무령 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>전병철 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>홍만기 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>은퇴장로</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>류전규 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>김세하 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>황분옥 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>명예장로</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>조국정 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>장준영 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                    <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이방훈 장로</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
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