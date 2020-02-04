import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sermon from './Sermon.js';

class Pagination extends Component{

    constructor(props){
        super(props);
        this.state={isshow: false};
        this.change = this.change.bind(this);
    }

    change(){
        this.setState({isshow: !this.state.isshow});
    }

    render(){

        var page = window.location.pathname.split('/')[3];
        console.log(page);

        var flag = this.state.isshow;

        return(
            <div style={{width: '100%', float: 'left'}}>

                {(()=>{
                    
                    if(flag)
                    {
                    return <div>
                        <Sermon></Sermon>
                        <Link to="/worship/4/1" onClick={this.change}>목록으로</Link>
                        </div>
                    } 
                })()}

                <div>
                    <Link to="/worship/4/1/1" onClick={this.change}>1번글</Link>
                    <br></br>
                    <Link to="/worship/4/1">1</Link>
                    <Link to="/worship/4/2">2</Link>
                </div>
            </div>
        )
    };

}

export default Pagination;