SC.initialize({
  client_id: '54676d6d8a85db281aca669ed3ed9fc4'
});

// $("#loadTracks").live("click", function(){
//   SC.get("/tracks", {limit: 1}, function(tracks){
//     var track = tracks[0];
//     SC.oEmbed(track.uri, document.getElementById("track"));
//   });
// });

// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });
//
// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'indie' }, function(tracks) {
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });
//   });
// });
//
// var json = '{"track.title":true,"count":1}',
//     obj = JSON.parse(json);
//
// alert(obj.count);
