import React, {Component} from 'react';
import style from './Welcome4.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '22px', float: 'left'}}>찾아오시는 길</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right', color: 'blue'}}> 찾아오시는 길</p>
                   <p className={style.text2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               <ButtonGroup style={{width: "95%", marginLeft: "2.5%"}} variant="contained" color="primary">
                    <Button style={{width: "50%", background: '#6495ED', height: '40px'}}><Link to="/welcome/4/1" className={style.link} style={{width: '100%'}}>교회 위치</Link></Button>
                    <Button style={{width: "50%", background: '#6495ED', height: '40px'}}><Link to="/welcome/4/2" className={style.link} style={{width: '100%'}}>주차 안내</Link></Button>
                </ButtonGroup>
                {content}

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#6495ED'}}>자가차량 이용 시</span>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#6495ED'}}>지하철 이용 시</span>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#6495ED'}}>버스 이용 시</span>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '30px', color: '#6495ED'}}>주차 및 주차 장소 안내</span>
                </div>

            </div>
        )
    };

}

export default Welcome4;