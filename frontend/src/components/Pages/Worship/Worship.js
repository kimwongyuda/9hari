import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Worship1 from './contents/Worship1';
import Worship2 from './contents/Worship2';
import Worship3 from './contents/Worship3';
import Worship4 from './contents/Worship4';
import background1 from '../../../images/background1.jpg';
import style from './Worship.module.css';

class Worship extends Component{

    constructor(props){
        super(props);
        this.state = {auth: ''}
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({auth: res.authority}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/auth`);
        const body = await response.json();
        return body;
    }
    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Worship1></Worship1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Worship2></Worship2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <Worship3></Worship3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <Worship4></Worship4>;
        }
        
        const elements = ['주일 예배', '수요 예배', '금요 예배', '특별 예배'];

        const cookiename = document.cookie.substr(5);
        const auth = this.state.auth;

        return(
            <div>
                <div className={style.wrapper+' '+style.blankbox} style={{height: '120px'}}>a</div>
                <div className={style.wrapper}>
                    <img src={background1} style={{marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>
                    
                    <div className={style.content}>
                        
                        <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                            <span className={style.smallbox0}>예배와 말씀</span>
                            {elements.map((value, index) => {
                            return (
                                <div>
                                    {
                                    (() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/worship/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/worship/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/worship/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/worship/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                        }
                                    })()}
                                </div>
                            );
                            })}
                            {
                                (()=>{
                                    if(auth == "admin" || auth == "교역자" || auth == "수정가능")
                                    {
                                        return <Link to ={`/upload_sermon/1`} className={style.link2}><span className={style.smallbox}>
                                                설교 올리기</span></Link>
                                    }
                                })()
                            }
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

export default Worship;