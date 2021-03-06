$(document).ready(function() {
  $('.box').hide();
  $('#generator').click(function() {
    $('.box').hide();
    $('.quote').text("");
    $('.author').text("");
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: "GET",
      dataType: 'json',
      success: function(data) {
        $('.quote').text('"' + data.quote + '"');
        $('.author').text('--' + data.author);
        $('.box').addClass('animated fadeInLeft').show();
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader(//removed API key)
      }
    })
  })
});
