import React, {Component} from 'react';
import style from './Welcome1.module.css';
import image1 from '../../../../images/welcome1_1.JPG'
import image2 from '../../../../images/welcome1_2.JPG'

class Welcome1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>담임목사환영사</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 담임목사환영사</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <div style={{width:'100%', float: 'left', marginBottom: '30px', borderBottom: '0.1px solid #DCDCDC'}}>
                    <img src={image2} style={{width: '40%', float:'left', marginBottom: '30px', marginLeft: '5%', marginRight: '5%'}}></img>
                    <div style={{width: '50%', float: 'left', paddingBottom: '20px', marginBottom: '20px'}}>
                        <span className={style.textb} style={{fontSize: '20px', lineHeight: '2', display: 'inline-block'}}>
                            어느 해인가 3월 2일로 기억합니다.
                            <br></br>
                            <br></br>
                            남편과 함께 차를 타고 가는데 차창 밖을 바라보던
                            <br></br>
                            나의 눈에 어느새 눈물이 하염없이 흐르고 있었습니다.
                            <br></br>
                            <br></br>
                            하루 전 일이 기억났기 때문입니다.
                            <br></br>
                            지하철에서 내려 길을 걷는데 
                            <br></br>
                            노란색 프리지아 꽃이 나의 눈에 들어왔습니다.
                            <br></br>
                            <br></br>
                            이 꽃을 보는 순간 아! 벌써 내 아들이 
                            <br></br>
                            하늘나라에 간 계절이구나 하고 깨달았습니다.
                            <br></br>
                            너무나 바쁘게 살아서 날짜 가는 줄 모르다가도 
                            <br></br>
                            프리지아 꽃만 보면 기억나는 일입니다.
                            <br></br>
                            <br></br>
                            아들이 하늘나라에 간 날 아들 앞에 
                            <br></br>
                            그 꽃을 놓고 얼마나 몸부림치며 울었는지 모릅니다.
                            <br></br>
                            사랑하는 아들의 죽음으로 영혼의 세계를 깨닫고 
                            <br></br>
                            아들의 무덤 앞에서 나의 교만과 어리석음 
                            <br></br>
                            그동안 잘못 살아왔던 삶의 모습을 돌이키며 
                            <br></br>
                            이 엄마도 열심히 신앙생활 잘해서 
                            <br></br>
                            이 다음 천국에서 만나자고 했습니다.
                            <br></br>
                            <br></br>
                            지금 생각해 보면 나의 아들은 나를 위해서 순교했습니다.
                            <br></br>
                            그 뒤로 지금까지 오직 주님 안에서 오직 하나님 
                            <br></br>
                            말씀 붙들고 기도하면서 살려고 몸부림 쳤습니다.
                            <br></br>
                            우리 아들이 나를 위해 순교했던 것처럼 
                            <br></br>
                            나도 다른 사람을 위해서 그렇게 살겠다고 다짐했습니다.
                            <br></br>
                            <br></br>
                            왜냐하면 예수님 만나는 삶이 
                            <br></br>
                            이 세상에서 가장 복되고 가치 있고 소중하고 
                            <br></br>
                            존귀하고 아름답다는 사실을 깨달았기 때문입니다.
                            <br></br>
                            그러기에 나 혼자만 그러한 삶을 살아갈 수 없습니다.
                            <br></br>
                            <br></br>
                            하나님께서 나에게 구하리 교회를 사역하도록 
                            <br></br>
                            허락하신 것은 많은 생명들에게 이런 소중한 삶을 
                            <br></br>
                            살아가도록 복음을 증거 하라고 하신 것입니다.
                            <br></br>
                            <br></br>
                            2020년도 교회 표어는 말씀 안에서 새로워지는 교회입니다.
                            <br></br>
                            모든 성도들이 말씀 안에서 새로워져야 합니다. 
                            <br></br>
                            <br></br>
                            우리 다음 세대들이 말씀 안에서 새로워져야 합니다.
                            <br></br>
                            말씀이 아니고는 나 자신을 변화 시킬 수 없기 때문입니다
                            <br></br>
                            다른 그 무엇으로도 변화 할 수 없기 때문입니다
                            <br></br>
                            말씀으로 나를 이기고 세상을 이길 수 있기 때문입니다.
                        </span>
                        <br></br>
                        <br></br>
                        <span className={style.textb2} style={{fontSize: '20px'}}>구하리교회 담임목사 김인아</span>
                    </div>
                </div>

            </div>
        )
    };

}

export default Welcome1;