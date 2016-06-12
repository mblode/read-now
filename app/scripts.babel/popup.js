'use strict';

var previewUrl = localStorage.getItem('previewUrl');

function timeConverter(unix_timestamp){
  var a = new Date(unix_timestamp*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var formattedTime = month + ' ' + date + ', ' + year;
  return formattedTime;
}

$(document).ready(function(){
    $.ajax({
      type: 'GET',
      data: { 'api_key': '7b97c4224de44b31972f7ad4c37d8eff', 'url': previewUrl, 'callback': 'test' },
      dataType: 'json',
      crossDomain: true,
      url: 'https://www.instaparser.com/api/1/article',

      success: function(data) {
        console.log(data);
        var dateParse = data.date;
        var dateConvert = timeConverter(dateParse);
        $('#show-title').text(data.title);
        $('#show-site_name').attr('href', data.url);
        $('#show-site_name').text(data.site_name);
        $('#show-author').text('by ' + data.author);
        $('#show-date').text(dateConvert);
        $('#show-data').append(data.html);
      }
    });
});

