import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Group1 from './contents/Group1';
import Group2 from './contents/Group2';
import Group3 from './contents/Group3';
import Group4 from './contents/Group4';
import Group5 from './contents/Group5';
import background1 from '../../../images/background1.jpg';
import style from './Group.module.css';

class Group extends Component{

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
            page = <Group1></Group1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Group2></Group2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <Group3></Group3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <Group4></Group4>;
        }
        else if(this.props.match.params.page == "5"){
            page = <Group5></Group5>;
        }
        
        const elements = ['남선교회', '여전도회', '3040 선교회', '새가족 공부', '찬양대'];

        const auth = this.state.auth;

        return(
            <div>
                <div className={style.wrapper+ ' '+style.blankbox} style={{height: '120px'}}>a</div>
                <div className={style.wrapper}>
                    <img src={background1} style={{ marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>
                    
                    <div className={style.content}>
                        
                        <div style={{width: '20%', float: 'left', paddingRight: '5px'}}>
                            <span className={style.smallbox0}>부서 및 모임</span>
                            {elements.map((value, index) => {
                            return (
                                <div>
                                    {
                                    (() => {
                                        if(this.props.match.params.page == String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/group/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/group/${index+1}/1`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#666666', color: 'white'}}>
                                                {value}</span></Link>
                                            }
                                        }
                                        else if(this.props.match.params.page != String(index+1))
                                        {
                                            if(false)
                                            {
                                                return <Link to ={`/group/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
                                                {value}</span></Link>
                                            }
                                            else
                                            {
                                                return <Link to ={`/group/${index+1}/1`} className={style.link2}><span className={style.smallbox}>
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

export default Group;