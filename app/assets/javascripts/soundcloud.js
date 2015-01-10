SC.initialize({
  client_id: '54676d6d8a85db281aca669ed3ed9fc4'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'indie' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});
