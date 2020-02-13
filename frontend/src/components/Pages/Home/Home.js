import React, {Component} from 'react';
import style from './Home.module.css';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_background1 from '../../../images/home_background1.jpg';
import home_background2 from '../../../images/home_background2.jpg';

const photos = [
    {
        name: 'photo1',
        url: `${home_background1}`
    },
    {
        name: 'photo2',
        url: `${home_background2}`
    }
]

class Home extends Component{

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

        return(
            <div>
                <div className={style.wrapper} style={{height: '130px'}}>a</div>
                <div className={style.wrapper} style={{marginBottom: '10px'}}>
                    <div style={{width: '100%', height: '900px'}}>
                    <Slider {...settings}>
                        {photos.map((photo)=>{
                            return(
                                <div>
                                    <img src={photo.url} style={{width: '100%', height: '800px', objectFit: 'cover'}}></img>
                                </div>
                            )
                        })
                        }
                    </Slider>
                    </div>
                </div>
                home 준비중
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
        )
    };

}

export default Home;