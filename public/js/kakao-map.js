var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.554488, 126.936590), //지도의 중심좌표.
	level: 1 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.554488, 126.936590); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div class="marker" style="padding:5px;text-align: center;">하이미디어 신촌점 <br><a href="https://map.kakao.com/link/map/Hello World!,37.554488,126.936590" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/하이미디어 신촌점,37.554488,126.936590" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.554488, 126.936590); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);
$(".marker").parent().css({"width": "100%"});
$(".marker").parent().parent().css({"margin-top": "-5px"});



$(".bt-roadview").click(function(){
	window.open("https://map.kakao.com/link/roadview/37.554488,126.936590", "_win", "width=800, height=500");
});