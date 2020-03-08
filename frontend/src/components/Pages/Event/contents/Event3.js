import React, {Component} from 'react';
import style from './Event3.module.css';
import christmas1 from '../../../../images/christmas1.JPG'
import christmas2 from '../../../../images/christmas2.JPG'
import christmas3 from '../../../../images/christmas3.JPG'
import christmas4 from '../../../../images/christmas4.JPG'

class Event3 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>성탄절 발표</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 성탄절 발표</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회 행사 >&nbsp;</p>
               </div>


               <img src={christmas1} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={christmas2} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '10px'}}></img>
               <img src={christmas3} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>
               <img src={christmas4} style={{width:'40%', float: 'left', marginLeft: '5%', marginRight: '5%', marginBottom: '30px'}}></img>

               <div style={{width:'100%', float: 'left', marginBottom: '30px'}}>
                    <div style={{width: '100%', float: 'left', paddingBottom: '20px', borderBottom: '0.1px solid #DCDCDC', marginBottom: '20px'}}>
                        <span className={style.textb2} style={{fontSize: '30px', color: '#005bab'}}>성탄절 발표는</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>구하리 교회는 다음세대를 키우는 교회입니다. 그래서 1년 동안 교회학교에서 열심히 신앙을 교육하고 훈련합니다. 다음세대들이 예배와 말씀과 기도와 은혜 안에서 잘 자라서 하나님의 나라의 귀한 일꾼이 되고 이 나라와 사회와 가정에서 아름다운 하나님의 사람들로 자랄 수 있도록 노력하고 있습니다.</span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>이렇게 일 년 동안 교회에서 자란 자녀들이 아기 예수님이 태어나신 성탄절에 예수님의 탄생을 축하며 교회학교 부서에서 발표회를 준비하여 발표 하게 됩니다. 이러한 발표를 통하여 하나님께 영광 돌리고 성도들의 기도를 받으며 다음세대의 꿈나무들이 성장하고 있습니다.</span>
                        
                    </div>
                </div>
            </div>
        )
    };

}

export default Event3;