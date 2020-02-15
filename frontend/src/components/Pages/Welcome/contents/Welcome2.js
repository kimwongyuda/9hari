import React, {Component} from 'react';
import style from './Welcome2.module.css';
import content_image1 from '../../../../images/image3.JPG';
import content_image2 from '../../../../images/image4.JPG';
import content_image3 from '../../../../images/image5.JPG';
import content_image4 from '../../../../images/image6.JPG';
import content_image5 from '../../../../images/image7.JPG';
import content_image6 from '../../../../images/image8.JPG';
import content_image7 from '../../../../images/image9.JPG';
import content_image8 from '../../../../images/image2.JPG';

class Welcome2 extends Component{

    constructor(props){
        super(props);
    }

    render(){
        
        const days = ['2009. 12', '2010. 05', '2010. 12', '2010. 12. 10', '2011. 03', '2011. 03','2011. 07','2011. 12', '2012. 07', '2012. 12', '2013. 02', '2013. 08', '2013. 12', '2014. 08', '2014. 12', '2014. 12', '2015. 08', '2015. 12', '2016. 08. 19', '2016. 12. 04', '2017. 08. 02', '2017. 12', '2018. 08. 26, 2018. 09. 02, 2018. 09. 09', '2018. 10', '2018. 12', '2019. 07', '2019. 09. 29', '2019. 12'];

        const content = ['구하리교회 김인아 목사가 대지 280평 구입하다.',
    '구하리교회 기공예배 드리다.',
    '구하리 교회 건축면적 480평을 건축하여 준공하다.',
    '구하리 교회 입당예배 드리고 1명부터 개척시작하다.\n설교: 과천교회 김찬종 원로목사',
    '구하리 교회 문화센타를 시작하다.',
    '제1회 전국 현장 전도 지도자 세미나를 \n구하리교회에서 진행하다.',
    '인도네시아 발리로 중고청장년 35명이 여름\n수련회 가다.',
    '구하리교회 창립 1주년 감사예배 드리다.\n설교: 노량진교회 림인식 원로목사',
    '강원도 화천 여울목으로 중고청장년 연합수련회가다.',
    '구하리교회 창립 2주년 감사예배들 드리다.\n설교: 노량진교회 강신원 원로목사',
    '구하리교회 아기학교 시작하다.',
    '제부도로 전교인 연합수련회 가다.',
    '구하리교회 창립 3주년 감사예배를 드리다.\n간증: 송재호 장로',
    '대천 통나무 팬션으로 전교인 연합수련회 가다.',
    '구하리교회 창립4주년 감사 예배를 드리다.',
    '윤형주장로 초청 간증집회를 하다.',
    '대천 통나무 팬션으로 전교인 연합수련회 가다.',
    '구하리교회 창립 5주년 감사예배를 드립니다.\n오후 3시 구하리교회 김인아 목사 \n취임식/위임식과 항존직 \n장로6명 안수집사 13명 권사21명이 임직하다.\n\n설교: 노량진교회 림인식 원로목사',
    '전교인 국내 성지순례 전남 여수 애양원으로 가다.',
    '구하리교회 창립 6주년 감사예배를 드리고 \n오후 1시 30분 기관별 찬양대회를 하다.',
    '제주도 명성 아카데미 하우스로 전교인 여름 수련회를\n가다.\n강사: 이종한 목사(제주 아름다운 교회 담임)',
    '구하리 교회 창립7주년 감사예배를 드리다.\n설교: 장신대 기독교 교육학 김도훈 교수',
    '구하리 교회에서 림인식 목사, 김운용 교사, 민경진\n교수를 강사로 전교인 여름 수련회를 하다.',
    '사랑으로 하나 되는 구하리 교회 전교인 체육대회를\n교동초등학교에서 하다.',
    '구하리 교회 창립8주년 감사예배들 드리다.',
    '서천 유스호텔로 전교인 여름 수련회 가다.\n강사: 이종한목사(제주아름다운교회담임)',
    '항존직 장로1명, 안수집사6명, 권사9명 임직 하다.\n설교: 명성비전교회 이양재 담임목사',
    '구하리교회 창립 9주년 감사예배를 드리다.'];

        return(
            <div style={{width: '100%', float: 'left'}}>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '22px', float: 'left'}}>연혁</p>
               </div>
               <div style={{width: '50%', height: '50px', float: 'left'}}>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right', color: '#005bab'}}> 연혁</p>
                   <p className={style.textb2} style={{fontSize: '17px', float: 'right'}}> 메인 > 교회소개 >&nbsp;</p>
               </div>

               {/* 연혁 사진 */}
               <div style={{width:'50%', float: 'left'}}>
                   <img src={content_image1} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image2} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image3} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image4} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image5} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image6} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image7} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image8} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image5} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image6} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image7} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
                   <img src={content_image8} style={{width: '80%', marginLeft: '10%', marginTop: '50px', float:'left'}}></img>
               </div>

               {/* 연혁 내용 */}
               <div style={{width: '50%', float: 'left'}}>
                   <ul className={style.ul} style={{listStyleType: 'none', padding: '0', marginTop: '30px'}}>
                       {days.map((value, index)=>{
                           return (
                           <li className={style.li}>
                               <span className={style.textb2} style={{fontSize: '30px', whiteSpace: 'pre-wrap'}}> {value}</span>
                               <br></br>
                               <pre className={style.textb} style={{fontSize: '20px', marginLeft: '25px'}}>{content[index]}</pre>
                           </li>
                           );
                       })}
                   </ul>
               </div>
               <div style={{width: '100%', float: 'left', marginTop: '10px'}}>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
               </div>
            </div>
        )
    };

}

export default Welcome2;