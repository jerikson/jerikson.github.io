
$('#search').keyup(function() {
  var searchField = $('#search').val();
  var regex = new RegExp(searchField, "i");

  $.getJSON('data.json', function(data) {
    var output = '<ul class="searchresults">';
    $.each(data, function(key,val) {
      if ((val.name.search(regex) != -1)  || (val.bio.search(regex) != -1)) {
        output += '<li>';
        output += '<h4>' + val.name + '</h4>';
        output += '<img class="" src="images/'+ val.name +'.png" alt=""/>';
        output += '<p>' + val.bio + '</p>';
        output += '</li>';
      }
    });
    output += '</ul>';
    $('#update').html(output);
  });

});
