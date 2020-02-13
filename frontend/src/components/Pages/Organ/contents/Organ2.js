import React, {Component} from 'react';
import style from './Organ2.module.css';
import Organ2_1 from './details/Organ2_1';
import {Link} from 'react-router-dom';

class Organ2 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const page = window.location.pathname.split('/')[3];

        let content;
        if(page == '1'){
            content = <Organ2_1 props='1'></Organ2_1>
        }
        else if(page == '2'){
            content = <Organ2_1 props='2'></Organ2_1>
        }

        const elements = ['구하리 카페 소개', '구하리 카페 게시판'];
        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>구하리 카페</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 구하리 카페</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 부속 기관 >&nbsp;</p>
               </div>

               <div style={{width: "100%", float:'left', marginBottom: '30px'}}>
                    {elements.map((value, index) => {
                        return (
                            <div>
                                {page == String(index+1) ? 
                                <Link to ={`/Organ/2/${index+1}`} className={style.link}><span className={style.smallbox} style={{backgroundColor: '#005bab'}}>{value}</span></Link>
                            : <Link to ={`/Organ/2/${index+1}`} className={style.link}><span className={style.smallbox}>{value}</span></Link>
                            }
                            </div>
                        );
                    })}
                    
                </div>
                {content}
                
            </div>
        )
    };

}

export default Organ2;