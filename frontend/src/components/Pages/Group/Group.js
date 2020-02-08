import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Group1 from './contents/Group1';
import Group2 from './contents/Group2';
import Group3 from './contents/Group3';
import Group4 from './contents/Group4';
import Group5 from './contents/Group5';
import Background from '../../../images/image1.jpg';
import style from './Group.module.css';

class Group extends Component{

    constructor(props){
        super(props);
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
        
        const elements = ['남선교회', '여전도회', '3040모임', '새가족공부', '제자훈련'];


        return(
            <div>
                <div className={style.wrapper} style={{height: '130px'}}>a</div>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <img src={Background} style={{marginTop: '10px', marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'full'}}></img>

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