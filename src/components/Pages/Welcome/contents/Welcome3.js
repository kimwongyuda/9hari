import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome3 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                <Link to="/welcome/3/1">a</Link>
                <Link to="/welcome/3/2">b</Link>
            </div>
        )
    };

}

export default Welcome3;