import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to="/welcome/1/1">a</Link>
                <Link to="/welcome/1/2">b</Link>
                <Link to="/welcome/1/3">c</Link>
            </div>
        )
    };

}

export default Welcome2;