import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Attachments from './Attachments.js';
import style from './Pagination.module.css';
import dodbogi from '../../../../../../images/dodbogi.jpg';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
class Pagination extends Component{

    constructor(props){
        super(props);

        console.log(props);
        if(window.location.pathname.split('/').length == 6)
        {this.state={isshow: true, posts: [], type: this.props.props.type, option_input: 'title',search_input: '', pageindex: this.props.props.pageindex, writer_id: 0};}
        else
        {this.state={isshow: false, posts: [], type: this.props.props.type, option_input: 'title',search_input: '', pageindex: this.props.props.pageindex, writer_id: 0};}

        this.change_false = this.change_false.bind(this);
        this.change_true = this.change_true.bind(this);
        this.views_up = this.views_up.bind(this);
        this.warpfunc = this.warpfunc.bind(this);
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeS = this.handleChangeS.bind(this);
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({posts: res.json, writer_id: res.writer_id}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/posts_b/${this.state.type}`);
        const body = await response.json();
        console.log(body)
        return body;
    }

    change_false(){
        this.setState({isshow: false});
    }

    change_true(){
        this.setState({isshow: true});
    }

    views_up(sermon_index){
        var index = this.state.posts.length - sermon_index;
        var post_num = this.state.posts[index].pid;
        const response = fetch(`/api/posts_up/${post_num}`);
    }

    warpfunc(param){
        this.change_true();
        this.views_up(param);
    }

    search(){
        const response = 
        fetch(`/api/posts_b_search/${this.state.option_input}/${this.state.search_input}/${this.state.type}`)
        .then(res => res.json())
        .then((res) => {this.setState({posts: res.json, writer_id: res.writer_id})});
    }

    handleChange = (e) => {
        this.setState({search_input: e.target.value});
    }

    handleChangeS = (e) => {
        this.setState({option_input: e.target.value});
    }

    delete(pid){
        const send_param = {
            headers,
            pid: pid
          };
    
          axios
          .post("/api/delete_post_attachment", send_param)
          //정상 수행
          .then(returnData => {
            if (returnData.data.message) {
              alert(returnData.data.message);
              window.location.reload();
    
            } else {
              alert(returnData.data.message);
            }
          })
          //에러
          .catch(err => {
            console.log(err);
          });
    }

    render(){

        var posts = this.state.posts;

        // console.log(posts);

        var cur_page_index = this.state.pageindex;
        // console.log(cur_page_index);

        //현재 글 개수 inputcount개씩 짜름.
        var posts_size = posts.length;
        var inputcount = 18;
        var halfcount = parseInt(inputcount/2) + 1;
        var posts_mod = posts_size % inputcount;
        var posts_list = [];

        var page = window.location.pathname.split('/')[4];
        var pageint = parseInt(page);
        var writer_id = this.state.writer_id;

        console.log('writer_id: ', writer_id);

        console.log(posts);

        // console.log(posts_mod);
        if(posts.length!=0)
        {
        //현재 보여줄 글들
        if(pageint ==1)
        {
            for(var i = 0; i<posts_mod; i++)
            {
                posts_list.push(posts[i]);
            }
        }
        else{
            for(var i = (pageint-1)*inputcount-(inputcount-posts_mod); i< (pageint-1)*inputcount-(inputcount-posts_mod) + inputcount; i++)
            {
                posts_list.push(posts[i]);
            }
        }
        }
        console.log(posts_list)

        //
        var maxpage = parseInt(posts_size/(inputcount)) + 1;
        var pagination = [];
        if(maxpage <inputcount+1)
        {
            for(var i=0; i<maxpage;i++)
            {
                pagination.push(i+1);
            }
        }
        else{
            if(pageint < halfcount)
            {
                for(var i=0; i<inputcount;i++)
                {
                    pagination.push(i+1);
                }
            }
            else if(pageint > maxpage - halfcount)
            {
                for(var i=inputcount-1; i>=0; i--)
                {
                    pagination.push(maxpage-i);
                }
            }
            else
            {
                for(var i=-(halfcount-1); i<halfcount;i++ )
                {
                    pagination.push(pageint+i);
                }
            }
        }
        const pagef1 = (<div>
            { pageint < inputcount+1 ? <Link to ={`/group/${cur_page_index}/2/1`} className={style.link2}><span className={style.smallbox2}>{'<'}</span></Link>
            : <Link to ={`/group/${cur_page_index}/2/${pageint-inputcount}`} className={style.link2}><span className={style.smallbox2}>{'<'}</span></Link>}</div>)

        const pagef2 = (<div>
            { pageint > maxpage-(inputcount+1) ? <Link to ={`/group/${cur_page_index}/2/${maxpage}`} className={style.link2}><span className={style.smallbox2}>{'>'}</span></Link>
            : <Link to ={`/group/${cur_page_index}/2/${pageint+inputcount}`} className={style.link2}><span className={style.smallbox2}>{'>'}</span></Link>}</div>)

        const pagilist = pagination.map((value, index) => (
            <div>
            {page == String(value) ? 
            <Link to ={`/group/${cur_page_index}/2/${value}`} className={style.link2}><span className={style.smallbox} style={{backgroundColor: '#DCDCDC'}}>{value}</span></Link>
        : <Link to ={`/group/${cur_page_index}/2/${value}`} className={style.link2}><span className={style.smallbox}>{value}</span></Link>
        }
        </div>
        ));

        console.log(posts_list);
        const posts_show = posts_list.map((item, index) => (
            <div style={{width: '100%', float: 'left'}}>
            {index+1!=posts_list.length ?
            <div>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{inputcount*(maxpage-pageint) + (posts_list.length-index)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{textAlign: 'left', width: '35%'}}>{item.title.substr(0,18)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{item.name}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3}>{item.creation_date.substr(0,10)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{width: '10%'}}>{item.views}</span></Link>
            {
                (()=>{
                    if(writer_id == item.writer_id)
                    {
                        return <button className={style.smallbox3+' '+style.button} style={{width:'10%'}} onClick={()=>this.delete(item.pid)}><strong>삭제</strong></button>
                    }
                })()
            }
            </div>
            :
            <div>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{inputcount*(maxpage-pageint) + (posts_list.length-index)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{textAlign: 'left', width: '35%', borderBottom: '0.1px solid #DCDCDC'}}>{item.title.substr(0,18)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{item.name}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC'}}>{item.creation_date.substr(0,10)}</span></Link>
            <Link onClick={() => this.warpfunc(inputcount*(maxpage-pageint) + (posts_list.length-index))} to ={`/group/${cur_page_index}/2/${pageint}/${inputcount*(maxpage-pageint) + (posts_list.length-index)}`} className={style.tablelink}><span className={style.smallbox3} style={{borderBottom: '0.1px solid #DCDCDC', width: '10%'}}>{item.views}</span></Link>
            {
                (()=>{
                    if(writer_id == item.writer_id)
                    {
                        return <button className={style.smallbox3+' '+style.button} style={{width:'10%'}} onClick={()=>this.delete(item.pid)}><strong>삭제</strong></button>
                    }
                })()
            }
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
                    var sermon_num = parseInt(window.location.pathname.split('/')[5]);

                    if(this.state.posts[posts_size-sermon_num]!=undefined)
                    {
                        return <div>
                            <Attachments props={{data: this.state.posts[posts_size-sermon_num]}}></Attachments>
                            <div style={{width: '100%', float: 'left'}}>
                            <Link to={`/group/${cur_page_index}/2/${pageint}`} onClick={this.change_false} className={style.tablelink}><span className={style.smallbox3} style={{borderLeft: '0.1px solid #DCDCDC', borderRight: '0.1px solid #DCDCDC'}}>목록으로</span></Link>
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
                                        <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>번호</td>
                                        <td className={style.td+' '+style.textb2} style={{width: '35%', backgroundColor: '#DCDCDC'}}>제목</td>
                                        <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>작성자</td>
                                        <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>등록일</td>
                                        <td className={style.td+' '+style.textb2} style={{width: '10%', backgroundColor: '#DCDCDC'}}>조회수</td>
                                        <td className={style.td+' '+style.textb2} style={{width: '10%', backgroundColor: '#DCDCDC'}}></td>
                                    </tr>   
                                                      
                            </tbody>
                    </table>
                    {posts_show}
                    <br></br>
                    <br></br>

                    {/* 페이지리스트 */}
                    <div style={{width: '60%', marginLeft: '35%', marginTop: '10px', float:'left'}}>
                    {pagef1}
                    <Link to ={`/group/${cur_page_index}/2/1`} className={style.link2}><span className={style.smallbox}>1</span></Link>
                    <span className={style.smallbox2}>...</span>
                    {pagilist}
                    <span className={style.smallbox2}>...</span>
                    <Link to ={`/group/${cur_page_index}/2/${maxpage}`} className={style.link2}><span className={style.smallbox}>{maxpage}</span></Link>
                    {pagef2}
                    </div>

                    {/* 검색 기능 */}
                    <div style={{width: '100%', float: 'left'}}>
                        <div style={{width: '50%', float: 'left', marginLeft: '25%', marginTop: '20px'}}>
                            <select onChange={this.handleChangeS} style={{width: '25%', float: 'left',fontSize: '20px', marginRight: '5px', height: '40px'}}>
                                <option value='title' className={style.textb} style={{fontSize: '20px'}}>제목</option>
                                <option value='writer' className={style.textb} style={{fontSize: '20px'}}>작성자</option>
                            </select>
                            <input type="textb" style={{fontSize: '20px', color: '#005bab', width: '65%', float:'left', marginRight: '5px', height: '40px'}} onChange={this.handleChange}></input>
                            <Link to={`/group/${cur_page_index}/2/1`}><input type="image" src={dodbogi} style={{width: '40px', objectFit: 'fill'}} onClick={this.search}></input></Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    };

}

export default Pagination;