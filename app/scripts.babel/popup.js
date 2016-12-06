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
      data: {'url': previewUrl },
      contentType: 'application/json',
      headers: {'X-API-Key': 'dxrvYOC82H8SXTMwbXulbjEEYHBDKk6td8IVHMPe'},
      url: 'https://mercury.postlight.com/parser',

      success: function(data) {
        console.log(data);
        $('#show-title').text(data.title);
        $('#show-site_name').attr('href', data.url);
        $('#show-site_name').text(data.domain);
        $('#show-data').append(data.content);
      }
    });
});

