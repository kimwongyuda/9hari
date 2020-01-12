import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome3 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let people;
        if(this.props.match.params.people == "1"){
            people = <p>목사</p>;
        }
        else{
            people = <p>성도</p>;
        }

        return(
            <div>
                {people}
            </div>
        )
    };

}

export default Welcome3;