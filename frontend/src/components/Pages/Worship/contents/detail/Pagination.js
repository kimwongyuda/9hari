import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sermon from './Sermon.js';
import style from './Pagination.module.css';

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
        var pageint = parseInt(page);

        var maxpage = 10;
        var pagination = [];
        if(maxpage <10)
        {
            for(var i=0; i<maxpage;i++)
            {
                pagination.push(i+1);
            }
        }
        else{
            if(pageint < 5)
            {
                pagination= [1,2,3,4,5,6,7,8,9];
            }
            else if(pageint > maxpage -5)
            {
                pagination= [maxpage-8,maxpage-7,maxpage-6,maxpage-5,maxpage-4,maxpage-3,maxpage-2,maxpage-1,maxpage];
            }
            else
            {
                pagination= [pageint-4,pageint-3,pageint-2,pageint-1,pageint ,pageint+1,pageint+2,pageint+3,pageint+4];
            }
        }
        const pagef1 = (<div>
            { pageint < 10 ? <Link to ={`/worship/4/1`} className={style.link2}><span className={style.smallbox2}>{'<'}</span></Link>
            : <Link to ={`/worship/4/${pageint-9}`} className={style.link2}><span className={style.smallbox2}>{'<'}</span></Link>}</div>)

        const pagef2 = (<div>
            { pageint > maxpage-10 ? <Link to ={`/worship/4/${maxpage}`} className={style.link2}><span className={style.smallbox2}>{'>'}</span></Link>
            : <Link to ={`/worship/4/${pageint+9}`} className={style.link2}><span className={style.smallbox2}>{'>'}</span></Link>}</div>)

        const pagilist = pagination.map((value, index) => (
            <div>
            {page == String(value) ? 
            <Link to ={`/worship/4/${value}`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#DCDCDC'}}>{value}</span></Link>
        : <Link to ={`/worship/4/${value}`} className={style.link2}><span className={style.smallbox}>{value}</span></Link>
        }
        </div>
        ));

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

                    <div style={{width: '60%', marginLeft: '20%', marginTop: '10px'}}>
                    {pagef1}
                    <Link to ={`/worship/4/1`} className={style.link2}><span className={style.smallbox}>1</span></Link>
                    <span className={style.smallbox2}>...</span>
                    {pagilist}
                    <span className={style.smallbox2}>...</span>
                    <Link to ={`/worship/4/${maxpage}`} className={style.link2}><span className={style.smallbox}>{maxpage}</span></Link>
                    {pagef2}
                    </div>

                </div>
            </div>
        )
    };

}

export default Pagination;