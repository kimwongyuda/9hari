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
        console.log(props);
        this.state= {data: this.props.props.data, res: []};
        this.download_ = this.download_.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.props.data !== this.props.props.data) {
          this.setState({data: this.props.props.data});
          console.log(this.state.a);

        }
        

        if(this.state.res.length == 0 || this.state.data.pid != this.state.res[0].posts_id)
        {
            this.callApi()
            .then(res => this.setState({res: res.json}))
            .catch(err => console.log(err));
        }
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({res: res.json}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        console.log(this.state.data.pid);
        const response = await fetch(`/api/attachments/${this.state.data.pid}`);
        const body = await response.json();
        
        return body;
    }

    download_(path){
        setTimeout(() => {
            const response = {
              file: `http://localhost:5000/${path.replace('uploads/', '')}`,
            };
            // server sent the url to the file!
            // now, let's download:
            window.open(response.file, 'Download');
            // you could also do:
            //window.location.assign(response.file);
          }, 100);

    }

    render(){

        this.state.data.title = this.state.data.title.replace(/(\r\n|\n|\r)/gm, "\n");
        this.state.data.content = this.state.data.content.replace(/(\r\n|\n|\r)/gm, "\n");
        

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

                    {
                        this.state.res.map((item)=>{
                            
                            return item.path.includes('.png') || item.path.includes('.jpg') || item.path.includes('.jpeg') ?
                            <img src={`http://localhost:5000/${item.path.replace('uploads/', '')}`} style={{marginTop: '10px',width: '60%', float: 'left', objectFit: 'cover'}}></img>
                            : <div></div>
                        })
                    }

                    

                    <span className={style.smallbox3+' '+ style.textb} style={{marginTop: '10px', width:'100%', textAlign: 'left', paddingLeft: '10px', paddingRight: '10px', borderTop: '0.1px solid #005bab', borderBottom: '0.1px solid #005bab', borderLeft: '0.1px solid #005bab', borderRight: '0.1px solid #005bab'}}>
                        파일 다운로드<br></br><strong style={{fontSize: '12px'}}>이미지와 pdf는 새로운 창이 열린 뒤 수작업으로 저장해야 합니다.</strong></span>
                    {
                        this.state.res.map((item)=>{
                            
                            return item.path.replace('uploads/', '') != 'temp.pdf' ?
                            <Link className={style.smallbox3+' '+ style.textb}
                            // herf={`http://localhost:5000/${item.path.replace('uploads/', '')}`}
                            style={{width:'100%', textAlign: 'left', paddingLeft: '10px', borderBottom: '0.1px solid #005bab', borderLeft: '0.1px solid #005bab', borderRight: '0.1px solid #005bab', paddingTop: '10px', paddingBottom: '10px'}}
                            onClick={() => this.download_(item.path)}
                            // target="_blank"
                            // download={`${item.path.replace('uploads/', '')}`}
                            >
                            {item.path.replace('uploads/', '')}</Link>
                            : <div></div>
                        })
                    }

                    
                </div>
            </div>
        )
    };

}

export default Attachments;