import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './Attachments.module.css';
import fs from 'fs'
import download from 'js-file-download';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Attachments extends Component{

    constructor(props){
        super(props);
        this.state= {data: this.props.props.data, res: []};
        this.download_ = this.download_.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.props.data !== this.props.props.data) {
          this.setState({data: this.props.props.data});
        }
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({res: res.json}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/attachments/${this.state.data.pid}`);
        const body = await response.json();
        
        return body;
    }

    download_(path){
        const send_param = {
            headers,
            path: path
            };

        axios
        .post('/api/download',send_param)
        //정상 수행
        .then(resp => {
            download(resp.data, path.replace('uploads/',''));
        })
        //에러
        .catch(err => {
        console.log(err);
        });
    }

    render(){

        this.state.data.title = this.state.data.title.replace(/(\r\n|\n|\r)/gm, "\n");
        this.state.data.content = this.state.data.content.replace(/(\r\n|\n|\r)/gm, "\n");
        
        console.log(this.state)
        return(
            <div key={this.state.data} style={{width: '100%', float: 'left'}}>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'50%', textAlign: 'left', borderLeft: '0.1px solid #DCDCDC', paddingLeft: '10px'}}>
                    {this.state.data.title.split("\n").map(function(item) {
                        return <div>{item}<br></br></div>
                    })}  
                    </span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'50%', textAlign: 'right', paddingRight: '10px', borderRight: '0.1px solid #DCDCDC'}}>등록일 {this.state.data.creation_date.substr(0,10)}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'50%', textAlign: 'left', borderLeft: '0.1px solid #DCDCDC', paddingLeft: '10px'}}>{this.state.data.name+' '+this.state.data.rank}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'50%', textAlign: 'right', paddingRight: '10px', borderRight: '0.1px solid #DCDCDC'}}>조회수 {this.state.data.views}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'100%', textAlign: 'center', borderBottom: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', paddingTop: '10px', paddingBottom: '10px'}}>
                    {this.state.data.content.split("\n").map(function(item) {
                        return <div>{item}<br></br></div>
                    })}  
                    </span>


                    <span className={style.smallbox3+' '+ style.textb} style={{marginTop: '100px', width:'100%', textAlign: 'center', paddingRight: '10px', borderTop: '0.1px solid #005bab', borderBottom: '0.1px solid #005bab', borderLeft: '0.1px solid #005bab', borderRight: '0.1px solid #005bab'}}>파일 다운로드</span>
                    {
                        this.state.res.map((item)=>(
                            
                            <Link className={style.smallbox3+' '+ style.textb}
                            style={{width:'100%', textAlign: 'center', borderBottom: '0.1px solid #005bab', borderLeft: '0.1px solid #005bab', borderRight: '0.1px solid #005bab', paddingTop: '10px', paddingBottom: '10px'}}
                            onClick={() => this.download_(item.path)}
                            >
                            {item.path.replace('uploads/', '')}</Link>   
                        ))
                    }

                    
                </div>
            </div>
        )
    };

}

export default Attachments;