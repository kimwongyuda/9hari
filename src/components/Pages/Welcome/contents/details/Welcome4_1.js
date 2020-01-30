import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome3_1 extends Component{

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
        else if(page == '3'){
            content = <div>c</div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default Welcome3_1;