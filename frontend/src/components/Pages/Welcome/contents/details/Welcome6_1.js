import React, {Component} from 'react';
import style from './Welcome6_1.module.css';
const { kakao } = window;


/*에러: 탭 옮기면 지도 잔상 남거나, 지도 안보이거나*/
class Welcome6_1 extends Component{

    constructor(props){
        super(props);
        this.state={isLoading:false};
    }

    componentDidMount() {                                                    
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(37.30059123853391, 127.1203388378706),
                    level: 1
                });

                // 마커가 표시될 위치입니다 
                var markerPosition  = new kakao.maps.LatLng(37.30059123853391, 127.1203388378706); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                marker.setMap(map);

                var iwContent = '<div style="padding:5px; width:215px;">구하리교회<br>\
                <a href="https://map.kakao.com/link/map/구하리교회,37.30059123853391,127.1203388378706" style="color:blue" target="_blank">큰지도보기</a>\
                <a href="https://map.kakao.com/link/to/구하리교회,37.30059123853391,127.1203388378706" style="color:blue" target="_blank">길찾기</a>\
                <a href="https://place.map.kakao.com/14080308" style="color:blue" target="_blank">상세정보</a>\
                </div>'

                var iwPosition = new kakao.maps.LatLng(37.30059123853391, 127.1203388378706); //인포윈도우 표시 위치입니다

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    position : iwPosition, 
                    content : iwContent 
                });
                
                // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
                infowindow.open(map, marker); 

            });
        };

        this.setState({isLoading: true});
      }

    render(){
        let page = this.props.props;
        let content;

        if(page == '1'){
            content = 
            <div>
                <div style={{width: '100%', float: 'left', height: '500px', marginBottom: '50px'}} id="map"></div>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주소 및 연락처</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>주소</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>경기 용인시 기흥구 마북동 109<br></br>(우) 16910, (지번) 마북동 240-6</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>연락처</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>070-4238-0191</td>
                                </tr>
                        </tbody>
                </table>

                {/* <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>자가차량 이용시</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>서울에서 올때</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>수원에서 올때</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                        </tbody>
                </table> */}

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주차 및 장소 안내</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>주차 안내</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>주차 공간이 많지 않아 주의 부탁드립니다</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>장소 안내</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>교회 뒷편과 건너편</td>
                                </tr>
                        </tbody>
                </table>


                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>버스 이용시</span>
                </div>
                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>구성역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>     
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>죽전역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26-1번</td>
                                </tr>
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>오리역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>                  
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>미금역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>   
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>구성역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26번, 26-2번</td>
                                </tr>     
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>동백역</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>21번, 21-A번</td>
                                </tr>                            
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>언동중학교</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26-1번, 26-3번</td>
                                </tr>                            
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>단국대학교</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>26-3번</td>
                                </tr>                            
                        </tbody>
                </table>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>지하철 이용시</span>
                </div>
                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2}>분당선</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>분당선 구성역 하차 후 3번 출구에서 <br></br> 21, 21A, 26, 26-1, 26-2, 26-3 타고 <br></br> 구교동마을, 장욱진고택 정거장 하차  </td>
                                </tr>                                   
                        </tbody>
                </table>

                {/* <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>교회 차량 안내</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>서울에서 올때</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>수원에서 올때</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                        </tbody>
                </table> */}

            </div>
        }
        else if(page == '2'){
            content = 
            <div>
                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주소 및 연락처</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>주소</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>경기 용인시 기흥구 마북동 109</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='1'>연락처</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>070-4238-0191</td>
                                </tr>
                        </tbody>
                </table>

                <div className={style.box}>
                    <span className={style.textb2} style={{fontSize: '20px', color: '#005bab'}}>주차 및 장소 안내</span>
                </div>

                <table className={style.table}>
                        <tbody>
                                <tr> 
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>주차 안내</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>주차 공간이 많지 않아 선착순</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb2} rowSpan='3'>장소 안내</td>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>교회 뒷편과 건너편</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                                <tr>
                                    <td className={style.td+' '+style.textb} style={{width: '75%'}}>1부</td>
                                </tr>
                        </tbody>
                </table>
            </div>
        }

        return(
            this.state.isLoading ? <div>{content}</div> : <div>Loading...</div>
        )
    };

}

export default Welcome6_1;