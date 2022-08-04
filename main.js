const API_KEY = config.apikey;
const url = `https://api.openweathermap.org/data/2.5/weather?id=2147714&appid=${config.apikey}`;
//로딩 이미지 표시
$('#weather_info .load_img').show();
$.getJSON(url, function(data) {
  //날씨 data 객체
  const sys = data.sys;  // 국가명, 일출.일몰
  const city = data.name;// 도시명
  const weather = data.weather; //날씨 객체
  const main = data.main; //온도, 기압 관련 객체
  
  const wmain = weather[0].main; // 구름 상태
  const w_id = weather[0].id; // 날씨 상태 id 코드
  const icon = weather[0].icon; //날씨 아이콘 정보
  const country = sys.country; //국가명
  const temp = main.temp; //현재 온도
  const temp_min = main.temp_min; //최저 온도
  const temp_max = main.temp_max; //최고 온도 
  //날씨 정보 표시 
  console.log('====',country, temp);
  $('body').append( wmain + ',' + icon + ' '
    + 'Current Temperature: ' + parseInt(temp-273.15) + ' '
    + 'Lowest Temperature: ' + parseInt(temp_min-273.15) + ' '
    + 'Highest Temperature: ' + parseInt(temp_max-273.15) + ' '
    + country + ' ' + city  + ' ' + w_id + ' ' + '<br>');
    
  //날씨 아이콘 표시 
  const icon_url = 'http://openweathermap.org/img/w/' + icon;
  $('body').append("<img src ='" + icon_url + ".png'>");

  //날씨 정보 표시 
  $('#weather_info > .city').html(city + "/" + country);
  $('#weather_info .icon').html("<img src='" + icon_url + ".png'>");
  $('#weather_info .w_id').html(wmain);
  $('#weather_info .temp_min').html(parseInt(temp_min-273.15) + '&deg;' + ' min');
  $('#weather_info .temp_max').html(parseInt(temp_max-273.15) + '&deg;' + ' max');
  $('#weather_info .temp').html(parseInt(temp-273.15) + '&deg;');

  //데이타 로딩 후 로딩 미이지 제거
  $('#weather_info .load_img').hide();
});
  // .fail(function() {
  //   //오류 메세지 표시
  //   alert("loading error");
  // });
