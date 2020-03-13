import React, {Component} from 'react';
import style from './Home.module.css';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_background1 from '../../../images/home_background1_op70.jpg';
import home_background2 from '../../../images/home_background2.jpg';
import home1 from '../../../images/home1_re2.jpg';
import homebox1 from '../../../images/homebox1_re.jpg';
import homebox2 from '../../../images/homebox2_re.jpg';
import homebox3 from '../../../images/homebox3_re.jpg';
import icon1 from '../../../images/home3_re_1.jpg';
import icon2 from '../../../images/home3_re_2.jpg';
import icon3 from '../../../images/home3_re_3.jpg';
import icon4 from '../../../images/home3_re_4.jpg';
import icon5 from '../../../images/home3_re_5.jpg';

import home_main_1 from '../../../images/home_main_1.JPG';
import home_main_2 from '../../../images/home_main_2.JPG';
import home_main_3 from '../../../images/home_main_3.JPG';
import home_main_4 from '../../../images/home_main_4.JPG';
import home_main_5 from '../../../images/home_main_5.JPG';

import {Link} from 'react-router-dom';

const photos = [
    {
        name: 'photo1',
        url: `${home_main_1}`
    },
    {
        name: 'photo2',
        url: `${home_main_3}`
    },
    {
        name: 'photo3',
        url: `${home_main_2}`
    },
    {
        name: 'photo4',
        url: `${home_main_4}`
    },
    {
        name: 'photo5',
        url: `${home_main_5}`
    }
]

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {posts:[]};
    }

    componentDidMount(){
        this.callApi()
        .then(res => this.setState({posts: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch(`/api/posts/sun`);
        const body = await response.json();
        return body;
    }

    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true, 
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };

        var length_ = this.state.posts.length;

        return(
            <div>
                <div className={style.wrapper+' '+style.blankbox} style={{height: '130px'}}>a</div>
                <div className={style.wrapper} style={{marginBottom: '10px'}}>

                    <div className={style.wrapper} style={{marginBottom: '30px'}}>
                    <Slider {...settings}>
                        {photos.map((photo)=>{
                            return(
                                <div>
                                    <img src={photo.url} style={{width: '100%', height: '600px', objectFit: 'cover'}}></img>
                                </div>
                            )
                        })
                        }
                    </Slider>
                    </div>

                    <div className={style.content}>
                        <div style={{backgroundImage: `url(${home1})`, width: '300px', height: '400px', float:'left', textAlign:'center', marginRight: '12.5px', marginBottom: '30px', marginLeft: '6.25px'}}>
                            <span className={style.textb2} style={{color: 'white', fontSize: '40px', marginTop: '30px',display: 'inline-block'}}>교회소개</span>
                            <br></br>
                            <Link className={style.link} to="welcome/1"><span className={style.textb} style={{fontSize: '30px', marginTop: '30px',display: 'inline-block'}}>담임목사환영사</span></Link>
                            <br></br>
                            <Link className={style.link} to="welcome/2"><span className={style.textb} style={{fontSize: '30px', marginTop: '30px',display: 'inline-block'}}>연혁</span></Link>
                            <br></br>
                            <Link className={style.link} to="welcome/3"><span className={style.textb} style={{fontSize: '30px', marginTop: '30px',display: 'inline-block'}}>목회철학</span></Link>
                        
                        </div>

                        <div style={{backgroundImage: `url(${homebox2})`, width: '300px', height: '400px', float:'left', textAlign:'center', marginRight: '12.5px' , marginBottom: '30px'}}>
                            <li style={{listStyleType: 'none', marginLeft: '35px', marginRight: '35px', marginTop: '150px'}}>
                                <Link className={style.link} to="welcome/7"><span className={style.textb} style={{fontSize: '30px', marginTop: '15px',display: 'inline-block'}}>교회 소식</span>
                                </Link>
                            </li>
                        
                        </div>

                        <div style={{backgroundImage: `url(${homebox1})`, width: '300px', height: '400px', float:'left', textAlign:'center', marginRight: '12.5px' , marginBottom: '30px'}}>
                            <li style={{listStyleType: 'none', marginLeft: '35px', marginRight: '35px', marginTop: '150px'}}>
                                <Link className={style.link} to={`/worship/1/1/${length_}`}><span className={style.textb} style={{fontSize: '30px', marginTop: '15px',display: 'inline-block'}}>이번주 설교 영상</span>
                                </Link>
                            </li>
                        </div>

                        <div style={{backgroundImage: `url(${homebox3})`, width: '300px', height: '400px', float:'left', textAlign:'center', marginBottom: '30px'}}>
                            
                            <li style={{listStyleType: 'none', marginLeft: '35px', marginRight: '35px', marginTop: '150px'}}>
                                <Link className={style.link} to="suggest/2"><span className={style.textb} style={{fontSize: '30px', marginTop: '15px',display: 'inline-block'}}>구하리 갤러리</span>
                                </Link>
                            </li>
                        
                        </div>

                        {/* <div style={{width:'100%', float: 'left', border: '0.1px solid #DCDCDC', marginBottom: '30px'}}>
                            <Link to="welcome/1"><li style={{backgroundImage: `url(${icon1})`, width: '200px', height: '200px', textAlign:'center', listStyleType: 'none', marginLeft: '65px', marginRight: '30px', marginTop: '30px', marginBottom: '30px', float:'left'}}>
                                <span className={style.textb} style={{color: 'white',fontSize: '30px', marginTop: '80px',display: 'inline-block'}}>교회 소개</span>
                            </li></Link>
                            <Link to="worship/1/1"><li style={{backgroundImage: `url(${icon2})`, width: '200px', height: '200px', textAlign:'center', listStyleType: 'none', marginRight: '30px', marginTop: '30px', marginBottom: '30px', float:'left'}}>
                                <span className={style.textb} style={{color: 'white',fontSize: '30px', marginTop: '80px',display: 'inline-block'}}>예배와 말씀</span>
                            </li></Link>
                            <Link to="ng/1/1"><li style={{backgroundImage: `url(${icon3})`, width: '200px', height: '200px', textAlign:'center', listStyleType: 'none', marginRight: '30px', marginTop: '30px', marginBottom: '30px', float:'left'}}>
                                <span className={style.textb} style={{color: 'white',fontSize: '30px', marginTop: '80px',display: 'inline-block'}}>다음 세대</span>
                            </li></Link>
                            <Link to="group/1/1"><li style={{backgroundImage: `url(${icon4})`, width: '200px', height: '200px', textAlign:'center', listStyleType: 'none', marginRight: '30px', marginTop: '30px', marginBottom: '30px', float:'left'}}>
                                <span className={style.textb} style={{color: 'white',fontSize: '30px', marginTop: '80px',display: 'inline-block'}}>부서 및 모임</span>
                            </li></Link>
                            <Link to="event/1"><li style={{backgroundImage: `url(${icon5})`, width: '200px', height: '200px', textAlign:'center', listStyleType: 'none', marginRight: '30px', marginTop: '30px', marginBottom: '30px', float:'left'}}>
                                <span className={style.textb} style={{color: 'white',fontSize: '30px', marginTop: '80px',display: 'inline-block'}}>교회 행사</span>
                            </li></Link>
                        </div> */}

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    };

}

export default Home;