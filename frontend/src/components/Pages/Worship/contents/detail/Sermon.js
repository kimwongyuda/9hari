import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './Sermon.module.css';

class Sermon extends Component{

    constructor(props){
        super(props);
        this.state= {data: this.props.props.data};
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if(prevProps.props.data !== this.props.props.data) {
          this.setState({data: this.props.props.data});
        }
    }

    render(){
        
        const videoSrc = `https://www.youtube.com/embed/${this.state.data.youtube_link}`;
        this.state.data.title = this.state.data.title.replace(/(\r\n|\n|\r)/gm, "\n");
        this.state.data.content = this.state.data.content.replace(/(\r\n|\n|\r)/gm, "\n");
        this.state.data.sermon_title = this.state.data.sermon_title.replace(/(\r\n|\n|\r)/gm, "\n");
        this.state.data.sermon_summary = this.state.data.sermon_summary.replace(/(\r\n|\n|\r)/gm, "\n");

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
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'100%', textAlign: 'left', paddingLeft: '10px', borderBottom: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', paddingTop: '10px', paddingBottom: '10px'}}>
                        
                    {this.state.data.content.split("\n").map(function(item) {
                        return <div>{item}<br></br></div>
                    })}  
                    </span>
                </div>

                <iframe frameBorder="0" width="100%" height="500px" src={videoSrc} allowFullScreen="allowfullscreen"></iframe>
                
                <div style={{width: '100%', float: 'left', marginBottom: '30px', marginTop: '30px'}}>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'30%', textAlign: 'left', paddingLeft: '10px', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>설교 제목</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'70%', paddingLeft: '10px', textAlign: 'left', borderRight: '0.1px solid #DCDCDC'}}>
                    {this.state.data.sermon_title.split("\n").map(function(item) {
                        return <div>{item}<br></br></div>
                    })}  
                        </span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'30%', textAlign: 'left', paddingLeft: '10px', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>설교자</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'70%', paddingLeft: '10px', textAlign: 'left', borderRight: '0.1px solid #DCDCDC'}}>{this.state.data.sermon_person}</span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'30%', textAlign: 'left', paddingLeft: '10px', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>설교 말씀</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'70%', paddingLeft: '10px', textAlign: 'left', borderRight: '0.1px solid #DCDCDC'}}>{this.state.data.sermon_words}</span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'30%', textAlign: 'left', paddingLeft: '10px', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>설교 장소</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'70%', paddingLeft: '10px', textAlign: 'left', borderRight: '0.1px solid #DCDCDC'}}>{this.state.data.sermon_place}</span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'30%', textAlign: 'left', paddingLeft: '10px', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>설교 날짜</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'70%', paddingLeft: '10px', textAlign: 'left', borderRight: '0.1px solid #DCDCDC'}}>{this.state.data.sermon_date.substr(0,10)}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'100%', textAlign: 'center', borderBottom: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', paddingTop: '10px', paddingBottom: '10px'}}>
                    {this.state.data.sermon_summary.split("\n").map(function(item) {
                        return <div>{item}<br></br></div>
                    })}  
                    </span>
                </div>     

            </div>
        )
    };

}

export default Sermon;