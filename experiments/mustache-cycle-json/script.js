
  $.getJSON('data.json', function(data) {
      var template = $('#userstemplate').html();
      var html = Mustache.to_html(template, data);
      $('#carousel').html(html);

      $('#carousel').cycle({
          fx: 'fade',
          pause: 1,
          next: '#next_btn',
          prev: '#prev_btn',
          speed: 500,
          timeout: 1000
      });


  }); // get getJSON
