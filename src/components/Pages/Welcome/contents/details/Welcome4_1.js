import React, {Component} from 'react';
import style from './Welcome4_1.module.css';
import temp from '../../../../../images/temp.jpg'

class Welcome3_1 extends Component{

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
                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>부목사</span>
                </div>
                <div className={style.box2}>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img>
                        <span className={style.text2} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '20px'}}>이태규 목사</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>설교준비</span>
                        <br></br> 
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>010-1234-5678</span>
                        <br></br>
                        <span className={style.text} style={{marginLeft: '5px', textAlign: 'center', display: 'inline-block', width: '100%', fontSize: '15px'}}>rladnjsrb9999@khu.ac.kr</span>
                    </div>
                    <div className={style.card}><img src={temp} style={{width: '100%', objectFit: 'fill'}}></img></div>
                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>협동목사</span>
                </div>
                <div className={style.box2}>

                </div>

                <div className={style.box}>
                    <span className={style.text2} style={{fontSize: '20px', color: '#005bab'}}>전도사</span>
                </div>
                <div className={style.box2}>

                </div>

            </div>
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