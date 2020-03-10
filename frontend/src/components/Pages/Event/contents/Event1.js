import React, {Component} from 'react';
import style from './Event1.module.css';
import image1 from '../../../../images/event_1_1.JPG'
import image2 from '../../../../images/image7.JPG'
import image3 from '../../../../images/image8.JPG'
import image4 from '../../../../images/event_1_2.JPG'
import image5 from '../../../../images/event_1_3.jpg'


class Event1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>임직식</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 임직식</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회 행사 >&nbsp;</p>
               </div>

               <img src={image1} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={image2} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={image3} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>
               <img src={image4} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>

               <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>임직식은</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}> 
                        할렐루야 구하리 교회를 개척하게 하시고 세우시며 지금까지 인도하신 하나님의 사랑과 은혜에 감사를 드립니다. 
                        구하리 교회가 창립 5주년을 맞이하여 처음으로 하나님의 일꾼을 세우게 되었습니다.
                        </span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>그 동안 수고하시고 헌신하신 모든 분들을 하나님의 일꾼으로 세우는 계기가 되었으면 좋겠으나 일정한 절차에 의해서 선출된 장로, 안수집사, 권사를 직분자 교육과 훈련을 통하여 하나님의 귀한 직분을 감당할 사람들을 세우게 되었습니다.</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>
                        구하리 교회 온 성도님들과 직분 맞은 분들은 하나님이 주신 귀한 직분을 충성되고 지혜롭게 감당하여 주님의 몸 된 교회를 세우고 성도들의 덕이 되며 지역사회에 귀함이 되며 하나님께 영광 돌리는 복된 분들이 다 되시기를 부탁드립니다. </span>
                        
                    </div>
                </div>
            </div>
        )
    };

}

export default Event1;