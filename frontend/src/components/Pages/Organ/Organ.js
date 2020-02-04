import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Organ1 from './contents/Organ1';
import Organ2 from './contents/Organ2';
import Background from '../../../images/image1.jpg';
import style from './Organ.module.css';

class Organ extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Organ1></Organ1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Organ2></Organ2>;
        }

        const elements = ['구하리 학원', '구하리 카페'];


        return(
            <div>
                <div className={style.wrapper} style={{height: '130px'}}>a</div>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'full'}}></img>

                        <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                            <span className={style.smallbox0}>부속 기관</span>
                            {elements.map((value, index) => {
                            return (
                                <div>
                                    {
                                    (() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/organ/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/organ/${index+1}`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/organ/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/organ/${index+1}`} className={style.link2}><span className={style.smallbox}>
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

export default Organ;