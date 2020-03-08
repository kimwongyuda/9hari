import React, {Component} from 'react';
import style from './Event2.module.css';
import image1 from '../../../../images/event_2_1.JPG'
import image2 from '../../../../images/event_2_2.jpeg'
import image4 from '../../../../images/event_2_4.jpeg'
import image5 from '../../../../images/event_2_5.jpeg'

class Event2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>전교인 수련회</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 전교인 수련회</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회 행사 >&nbsp;</p>
               </div>

               <img src={image5} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={image2} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={image1} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>
               <img src={image4} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>

               <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>전교인 수련회는</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>성도들이 신앙의 성장과 성숙을 위한 집중적인 훈련을 위하여 교회학교에서는 여름 성경학교내지는 여름 수련회, 동계 수련회를 하게 되고 전교인들은 여름 수련회를 하게 됩니다.</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>구하리 교회는 이러한 영적인 훈련과 성장과 성숙을 위하여 개척초기부터 교회학교는 여름성경학교와 전교인 여름 수련회를 하게 되었습니다. 이를 통하여 받은 은혜를 감사하며 새로 받은 은혜를 가지고 더욱더 열심히 신앙 생활하는 계기를 갖게 되었습니다.</span>
                        
                    </div>
                </div>

            </div>
        )
    };

}

export default Event2;