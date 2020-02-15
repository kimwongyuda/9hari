import React, {Component} from 'react';
import style from './NG4.module.css';
import NG4_1 from './details/NG4_1';
import {Link} from 'react-router-dom';

class NG4 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const page = window.location.pathname.split('/')[3];

        let content;
        if(page == '1'){
            content = <NG4_1 props='1'></NG4_1>
        }
        else if(page == '2'){
            content = <NG4_1 props='2'></NG4_1>
        }

        const elements = ['청년부 소개', '청년부 게시판'];

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>청년부</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 청년부</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 다음 세대 >&nbsp;</p>
               </div>

               <div style={{width: "100%", float:'left', marginBottom: '30px'}}>
                    {elements.map((value, index) => {
                        return (
                            <div>
                                {page == String(index+1) ? 
                                <Link to ={`/NG/4/${index+1}`} className={style.link}><span className={style.smallbox} style={{backgroundColor: '#005bab'}}>{value}</span></Link>
                            : <Link to ={`/NG/4/${index+1}`} className={style.link}><span className={style.smallbox}>{value}</span></Link>
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

export default NG4;