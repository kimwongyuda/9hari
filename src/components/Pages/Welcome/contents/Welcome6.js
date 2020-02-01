import React, {Component} from 'react';
import style from './Welcome6.module.css';
import Welcome6_1 from './details/Welcome6_1';
import {Link} from 'react-router-dom';

class Welcome6 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const page = window.location.pathname.split('/')[3];

        let content;
        if(page == '1'){
            content = <Welcome6_1 props='1'></Welcome6_1>
        }
        else if(page == '2'){
            content = <Welcome6_1 props='2'></Welcome6_1>
        }

        const elements = ['교회 위치', '주차 안내'];

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>찾아오시는 길</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 찾아오시는 길</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

                <div style={{width: "100%", float:'left', marginBottom: '50px'}}>
                    {elements.map((value, index) => {
                        return (
                            <div>
                                {page == String(index+1) ? 
                                <Link to ={`/welcome/6/${index+1}`} className={style.link}><span className={style.smallbox} style={{backgroundColor: '#005bab'}}>{value}</span></Link>
                            : <Link to ={`/welcome/6/${index+1}`} className={style.link}><span className={style.smallbox}>{value}</span></Link>
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

export default Welcome6;