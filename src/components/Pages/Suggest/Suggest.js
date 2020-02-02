import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Suggest1 from './contents/Suggest1';
import Background from '../../../images/image1.jpg';
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

        const elements = ['자유 게시판'];

        return(
            <div className={style.content}>
                <div className={style.wrapper} style={{height: '130px'}}>a</div>
                <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'full'}}></img>
                
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
        )
    };

}

export default Suggest;