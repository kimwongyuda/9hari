import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Suggest1 from './contents/Suggest1';
import Suggest2 from './contents/Suggest2';
import background1 from '../../../images/background1.jpg';
import style from './Suggest.module.css';

class Suggest extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Suggest1></Suggest1>;
        }
        if(this.props.match.params.page == "2"){
            page = <Suggest2></Suggest2>;
        }

        const elements = ['자유 게시판', '구하리 갤러리'];

        return(
            <div>
                
                <div className={style.wrapper+' '+style.blankbox} style={{height: '120px'}}>
                    a
                </div>

                <div className={style.wrapper}>
                <img src={background1} style={{marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>

                <div className={style.content}>
                <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                    
                    <span className={style.smallbox0}>게시판</span>
                        {elements.map((value, index) => {
                            return (
                                <div>
                                    {(() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/suggest/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/suggest/${index+1}`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/suggest/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/suggest/${index+1}`} className={style.link2}><span className={style.smallbox}>
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

export default Suggest;