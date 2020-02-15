import React, {Component} from 'react';
import style from './Welcome4.module.css';
import Welcome4_1 from './details/Welcome4_1';
import {Link} from 'react-router-dom';

class Welcome4 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const page = window.location.pathname.split('/')[3];

        let content;
        if(page == '1'){
            content = <Welcome4_1 props='1'></Welcome4_1>
        }
        else if(page == '2'){
            content = <Welcome4_1 props='2'></Welcome4_1>
        }
        else if(page == '3'){
            content = <Welcome4_1 props='3'></Welcome4_1>
        }

        const elements = ['담임목사', '교역자', '장로'];

        return(
            <div style={{width: '100%', float: 'left'}}>

               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>섬기는분들</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 섬기는분들</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <div style={{width: "100%", float:'left', marginBottom: '50px'}}>
                    {elements.map((value, index) => {
                        return (
                            <div>
                                {page == String(index+1) ? 
                                <Link to ={`/welcome/4/${index+1}`} className={style.link}><span className={style.smallbox} style={{backgroundColor: '#005bab'}}>{value}</span></Link>
                            : <Link to ={`/welcome/4/${index+1}`} className={style.link}><span className={style.smallbox}>{value}</span></Link>
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

export default Welcome4;