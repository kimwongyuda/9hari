import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome3_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let page;
        if(this.props.match.params.page == "1"){
            page = <p>목사</p>;
        }
        else{
            page = <p>성도</p>;
        }

        return(
            <div>
                {page}
            </div>
        )
    };

}

export default Welcome3_1;