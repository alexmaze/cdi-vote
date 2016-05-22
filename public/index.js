$(function () {
  console.log("ready!");

  $('#submit').on('click', function () {
    var name = $('#name').val();
    console.log(name);
    $.post('/api/vote/vote', { 'name': name })
      .done(function (ret) {
        $('#vote_status').html('vote ' + (ret.success ? 'success' : 'fail'));
      });
  });

  setInterval(function () {
    $.get('/api/vote/status')
      .done(function (ret) {
        // console.log(ret);
        $('#status').html('load data ' + (ret.success ? 'success' : 'fail'));
        if (ret.success && ret.data) {
          var html = [];
          for (var i = 0; i < ret.data.length; i++) {
            html.push('<p>', ret.data[i].name, ' : ', ret.data[i].time, '</p>');
          }
          $('#data').html(html);
        }
      });
  }, 2000);
});
