'use strict';


    var showData = $('#show-data');
    var previewUrl = localStorage.getItem('previewUrl');

$(document).ready(function(){
    $.ajax({
      type: 'GET',
      data: { 'api_key': '5ad37c72c8db4e54bcb033706e1183e2', 'url': previewUrl, 'callback': 'test' },
      dataType: 'json',
      crossDomain: true,
      url: 'https://www.instaparser.com/api/1/article',

      success: function(data) {
        console.log(data);
        var htmlParse = data.html;
        showData.append('<p>'+htmlParse+'</p>');
      }
    });
});

