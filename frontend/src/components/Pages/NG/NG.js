import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NG1 from './contents/NG1';
import NG2 from './contents/NG2';
import NG3 from './contents/NG3';
import NG4 from './contents/NG4';
import background1 from '../../../images/background1.jpg';
import style from './NG.module.css';

class NG extends Component{

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
            page = <NG1></NG1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <NG2></NG2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <NG3></NG3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <NG4></NG4>;
        }
        
        const elements = ['유치유년부', '초등부', '중고등부', '청년부'];
        const cookiename = document.cookie.substr(5);
        const auth = this.state.auth;


        return(
            
            <div>
                <div className={style.wrapper+' '+style.blankbox} style={{height: '120px'}}>a</div>
                <div className={style.wrapper}>
                    <img src={background1} style={{marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>

                    <div className={style.content}>
                        
                        <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                            <span className={style.smallbox0}>다음 세대</span>
                            {elements.map((value, index) => {
                            return (
                                <div>
                                    {
                                    (() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/ng/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/ng/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/ng/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/ng/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                        }
                                    })()}
                                </div>
                            );
                            })}
                            {
                                (()=>{
                                    if(auth == "admin" || auth == "교역자" || auth == "수정가능" || auth == "일반")
                                    {
                                        return <Link to ={`/upload_Board/1`} className={style.link2}><span className={style.smallbox}>
                                                게시물 올리기</span></Link>
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

export default NG;