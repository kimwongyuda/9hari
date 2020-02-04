import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sermon from './Sermon.js';

class Pagination extends Component{

    constructor(props){
        super(props);
        this.state={isshow: false, posts: ''};
        this.change_false = this.change_false.bind(this);
        this.change_true = this.change_true.bind(this);
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({posts: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/posts');
        const body = await response.json();
        return body;
    }

    change_false(){
        this.setState({isshow: false});
    }

    change_true(){
        this.setState({isshow: true});
    }

    render(){

        var page = window.location.pathname.split('/')[3];
        console.log(page);

        var flag = this.state.isshow;
        console.log(this.state);

        return(
            <div style={{width: '100%', float: 'left'}}>

                {(()=>{
                    
                    if(flag)
                    {
                    return <div>
                        <Sermon></Sermon>
                        <Link to="/worship/4/1" onClick={this.change_false}>목록으로</Link>
                        </div>
                    } 
                })()}

                <div>
                    <Link to="/worship/4/1/1" onClick={this.change_true}>1번글</Link>
                    <br></br>
                    <Link to="/worship/4/1">1</Link>
                    <Link to="/worship/4/2">2</Link>
                </div>
            </div>
        )
    };

}

export default Pagination;