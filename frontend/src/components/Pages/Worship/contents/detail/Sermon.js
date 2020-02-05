import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sermon extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        const videoSrc = 'https://www.youtube.com/embed/E4kCnWVJagQ';

        return(
            <div style={{width: '100%', float: 'left'}}>
                Sermon<br></br>
                <iframe frameBorder="0" width="100%" height="500px" src={videoSrc} allowfullscreen="allowfullscreen"></iframe>
            </div>
        )
    };

}

export default Sermon;