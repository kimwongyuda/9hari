import React, {Component} from 'react';
import style from './Welcome1.module.css';
import image1 from '../../../../images/welcome1_1.JPG'
import image2 from '../../../../images/welcome1_2.JPG'

class Welcome7 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>교회 소식</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 교회 소식</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <div style={{width:'100%', float: 'left', marginBottom: '30px', borderBottom: '0.1px solid #DCDCDC'}}>
                <   div className={style.box} style={{borderBottom: '0.1px solid #005bab'}}>
                        <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주보</span>
                    </div>    
                </div>
            </div>
        )
    };

}

export default Welcome7;