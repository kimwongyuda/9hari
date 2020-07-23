import React, {Component} from 'react';
import style from './Group3.module.css';
import Group3_1 from './details/Group3_1';
import {Link} from 'react-router-dom';

class Group3 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const page = window.location.pathname.split('/')[3];

        let content;
        if(page == '1'){
            content = <Group3_1 props='1'></Group3_1>
        }
        else if(page == '2'){
            content = <Group3_1 props='2'></Group3_1>
        }

        const elements = ['3040 선교회 소개', '3040 선교회 게시판'];

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>3040 선교회</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 3040 선교회</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 부서 및 모임 >&nbsp;</p>
               </div>

               <div style={{width: "100%", float:'left', marginBottom: '30px'}}>
                    {elements.map((value, index) => {
                        return (
                            <div>
                                {page == String(index+1) ? 
                                <Link to ={`/Group/3/${index+1}`} className={style.link}><span className={style.smallbox} style={{backgroundColor: '#005bab'}}>{value}</span></Link>
                            : <Link to ={`/Group/3/${index+1}/1`} className={style.link}><span className={style.smallbox}>{value}</span></Link>
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

export default Group3;