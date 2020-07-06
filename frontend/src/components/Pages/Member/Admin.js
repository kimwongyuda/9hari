import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background1 from '../../../images/background1.jpg';
import { Form, Button } from "react-bootstrap";
import style from './Admin.module.css';

import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Admin extends Component{

    constructor(props){
        super(props);
        this.state = {list_admin : []}
    }

    componentDidMount(){
      this.callApi()
      .then(res => this.setState({list_admin: res}))
      .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/list_admin`);
        const body = await response.json();
        return body;
    }

    approve(idx){

      const send_param = {
        headers,
        id: idx
      };

      axios
      .post("/api/approve_admin", send_param)
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

        const list_admin = this.state.list_admin;
        console.log(list_admin);

        const admin_show = list_admin.map((item, index) => (
            
          <div style={{width: '100%', float: 'left'}}>
          <span className={style.smallbox3} style={{width:'5%'}}>{item.id}</span>
          <span className={style.smallbox3} style={{width:'15%'}}>{item.login_id}</span>
          <span className={style.smallbox3} style={{width:'20%'}}>{item.email}</span>
          <span className={style.smallbox3} style={{width:'15%'}}>{item.name}</span>
          <span className={style.smallbox3} style={{width:'10%'}}>{item.rank}</span>
          <span className={style.smallbox3} style={{width:'15%'}}>{item.authority}</span>
          <span className={style.smallbox3} style={{width:'10%'}}>{item.approved}</span>
          <button className={style.smallbox3+' '+style.button} style={{width:'10%', border: 'none', borderBottom: '0.1px solid #DCDCDC'}} onClick={()=>this.approve(item.id)}><strong>승인</strong></button>
          </div>
        ));

        return(
            <div>
                <div className={style.wrapper+' '+style.blankbox} style={{height: '120px'}}>a</div>
                <div className={style.wrapper}>
                    <img src={background1} style={{marginBottom: '10px',width: '100%', float: 'left', height: '300px', objectFit: 'cover'}}></img>
                    <div className={style.content}>
                        
                        <div style={{width: '100%', marginBottom: '400px', float: 'left'}}>
                            <div style={{marginTop: '10px'}}>
                              <table className={style.table}>
                              <tbody>
                                      <tr> 
                                          <td className={style.td+' '+style.textb2} style={{width: '5%', backgroundColor: '#DCDCDC'}}>ID</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>Login_ID</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '20%', backgroundColor: '#DCDCDC'}}>Email</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>Name</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '10%', backgroundColor: '#DCDCDC'}}>Rank</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '15%', backgroundColor: '#DCDCDC'}}>Authority</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '10%', backgroundColor: '#DCDCDC'}}>Approved</td>
                                          <td className={style.td+' '+style.textb2} style={{width: '10%', backgroundColor: '#DCDCDC'}}>Check</td>
                                      </tr>   
                                                        
                              </tbody>
                              </table>
                              {admin_show}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Admin;