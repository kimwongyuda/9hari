import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Welcome1 from './contents/Welcome1';
import Welcome2 from './contents/Welcome2';
import Welcome3 from './contents/Welcome3';
import Welcome4 from './contents/Welcome4';
import Welcome5 from './contents/Welcome5';
import Welcome6 from './contents/Welcome6';
import Background from '../../../images/image1.jpg';
import style from './Welcome.module.css';

class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Welcome1></Welcome1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Welcome2></Welcome2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <Welcome3></Welcome3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <Welcome4></Welcome4>;
        }
        else if(this.props.match.params.page == "5"){
            page = <Welcome5></Welcome5>;
        }
        else if(this.props.match.params.page == "6"){
            page = <Welcome6></Welcome6>;
        }
        
        const elements = ['담임목사환영사', '연혁', '목회철학', '섬기는분들', '예배 안내', '찾아오시는 길'];


        return(
            <div>
                <div className={style.wrapper} style={{height: '130px'}}>a</div>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'full'}}></img>

                        <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                            <span className={style.smallbox0}>교회 소개</span>
                            {elements.map((value, index) => {
                            return (
                                <div>
                                    {
                                    (() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(String(index+1) == '4' || String(index+1) == '6')
                                            {
                                                return <Link to ={`/welcome/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/welcome/${index+1}`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(String(index+1) == '4' || String(index+1) == '6')
                                            {
                                                return <Link to ={`/welcome/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/welcome/${index+1}`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                        }
                                    })()}
                                </div>
                            );
                            })}
                        </div>

                        <div style={{width: '80%', float: 'left'}}>
                            <div style={{marginTop: '10px'}}>
                                {page}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Welcome;