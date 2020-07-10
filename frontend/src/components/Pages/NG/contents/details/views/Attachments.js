import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './Attachments.module.css';

class Attachments extends Component{

    constructor(props){
        super(props);
        this.state= {data: this.props.props.data, res: []};
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if(prevProps.props.data !== this.props.props.data) {
          this.setState({data: this.props.props.data});
        }
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({res: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/attachments/${this.state.data.pid}`);
        const body = await response.json();
        console.log(body)
        return body;
    }


    render(){
        console.log(this.state);
        

        return(
            <div key={this.state.data} style={{width: '100%', float: 'left'}}>

                <div style={{width: '100%', float: 'left', marginBottom: '30px'}}>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'50%', textAlign: 'left', borderLeft: '0.1px solid #DCDCDC', paddingLeft: '10px'}}>{this.state.data.title}</span>
                    <span className={style.smallbox3+' '+ style.textb2} style={{width:'50%', textAlign: 'right', paddingRight: '10px', borderRight: '0.1px solid #DCDCDC'}}>등록일 {this.state.data.creation_date.substr(0,10)}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'50%', textAlign: 'left', borderLeft: '0.1px solid #DCDCDC', paddingLeft: '10px'}}>{this.state.data.name+' '+this.state.data.rank}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'50%', textAlign: 'right', paddingRight: '10px', borderRight: '0.1px solid #DCDCDC'}}>조회수 {this.state.data.views}</span>
                    <span className={style.smallbox3+' '+ style.textb} style={{width:'100%', textAlign: 'center', borderBottom: '0.1px solid #DCDCDC', borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC', paddingTop: '10px', paddingBottom: '10px'}}>{this.state.data.content}</span>
                </div>
            </div>
        )
    };

}

export default Attachments;