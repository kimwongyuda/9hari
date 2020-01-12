import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Welcome2 from './Welcome2';

class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let page;
        if(this.props.match.params.page == "1"){
            page = <Welcome2></Welcome2>;
        }
        else if(this.props.match.params.page == "2"){
            page = <p>b</p>;
        }

        return(
            <div>
                <Link to='/welcome/1'>to welcome</Link>
                <Link to='/welcome/2'>to history</Link>
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