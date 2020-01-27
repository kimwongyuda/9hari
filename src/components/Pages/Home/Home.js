import React, {Component} from 'react';
import style from './Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
    {
        name: 'photo1',
        url: "data:image/jpeg;base64,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"
    },
    {
        name: 'photo2',
        url: "data:image/jpeg;base64,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"
    }
]


class Home extends Component{

    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true, 
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          };

        return(
            <div>
                <div className={style.wrapper} style={{marginTop: '10px', marginBottom: '10px'}}>
                    <div className={style.content} style={{marginTop: '10px', marginBottom: '10px', height: '350px'}}>
                    <Slider {...settings}>
                        {photos.map((photo)=>{
                            return(
                                <div>
                                    <img src={photo.url} style={{width: '100%', height: '300px', objectFit: 'fill'}}></img>
                                </div>
                            )
                        })
                        }
                    </Slider>
                    </div>
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