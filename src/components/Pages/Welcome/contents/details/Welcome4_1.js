import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome4_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page = this.props.props;
        let content;
        if(page == '1'){
            content = <div>a</div>
        }
        else if(page == '2'){
            content = <div>b</div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Welcome4_1;