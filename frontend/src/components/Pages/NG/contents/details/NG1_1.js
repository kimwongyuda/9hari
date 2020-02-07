import React, {Component} from 'react';
import style from './NG1_1.module.css';

class NG1_1 extends Component{

    constructor(props){
        super(props);
    }

    render(){

        let page = this.props.props;
        let content;
        if(page == '1'){
            content = 
            <div>
                a
            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <span className={style.text2} style={{fontSize: '20px'}}>준비중입니다</span>
            </div>
        }

        return(
            <div>
            {content}
            </div>
        )
    };

}

export default NG1_1;