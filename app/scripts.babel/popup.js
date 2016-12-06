'use strict';

var previewUrl = localStorage.getItem('previewUrl');

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
        $('#show-site').attr('href', data.url);
        $('#show-data').append(data.content);
      }
    });
});

