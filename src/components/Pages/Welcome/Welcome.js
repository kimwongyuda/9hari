import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Welcome1 from './contents/Welcome1';
import Welcome2 from './contents/Welcome2';
import Welcome3 from './contents/Welcome3';
import Welcome4 from './contents/Welcome4';
import './Welcome.css';

class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Welcome1></Welcome1>;
        }
        else if(this.props.match.params.page == "2"){
            page = <Welcome2></Welcome2>;
        }
        else if(this.props.match.params.page == "3"){
            page = <Welcome3></Welcome3>;
        }
        else if(this.props.match.params.page == "4"){
            page = <Welcome4></Welcome4>;
        }

        return(
            <div className='content'>
                <Link to='/welcome/1'>담임목사환영사</Link>
                <Link to='/welcome/2'>연혁</Link>
                <Link to='/welcome/3'>섬기는분들</Link>
                <Link to='/welcome/4'>찾아오시는 길</Link>
                {page}
            </div>
        )
    };

}

// const Welcome = ({match}) => {

//     return(
//         <div>
//             <Link to='/welcome'>to welcome</Link>
//                 <Link to='/history'>to history</Link>
//                 Welcome
//         </div>
//     );
// }; 

export default Welcome;