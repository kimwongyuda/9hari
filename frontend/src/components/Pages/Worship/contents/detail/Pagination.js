import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sermon from './Sermon.js';
import style from './Sermon.module.css';

//영상 그대로 및 페이지 2에서는?
class Pagination extends Component{

    constructor(props){
        super(props);
        if(window.location.pathname.split('/').length == 5)
        {this.state={isshow: true, posts: [], type: this.props.props.type};}
        else
        {this.state={isshow: false, posts: [], type: this.props.props.type};}
        this.change_false = this.change_false.bind(this);
        this.change_true = this.change_true.bind(this);
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({posts: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/posts/${this.state.type}`);
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
        console.log(this.state);

        var posts = this.state.posts;

        //현재 글 개수 9개씩 짜름.
        var posts_size = posts.length;
        var posts_mod = posts_size % 9;
        var posts_list = [];

        var page = window.location.pathname.split('/')[3];
        var pageint = parseInt(page);

        //현재 보여줄 글들
        if(pageint ==1)
        {
            for(var i = 0; i<posts_mod; i++)
            {
                posts_list.push(posts[i]);
            }
        }
        else{
            for(var i = (pageint-1)*9-(9-posts_mod); i< (pageint-1)*9-(9-posts_mod) + 9; i++)
            {
                posts_list.push(posts[i]);
            }
        }
        //
        var maxpage = parseInt(posts_size/10) + 1;
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

        const posts_show = posts_list.map((item, index) => (
            
            <div style={{width: '100%', float: 'left'}}>
            {index+1!=posts_list.length ?
            <div>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{9*(maxpage-pageint) + (posts_list.length-index)}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{textAlign: 'left', width: '40%'}}>{item.title}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{item.name}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{item.creation_date.substr(0,10)}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{item.views}</span></Link>
            </div>
            :
            <div>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{9*(maxpage-pageint) + (posts_list.length-index)}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{textAlign: 'left', width: '40%', borderBottom: '0.1px solid #DCDCDC'}}>{item.title}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{item.name}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{item.creation_date.substr(0,10)}</span></Link>
            <Link onClick={this.change_true} to ={`/worship/4/${pageint}/${9*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{item.views}</span></Link>
            </div>
            }
            </div>
        ));
        
        var flag = this.state.isshow;

        return(
            
            <div style={{width: '100%', float: 'left'}}>

                {(()=>{
                    
                    if(flag)
                    {
                    var sermon_num = parseInt(window.location.pathname.split('/')[4]);

                    if(this.state.posts[posts_size-sermon_num]!=undefined)
                    {
                        return <div>
                            <Sermon props={{data: this.state.posts[posts_size-sermon_num]}}></Sermon>
                            <div style={{width: '100%', float: 'left'}}>
                            <Link to={`/worship/4/${pageint}`} onClick={this.change_false} className={style.tablelink}><span className={style.smallbox3} style={{borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>목록으로</span></Link>
                            </div>
                            </div>
                    }
                    else
                    {
                        return<div>
                        </div>
                    }
                    } 
                })()}

                <div>
                    <table className={style.table}>
                            <tbody>
                                    <tr> 
                                        <td className={style.td+' '+style.text2} style={{width: '15%'}}>번호</td>
                                        <td className={style.td+' '+style.text2} style={{width: '40%'}}>제목</td>
                                        <td className={style.td+' '+style.text2} style={{width: '15%'}}>작성자</td>
                                        <td className={style.td+' '+style.text2} style={{width: '15%'}}>등록일</td>
                                        <td className={style.td+' '+style.text2} style={{width: '15%'}}>조회수</td>
                                    </tr>   
                                                      
                            </tbody>
                    </table>
                    {posts_show}
                    <br></br>
                    <br></br>

                    {/* 페이지리스트 */}
                    <div style={{width: '60%', marginLeft: '35%', marginTop: '10px', float:'left'}}>
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